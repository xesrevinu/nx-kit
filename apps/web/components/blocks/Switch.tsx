import { Heading, Switch } from '@org/ui';
import { Block } from '@/components/Block';

export function SwitchBlock() {
  return (
    <Block title="Switch">
      <Heading css={{ mb: '$6' }}>Sizes</Heading>
      <Switch />
      <Switch size="2" css={{ ml: '$6' }} />
    </Block>
  );
}
