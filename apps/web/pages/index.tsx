import { Header } from '@/components/Header';
import * as Icons from '@org/icons';
import * as S from '@org/shared';
import * as T from '@org/types';
import { Box, Flex, Heading, Text } from '@org/ui';
import { useEffect } from 'react';

export function Index() {
  useEffect(() => {
    console.log("types", T.Logger)
    console.log("shared", S)
    console.log('icons', Icons)
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
      <Header />
      <Flex justify={'center'} align="center" style={{ height: 'calc(100vh - 175px)' }}>
        <Heading variant={"blue"} size="4">
          Hello World
        </Heading>
      </Flex>
    </div>
  );
}

export default Index;
