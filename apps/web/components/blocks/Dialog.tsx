import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  Flex,
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
  Text,
} from '@org/ui';
import { Block } from '@/components/Block';

export function DialogBlock() {
  return (
    <Block title="Dialog">
      <Flex gap={2}>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <Text size="5" as="h6" css={{ fontWeight: 500, mb: '$3' }}>
              Dialog Heading
            </Text>
            <Text size="3" as="p" css={{ lineHeight: '25px' }}>
              There are 5 variants to choose from. Use is for positive states. This is a link Traditional business
              literature won’t help you solve it- most of that stuff is focused on life after product/market fit, after
              the Trough of Sorrow.
            </Text>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button>Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <Text size="5" as="h6" css={{ fontWeight: 500, mb: '$3' }}>
              Dialog Heading
            </Text>
            <Text size="3" as="p" css={{ lineHeight: '25px' }}>
              There are 5 variants to choose from. Use is for positive states. This is a link Traditional business
              literature won’t help you solve it- most of that stuff is focused on life after product/market fit, after
              the Trough of Sorrow.
            </Text>
            <Flex justify="end">
              <Popover>
                <PopoverTrigger asChild>
                  <Button>Open</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverClose asChild>
                    <Button ghost>Close</Button>
                  </PopoverClose>
                </PopoverContent>
              </Popover>
            </Flex>
          </DialogContent>
        </Dialog>
      </Flex>
    </Block>
  );
}
