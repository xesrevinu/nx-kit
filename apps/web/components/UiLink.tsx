import { Box, Link, Text } from '@org/ui';

export function UiLink({ name }: { name: string }) {
  return (
    <Box css={{ my: '$1' }}>
      <Link href={`#${name}`} variant="subtle" css={{ display: 'inline-flex' }}>
        <Text size="2" css={{ lineHeight: '20px' }}>
          {name}
        </Text>
      </Link>
    </Box>
  );
}
