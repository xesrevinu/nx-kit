import { Box, Button, Flex, Image } from '@org/ui';
import { ArrowRightIcon, PlusIcon } from '@radix-ui/react-icons';
import { Block } from '@/components/Block';

export function ButtonBlock() {
  return (
    <Block title="Button">
      <Flex css={{ gap: '$6' }}>
        <Button>Button</Button>
        <Button size="2">Button</Button>
        <Button size="3">Button</Button>
      </Flex>
      <Flex css={{ mt: '$6', gap: '$6' }}>
        <Button>Button</Button>
        <Button variant="blue">Important</Button>
        <Button variant="green">Secure</Button>
        <Button variant="red">Warning</Button>
      </Flex>
      <Flex css={{ mt: '$6', gap: '$6' }}>
        <Button ghost>Button</Button>
        <Button ghost variant="blue">
          Important
        </Button>
        <Button ghost variant="green">
          Secure
        </Button>
        <Button ghost variant="red">
          Warning
        </Button>
      </Flex>

      <Flex css={{ mt: '$6', gap: '$6' }}>
        <Button variant="red" disabled>
          Disabled
        </Button>
        <Button variant="red" state="active">
          Active
        </Button>
        <Button variant="red" state="waiting" disabled>
          Waiting
        </Button>
      </Flex>
      <Flex css={{ gap: '$6', mt: '$6' }}>
        <Button>
          <Box
            css={{
              mr: '$1',
            }}
          >
            <PlusIcon />
          </Box>
          Button
        </Button>
        <Button variant="blue">
          Button
          <Box
            css={{
              ml: '$1',
            }}
          >
            <ArrowRightIcon />
          </Box>
        </Button>
        <Button variant="green">
          <Box
            css={{
              mr: '$1',
            }}
          >
            <PlusIcon />
          </Box>
          Button
          <Box
            css={{
              ml: '$1',
            }}
          >
            <ArrowRightIcon />
          </Box>
        </Button>
      </Flex>
      <Box
        css={{
          position: 'relative',
          width: '50%',
          my: '$4',
        }}
      >
        <Image src="https://images.unsplash.com/photo-1447690709975-318628b14c57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80" />
        <Box
          css={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            m: '$4',
          }}
        >
          <Button variant="transparentWhite">Transparent</Button>
        </Box>
      </Box>
      <Box
        css={{
          position: 'relative',
          width: '50%',
          my: '$4',
        }}
      >
        <Image src="https://images.unsplash.com/photo-1453235421161-e41b42ebba05?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80" />
        <Box
          css={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            m: '$4',
          }}
        >
          <Button variant="transparentBlack">Transparent</Button>
        </Box>
      </Box>
    </Block>
  );
}
