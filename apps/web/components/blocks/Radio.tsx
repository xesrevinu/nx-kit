import { Heading, Radio, RadioGroup } from '@org/ui';
import { Block } from '@/components/Block';

export function RadioBlock() {
  return (
    <Block title="Radio">
      <Heading css={{ mb: '$6' }}>Sizes</Heading>
      <RadioGroup defaultValue="1">
        <Radio value="1" css={{ mr: '$5' }} />
        <Radio value="2" size="2" css={{ mr: '$5' }} />
      </RadioGroup>
    </Block>
  );
}
