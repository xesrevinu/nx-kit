import NextLink from 'next/link';
import { Box, Flex, Link, Text } from '@org/ui';
import { ThemeToggle } from '@/components/ThemeToggle';
import { StitchesLogo } from '@/components/StitchesLogo';

export function Header() {
  return (
    <Flex
      as="header"
      css={{
        py: '$4',
        px: '$4',
        jc: 'space-between',
        position: 'relative',
        zIndex: '1',
      }}
    >
      <NextLink href="/" passHref>
        <Box
          as="a"
          css={{
            color: '$hiContrast',
            display: 'inline-flex',
            '&:focus': {
              boxShadow: 'none',
            },
          }}
        >
          <span
            style={{
              position: 'absolute',
              width: 1,
              height: 1,
              padding: 0,
              margin: -1,
              overflow: 'hidden',
              clip: 'rect(0, 0, 0, 0)',
              whiteSpace: 'nowrap',
              border: 0,
            }}
          >
            homepage
          </span>
          <StitchesLogo />
        </Box>
      </NextLink>
      <Flex as="nav" css={{ ai: 'center' }}>
        <NextLink href="/components" passHref>
          <Link variant="subtle" css={{ mr: '$5', '@bp2': { mr: '$7' } }}>
            <Text>Components</Text>
          </Link>
        </NextLink>
        <NextLink href="/blog" passHref>
          <Link variant="subtle" css={{ mr: '$5', '@bp2': { mr: '$7' } }}>
            <Text>Blog</Text>
          </Link>
        </NextLink>
        <ThemeToggle />
      </Flex>
    </Flex>
  );
}
