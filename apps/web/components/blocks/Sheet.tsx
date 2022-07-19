import { Button, Flex, Sheet, SheetContent, SheetTrigger } from '@org/ui';
import { Block } from '@/components/Block';

export function SheetBlock() {
  return (
    <Block title="Sheet">
      <Flex gap={3}>
        <Sheet>
          <SheetTrigger asChild>
            <Button>Open Sheet</Button>
          </SheetTrigger>
          <SheetContent />
        </Sheet>
        <Sheet>
          <SheetTrigger asChild>
            <Button>Top</Button>
          </SheetTrigger>
          <SheetContent side="top" />
        </Sheet>
        <Sheet>
          <SheetTrigger asChild>
            <Button>Right</Button>
          </SheetTrigger>
          <SheetContent side="right" />
        </Sheet>
        <Sheet>
          <SheetTrigger asChild>
            <Button>Bottom</Button>
          </SheetTrigger>
          <SheetContent side="bottom" />
        </Sheet>
        <Sheet>
          <SheetTrigger asChild>
            <Button>Left</Button>
          </SheetTrigger>
          <SheetContent side="left" />
        </Sheet>
      </Flex>
    </Block>
  );
}
