import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@org/ui';
import { Block } from '@/components/Block';

export function DropdownMenuBlock() {
  return (
    <Block title="Dropdown Menu">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Dropdown</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuGroup>
            <DropdownMenuItem>Item</DropdownMenuItem>
            <DropdownMenuItem>Item</DropdownMenuItem>
            <DropdownMenuItem>Item</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem>Item</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Item</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Item</DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Choose one</DropdownMenuLabel>
            <DropdownMenuRadioGroup value="one">
              <DropdownMenuRadioItem value="one">Item</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="two">Item</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="three">Item</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </Block>
  );
}
