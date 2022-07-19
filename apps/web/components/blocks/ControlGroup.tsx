import { Button, ControlGroup, Select, TextField } from '@org/ui';
import { Block } from '@/components/Block';

export function ControlGroupBlock() {
  return (
    <Block title="Control Group">
      <ControlGroup>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ControlGroup>
      <ControlGroup css={{ mt: '$6' }}>
        <Button>Button</Button>
        <Button>Button</Button>
      </ControlGroup>
      <ControlGroup css={{ mt: '$6' }}>
        <Button>Button</Button>
        <TextField placeholder="Hello world" />
      </ControlGroup>
      <ControlGroup css={{ mt: '$6' }}>
        <TextField placeholder="Hello world" />
        <Button>Button</Button>
      </ControlGroup>
      <ControlGroup css={{ mt: '$6' }}>
        <TextField size="1" placeholder="Hello world" />
        <Select>
          <option>Button</option>
          <option>Button</option>
          <option>Button</option>
          <option>Button</option>
          <option>Button</option>
        </Select>
      </ControlGroup>
      <ControlGroup css={{ mt: '$6' }}>
        <TextField placeholder="Hello world" />
        <TextField placeholder="Hello world" />
        <TextField placeholder="Hello world" />
      </ControlGroup>
      <ControlGroup css={{ mt: '$6' }}>
        <TextField size="2" placeholder="Hello world" />
        <Button size="2">Button</Button>
      </ControlGroup>
    </Block>
  );
}
