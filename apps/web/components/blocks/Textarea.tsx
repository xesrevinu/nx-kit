import { Flex, TextArea } from '@org/ui';
import { Block } from '@/components/Block';

export function TextareaBlock() {
  return (
    <Block title="Textarea">
      <Flex css={{ ai: 'flex-start', gap: '$6' }}>
        <TextArea size="1" placeholder="Size 1" />
        <TextArea size="2" placeholder="Size 1" />
        <TextArea size="3" placeholder="Size 1" />
      </Flex>
      <Flex css={{ ai: 'flex-start', gap: '$6', mt: '$6' }}>
        <TextArea size="2" placeholder="Size 1" disabled />
        <TextArea size="2" placeholder="Size 1" readOnly defaultValue="eihuweofjew" />
      </Flex>
    </Block>
  );
}
