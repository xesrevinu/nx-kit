import { renderToReadableStream } from 'react-dom/server';
import * as S from '@org/shared'
import App from './App'

const dt = new Intl.DateTimeFormat();

export default {
  port: 3000,
  async fetch(request: Request) {
    console.log('S', S)

    Effect.succeed(10).unsafeRunPromise().then(console.log)

    return new Response(
      await renderToReadableStream(
        <html>
          <head>
            <title>Hello World</title>
          </head>
          <body>
            <h1>Hello from React!</h1>
            <p>The date is {dt.format(new Date())}</p>
            <App url={request.url} />
          </body>
        </html>
      )
    );
  },
};
