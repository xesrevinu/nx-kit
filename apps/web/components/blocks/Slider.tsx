import { Box, Flex, Heading, Slider } from '@org/ui';
import { Block } from '@/components/Block';

export function SliderBlock() {
  return (
    <Block title="Slider">
      <Heading css={{ mb: '$6' }}>Default</Heading>
      <Box css={{ width: '150px', mb: '$7' }}>
        <Slider defaultValue={[50]} />
      </Box>
      <Heading css={{ mb: '$6' }}>Range</Heading>
      <Flex css={{ gap: '$4', width: '150px', mb: '$7' }}>
        <Slider defaultValue={[25, 75]} />
      </Flex>
      <Heading css={{ mb: '$6' }}>Vertical orientaiton</Heading>
      <Box css={{ mt: '$6' }}>
        <Slider defaultValue={[50]} orientation="vertical" css={{ height: 75 }} />
      </Box>
    </Block>
  );
}
