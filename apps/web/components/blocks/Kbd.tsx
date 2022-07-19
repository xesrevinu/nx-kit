import { Box, Container, Flex, Grid, Heading, Kbd, Text } from '@org/ui';
import { TriangleUpIcon } from '@radix-ui/react-icons';
import { Block } from '@/components/Block';

function Kbds() {
  return (
    <Container size="2">
      <Heading>Kbd variants</Heading>
      <Grid css={{ gridTemplateColumns: 'repeat(3, 1fr)', my: '$5' }}>
        <Box>
          <Flex css={{ mb: '31px' }}>
            <Kbd>Space</Kbd>
          </Flex>
          <Flex css={{ mb: '31px' }}>
            <Kbd>Enter</Kbd>
          </Flex>
          <Flex css={{ mb: '31px' }}>
            <Kbd>Tab</Kbd>
          </Flex>
          <Flex css={{ mb: '31px' }}>
            <Kbd>Shift + Tab</Kbd>
          </Flex>
          <Flex css={{ mb: '31px' }}>
            <Kbd>Esc</Kbd>
          </Flex>
        </Box>
        <Box>
          <Flex css={{ mb: '$5' }}>
            <Kbd>I</Kbd>
            <Kbd>A</Kbd>
            <Kbd>W</Kbd>
          </Flex>
          <Flex css={{ mb: '$5' }}>
            <Kbd>⇧</Kbd>
            <Kbd>⌘</Kbd>
            <Kbd>A</Kbd>
          </Flex>
          <Flex css={{ mb: '$5' }}>
            <Kbd>⌘ + Tab</Kbd>
          </Flex>
          <Flex css={{ mb: '$5' }}>
            <Kbd width="command">⌘</Kbd>
            <Kbd>Tab</Kbd>
          </Flex>
          <Flex css={{ mb: '$5' }}>
            <Kbd width="shift">⇧</Kbd>
            <Kbd>↑</Kbd>
          </Flex>
          <Flex css={{ mb: '$5' }}>
            <Kbd width="shift">⇧</Kbd>
            <Kbd>Tab</Kbd>
          </Flex>
          <Flex css={{}}>
            <Kbd width="space">Space</Kbd>
          </Flex>
        </Box>
        <Box>
          <Flex css={{ mb: '$5' }}>
            <Kbd size="1">I</Kbd>
            <Kbd size="1">A</Kbd>
            <Kbd size="1">W</Kbd>
          </Flex>
          <Flex css={{ mb: '$5' }}>
            <Kbd size="1">⇧</Kbd>
            <Kbd size="1">⌘</Kbd>
            <Kbd size="1">W</Kbd>
          </Flex>
          <Flex css={{ mb: '$5' }}>
            <Kbd size="1">⌘ + Tab</Kbd>
          </Flex>
          <Flex css={{ mb: '$5' }}>
            <Kbd size="1" width="command">
              ⌘
            </Kbd>
            <Kbd size="1">Tab</Kbd>
          </Flex>
          <Flex css={{ mb: '$5' }}>
            <Kbd size="1" width="shift">
              ⇧
            </Kbd>
            <Kbd size="1">↑</Kbd>
          </Flex>
          <Flex css={{ mb: '$5' }}>
            <Kbd size="1" width="shift">
              ⇧
            </Kbd>
            <Kbd size="1">Tab</Kbd>
          </Flex>
          <Flex css={{}}>
            <Kbd size="1" width="space">
              Space
            </Kbd>
          </Flex>
        </Box>
      </Grid>
    </Container>
  );
}


export function KbdBlock() {
  return (
    <Block title="Kbd">
      <Heading css={{ mb: '$6' }}>Kbd test</Heading>
      <Flex css={{ ai: 'center', jc: 'space-between', mb: '$7' }}>
        <Text>Resize selected object</Text>
        <Flex css={{ ai: 'center', gap: '$1' }}>
          <Kbd>⌘</Kbd>
          <Kbd>⇧</Kbd>
          <Kbd>
            <TriangleUpIcon />
          </Kbd>
        </Flex>
      </Flex>
      <Kbds />
    </Block>
  );
}
