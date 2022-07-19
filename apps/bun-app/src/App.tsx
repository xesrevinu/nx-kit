import { useEffect, useState } from "react";
import * as Http from './http';

// import { Database } from "bun:sqlite";
// console.log(Database)

export class Todo {
  readonly _tag = 'Todo'

  constructor(readonly value: { userId: number, id: number, title: string, completed: boolean }) { }
}

export interface TodoRepo {
  readonly getTodo: (id: number) => Effect<never, Http.FetchError | Http.JsonBodyError, Todo>
  readonly getTodos: (ids: number[]) => Effect<never, Http.FetchError | Http.JsonBodyError, Chunk<Todo>>
}

export const TodoRepo = Service.Tag<TodoRepo>()

export const LiveTodoRepo = Layer.fromEffect(TodoRepo, Effect.succeed(() => {
  const getTodo = (id: number) =>
    Http.request(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .flatMap(Http.jsonBody)
      // Effect.succeed({ userId: 1, id: id, title: `Todo ${id}`, completed: false })
      .map(value => new Todo(value))

  const getTodos = (ids: number[]) =>
    Effect.forEachPar(ids, getTodo)

  return {
    getTodo,
    getTodos,
  }
}))

function App({ url }: { url: string }) {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const program = Do(($) => {
      const Todos = $(Effect.service(TodoRepo))

      console.log("change 4");

      const todos = $(Todos.getTodos([1, 2, 3, 4, 5]))

      return todos.toArray
    })

    const main = program.provideLayer(LiveTodoRepo)

    main.unsafeRunPromise()
      .then((res) => setTodos(res))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h3>Welcome to Bun & React & Effect!</h3>
        <div>Todo List</div>
        <ul>
          {todos.map(todo => (
            <li key={todo.value.id}>
              {todo.value.title}
              <span style={{ marginLeft: '10px', color: 'blue' }}>{todo.value.completed && "completed"}</span>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
