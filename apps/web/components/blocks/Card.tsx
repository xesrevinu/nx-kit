import { Avatar, Box, Card, Flex, Heading, Image, Text } from '@org/ui';
import { Block } from '@/components/Block';

export function CardBlock() {
  return (
    <Block title="Card">
      <Flex css={{ gap: '$3' }}>
        <Box css={{ width: 250 }}>
          <Card css={{ p: '$3' }}>
            <Heading css={{ mb: '$2' }}>Modulz raises $4.2M to close the gap between design and code</Heading>
            <Text size="3" css={{ color: '$slate11', lineHeight: '23px' }}>
              Modulz is a visual code editor that empowers teams to design, develop, document and deploy a design
              system, without writing code.
            </Text>
          </Card>
        </Box>
        <Box css={{ width: 250 }}>
          <Card as="a" href="#" css={{ p: '$3' }} variant="interactive">
            <Heading css={{ mb: '$2' }}>Modulz raises $4.2M to close the gap between design and code</Heading>
            <Text size="3" css={{ color: '$slate11', lineHeight: '23px' }}>
              Modulz is a visual code editor that empowers teams to design, develop, document and deploy a design
              system, without writing code.
            </Text>
            <Flex css={{ ai: 'center', jc: 'space-between', mt: '$3' }}>
              <Flex css={{ ai: 'center' }}>
                <Avatar
                  size="2"
                  alt="John Smith"
                  src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                  fallback="J"
                  css={{
                    mr: '$1',
                  }}
                />
                <Text size="2" css={{ color: '$slate11' }}>
                  Colm Tuite
                </Text>
              </Flex>
              <Box>
                <Text size="2" css={{ color: '$slate11' }}>
                  May 2020
                </Text>
              </Box>
            </Flex>
          </Card>
        </Box>
        <Box css={{ width: 250 }}>
          <Card as="a" href="#" variant="interactive">
            <Image
              src="https://images.unsplash.com/photo-1453235421161-e41b42ebba05?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80"
              css={{ btlr: '$3', btrr: '$3' }}
            />
            <Box css={{ p: '$3' }}>
              <Heading css={{ mb: '$2' }}>Modulz raises $4.2M to close the gap between design and code</Heading>
              <Text size="3" css={{ color: '$slate11', lineHeight: '23px' }}>
                Modulz is a visual code editor that empowers teams to design, develop, document and deploy a design
                system, without writing code.
              </Text>
              <Flex css={{ ai: 'center', jc: 'space-between', mt: '$3' }}>
                <Flex css={{ ai: 'center' }}>
                  <Avatar
                    size="2"
                    alt="John Smith"
                    src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                    fallback="J"
                    css={{
                      mr: '$1',
                    }}
                  />
                  <Text size="2" css={{ color: '$slate11' }}>
                    Colm Tuite
                  </Text>
                </Flex>
                <Box>
                  <Text size="2" css={{ color: '$slate11' }}>
                    May 2020
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Card>
        </Box>
        <Box css={{ width: 250 }}>
          <Card as="a" href="#" variant="ghost" css={{ p: '$3' }}>
            <Image
              src="https://images.unsplash.com/photo-1453235421161-e41b42ebba05?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80"
              css={{ br: '$1', mb: '$3' }}
            />
            <Heading css={{ mb: '$2' }}>Modulz raises $4.2M to close the gap between design and code</Heading>
            <Text size="3" css={{ color: '$slate11', lineHeight: '23px' }}>
              Modulz is a visual code editor that empowers teams to design, develop, document and deploy a design
              system, without writing code.
            </Text>
            <Flex css={{ ai: 'center', jc: 'space-between', mt: '$3' }}>
              <Flex css={{ ai: 'center' }}>
                <Avatar
                  size="2"
                  alt="John Smith"
                  src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                  fallback="J"
                  css={{
                    mr: '$1',
                  }}
                />
                <Text size="2" css={{ color: '$slate11' }}>
                  Colm Tuite
                </Text>
              </Flex>
              <Box>
                <Text size="2" css={{ color: '$slate11' }}>
                  May 2020
                </Text>
              </Box>
            </Flex>
          </Card>
        </Box>
        <Box css={{ width: 250 }}>
          <Card as="button" variant="active" css={{ p: '$3' }}>
            <Text size="3" css={{ lineHeight: '23px', fontWeight: 500 }}>
              Default Variants
            </Text>
            <Text size="3" css={{ color: '$slate11', lineHeight: '23px' }}>
              Modulz is a visual code.
            </Text>
          </Card>
        </Box>
      </Flex>
    </Block>
  );
}
