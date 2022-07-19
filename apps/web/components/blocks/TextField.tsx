import { Flex, TextField } from '@org/ui';
import { Block } from '@/components/Block';

export function TextFieldBlock() {
  return (
    <Block title="TextField">
      <Flex css={{ ai: 'flex-start', gap: '$6' }}>
        <TextField size="1" placeholder="Size 1" />
        <TextField size="2" placeholder="Size 2" />
      </Flex>
      <Flex css={{ ai: 'flex-start', gap: '$6', mt: '$6' }}>
        <TextField size="1" placeholder="Ghost" variant="ghost" />
        <TextField size="2" placeholder="Ghost" variant="ghost" />
      </Flex>
      <Flex css={{ ai: 'flex-start', gap: '$6', mt: '$6' }}>
        <TextField placeholder="Invalid" state="invalid" />
        <TextField placeholder="Valid" state="valid" />
      </Flex>
      <Flex css={{ ai: 'flex-start', gap: '$6', mt: '$6' }}>
        <TextField placeholder="Cursor default" cursor="default" />
        <TextField placeholder="Cursor text" cursor="text" />
      </Flex>
      <Flex css={{ ai: 'flex-start', gap: '$6', mt: '$6' }}>
        <TextField placeholder="Read only placeholder" readOnly />
        <TextField placeholder="Read only value" defaultValue="100" readOnly />
        <TextField placeholder="Disabled placeholder" disabled />
        <TextField placeholder="Disabled value" defaultValue="100" disabled />
      </Flex>
    </Block>
  );
}
