import { Badge, Box, Button, Flex, IconButton, Popover, PopoverContent, PopoverTrigger, Text } from '@org/ui';
import { CaretDownIcon, VideoIcon } from '@radix-ui/react-icons';
import { Block } from '@/components/Block';

export function PopoverBlock() {
  return (
    <Block title="Popover">
      <Flex css={{ gap: '$6', fw: 'wrap' }}>
        <Popover>
          <PopoverTrigger asChild>
            <Button>Popover</Button>
          </PopoverTrigger>
          <PopoverContent css={{ padding: '$3' }}>
            <Text size="2" css={{ lineHeight: '18px' }}>
              The other main improvement is with tables, which we&apos;ll probably use a lot. With horizontal overflow
              on small devices and when zoomed in.
            </Text>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <Button>Hide arrow</Button>
          </PopoverTrigger>
          <PopoverContent css={{ padding: '$3' }} hideArrow>
            <Text size="2" css={{ lineHeight: '18px' }}>
              The other main improvement is with tables, which we&apos;ll probably use a lot. With horizontal overflow
              on small devices and when zoomed in.
            </Text>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="blue">Blue</Button>
          </PopoverTrigger>
          <PopoverContent css={{ padding: '$3' }}>
            <Text size="2" css={{ lineHeight: '18px' }}>
              The other main improvement is with tables, which we&apos;ll probably use a lot. With horizontal overflow
              on small devices and when zoomed in.
            </Text>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="green">Green</Button>
          </PopoverTrigger>
          <PopoverContent css={{ padding: '$3' }}>
            <Text size="2" css={{ lineHeight: '18px' }}>
              The other main improvement is with tables, which we&apos;ll probably use a lot. With horizontal overflow
              on small devices and when zoomed in.
            </Text>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="red">Red</Button>
          </PopoverTrigger>
          <PopoverContent css={{ padding: '$3' }}>
            <Text size="2" css={{ lineHeight: '18px' }}>
              The other main improvement is with tables, which we&apos;ll probably use a lot. With horizontal overflow
              on small devices and when zoomed in.
            </Text>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <Button ghost>Ghost</Button>
          </PopoverTrigger>
          <PopoverContent css={{ padding: '$3' }}>
            <Text size="2" css={{ lineHeight: '18px' }}>
              The other main improvement is with tables, which we&apos;ll probably use a lot. With horizontal overflow
              on small devices and when zoomed in.
            </Text>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <IconButton>
              <VideoIcon />
            </IconButton>
          </PopoverTrigger>
          <PopoverContent css={{ padding: '$3' }}>
            <Text size="2" css={{ lineHeight: '18px' }}>
              The other main improvement is with tables, which we&apos;ll probably use a lot. With horizontal overflow
              on small devices and when zoomed in.
            </Text>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <Badge size="2" variant="violet" interactive>
              Badge
              <Box css={{ ml: '$1' }}>
                <CaretDownIcon />
              </Box>
            </Badge>
          </PopoverTrigger>
          <PopoverContent css={{ padding: '$3' }}>
            <Text size="2" css={{ lineHeight: '18px' }}>
              The other main improvement is with tables, which we&apos;ll probably use a lot. With horizontal overflow
              on small devices and when zoomed in.
            </Text>
          </PopoverContent>
        </Popover>
      </Flex>
    </Block>
  );
}
