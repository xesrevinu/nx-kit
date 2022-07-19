import { Checkbox, Flex, Heading } from '@org/ui';
import { Block } from '@/components/Block';

export function CheckboxBlock() {
  return (
    <Block title="Checkbox">
      <Heading css={{ mb: '$6' }}>Sizes</Heading>
      <Flex>
        <Checkbox css={{ mr: '$5' }} />
        <Checkbox size="2" css={{ mr: '$5' }} />
      </Flex>
    </Block>
  );
}
