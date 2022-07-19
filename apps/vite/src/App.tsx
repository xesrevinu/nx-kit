import * as Icons from '@org/icons';
// import * as S from '@org/shared';
import * as Effect from '@effect/core/io/Effect'
import * as T from '@org/types';
import { Box, Flex, Heading } from '@org/ui';
import { useEffect } from 'react'
import { pipe } from '@tsplus/stdlib/data/Function';
import * as IA from '@tsplus/stdlib/collections/ImmutableArray';

const App: React.FC = () => {
  useEffect(() => {
    const program = Effect.gen(function* ($) {
      const TestLog = yield* $(T.Logger)

      TestLog.info("web change3 lol")
    })


    const exit = pipe(
      program,
      Effect.provideLayer(T.LiveLoggerLayer),
      Effect.unsafeRunPromiseExit
    )

    exit.catch(error => console.error(error))

    console.log(IA.append(1)(IA.make(10, 2)));
  }, [])

  return (
    <div>
      <Box
        css={{
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          position: 'absolute',
          zIndex: '-1',
          background:
            'radial-gradient(circle at top left, $violet4, rgba(255, 255, 255, 0) 15%), radial-gradient(circle at 80% 20%, $cyan4, rgba(255, 255, 255, 0) 15%)',
          '@bp2': {
            background:
              'radial-gradient(circle at 15% 50%, $violet4, rgba(255, 255, 255, 0) 25%), radial-gradient(circle at 85% 30%, $cyan4, rgba(255, 255, 255, 0) 25%)',
          },
        }}
      />
      <Flex justify={'center'} align="center" style={{ height: 'calc(100vh - 175px)' }}>
        <Heading variant={"blue"} size="4">
          Hello Vite & Effect
        </Heading>
      </Flex>
    </div>
  )
}

export default App
