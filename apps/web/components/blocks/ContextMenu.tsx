import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
  ContextMenuTriggerItem,
  Flex,
  styled,
  Text,
} from '@org/ui';
import { Block } from '@/components/Block';

const RightSlot = styled('div', {
  marginLeft: 'auto',
  paddingLeft: 20,
  color: '$slate11',
  ':focus > &': { color: '$slate9' },
  '[data-disabled] &': { color: '$slateA8' },
});

export function ContextMenuBlock() {
  return (
    <Block title="Context Menu">
      <ContextMenu>
        <ContextMenuTrigger>
          <Flex
            css={{
              ai: 'center',
              jc: 'center',
              height: '$9',
              bc: '$slate2',
              border: '2px dashed $slate6',
              br: '$2',
            }}
          >
            <Text variant="gray">Right-click me</Text>
          </Flex>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuGroup>
            <ContextMenuItem>Item</ContextMenuItem>
            <ContextMenuItem>
              Item
              <RightSlot>Right</RightSlot>
            </ContextMenuItem>
            <ContextMenu>
              <ContextMenuTriggerItem>More Items</ContextMenuTriggerItem>
              <ContextMenuContent>
                <ContextMenuItem>Item</ContextMenuItem>
                <ContextMenuItem>Item</ContextMenuItem>
                <ContextMenu>
                  <ContextMenuTriggerItem>More Items</ContextMenuTriggerItem>
                  <ContextMenuContent>
                    <ContextMenuItem>Item</ContextMenuItem>
                    <ContextMenuItem>Item</ContextMenuItem>
                    <ContextMenuItem disabled>Disabled Item</ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
                <ContextMenuItem disabled>Disabled Item</ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
            <ContextMenuItem disabled>Disabled Item</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem>Checkbox Item</ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem checked>Checkbox Item</ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem>Checkbox Item</ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem disabled>Disabled Checkbox Item</ContextMenuCheckboxItem>
            <ContextMenuSeparator />
            <ContextMenuLabel>Choose one</ContextMenuLabel>
            <ContextMenuRadioGroup value="one">
              <ContextMenuRadioItem value="one">Radio Item</ContextMenuRadioItem>
              <ContextMenuRadioItem value="two">Radio Item</ContextMenuRadioItem>
              <ContextMenuRadioItem value="three">Radio Item</ContextMenuRadioItem>
              <ContextMenuRadioItem value="four" disabled>
                Radio Item
              </ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
    </Block>
  );
}
