import { Box, Container, TextField, Flex, Button, Paragraph, Grid, Text } from '@org/ui';
import { Block } from '@/components/Block';

export function ContainerBlock() {
  return (
    <Block title="Container">
      <Container size="1">
        <Box
          css={{
            p: '$5',
            border: '1px solid $slate6',
            borderRadius: '$3',
          }}
        >
          <form>
            <TextField type="email" size="2" placeholder="Email" autoComplete="off" css={{ mb: '$3' }} />
            <TextField type="password" size="2" placeholder="Password" autoComplete="off" css={{ mb: '$3' }} />
            <Flex css={{ ai: 'center', jc: 'space-between' }}>
              <Text size="2" css={{ color: '$slate11' }}>
                Forgot password
              </Text>
              <Button size="2" variant="blue">
                Log in
              </Button>
            </Flex>
          </form>
        </Box>
      </Container>
      <Container size="2" css={{ my: '$9' }}>
        <Paragraph>
          This is a really long paragraph of text, to demonstrate prose text, like for example, the kind you might read
          in a blog post. The reason we&apos;re using prose here is because the most common use case for this container
          size is longform text. So we&apos;re previewing some longform text here so we can make sure the container
          width provides an optimal line length for this font size.
        </Paragraph>
      </Container>
      <Container size="3" css={{ my: '$9' }}>
        <Grid
          css={{
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '$7',
          }}
        >
          <Box>
            <Text as="p" size="4" css={{ lineHeight: '27px' }}>
              This is a much shorter paragraph of text, to demonstrate narrow text container. The reason we&apos;re
              using text here is because one common use case for this container size is a 3-up grid.
            </Text>
          </Box>
          <Box>
            <Text as="p" size="4" css={{ lineHeight: '27px' }}>
              This is a much shorter paragraph of text, to demonstrate narrow text container. The reason we&apos;re
              using text here is because one common use case for this container size is a 3-up grid.
            </Text>
          </Box>
          <Box>
            <Text as="p" size="4" css={{ lineHeight: '27px' }}>
              This is a much shorter paragraph of text, to demonstrate narrow text container. The reason we&apos;re
              using text here is because one common use case for this container size is a 3-up grid.
            </Text>
          </Box>
        </Grid>
      </Container>
      <Container size="4">
        <Text as="p" size="3" css={{ ta: 'center', bc: '$slate3', py: '$2' }}>
          No max width
        </Text>
      </Container>
    </Block>
  );
}
