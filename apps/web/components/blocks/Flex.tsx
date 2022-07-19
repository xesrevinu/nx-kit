import { Box, Flex, Heading } from '@org/ui';
import { Block } from '@/components/Block';

export function FlexBlock() {
  return (
    <Block title="Flex">
      <Heading>Column</Heading>
      <Box css={{ background: '$slate3', mt: '$3', p: '$3' }}>
        <Flex direction="column" align="center" gap="6">
          <Box css={{ width: '$1', height: '$1', bc: '$blue9' }} />
          <Box css={{ width: '$2', height: '$2', bc: '$blue9' }} />
          <Box css={{ width: '$3', height: '$3', bc: '$blue9' }} />
          <Box css={{ width: '$4', height: '$4', bc: '$blue9' }} />
          <Box css={{ width: '$5', height: '$5', bc: '$blue9' }} />
          <Box css={{ width: '$6', height: '$6', bc: '$blue9' }} />
        </Flex>
      </Box>
      <Heading css={{ mt: '$3' }}>Row</Heading>
      <Box css={{ background: '$slate3', mt: '$3', p: '$3' }}>
        <Flex direction="row" align="center" gap="6">
          <Box css={{ width: '$1', height: '$1', bc: '$blue9' }} />
          <Box css={{ width: '$2', height: '$2', bc: '$blue9' }} />
          <Box css={{ width: '$3', height: '$3', bc: '$blue9' }} />
          <Box css={{ width: '$4', height: '$4', bc: '$blue9' }} />
          <Box css={{ width: '$5', height: '$5', bc: '$blue9' }} />
          <Box css={{ width: '$6', height: '$6', bc: '$blue9' }} />·
        </Flex>
      </Box>
    </Block>
  );
}
