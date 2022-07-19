import { SimpleToggle } from '@org/ui';
import { ShadowNoneIcon } from '@radix-ui/react-icons';
import { Block } from '@/components/Block';

export function SimpleToggleBlock() {
  return (
    <Block title="Simple Toggle">
      <SimpleToggle shape="circle">
        <ShadowNoneIcon />
      </SimpleToggle>
    </Block>
  );
}
