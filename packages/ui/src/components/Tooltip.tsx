import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { styled } from '../stitches.config';
import { Box } from './Box';
import { Text } from './Text';

type TooltipProps = React.PropsWithChildren<
  React.ComponentProps<typeof TooltipPrimitive.Root> &
    React.ComponentProps<typeof TooltipPrimitive.Content> & {
      content: React.ReactNode;
      multiline?: boolean;
    }
>;

const Content = styled(TooltipPrimitive.Content, {
  backgroundColor: '$transparentPanel',
  borderRadius: '$1',
  padding: '$2 $2',

  variants: {
    multiline: {
      true: {
        maxWidth: 250,
        pb: 7,
      },
    },
  },
});

export function Tooltip({ children, content, open, defaultOpen, onOpenChange, multiline, ...props }: TooltipProps) {
  return (
    <TooltipPrimitive.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>

      <Content side="top" align="center" sideOffset={3} {...props} multiline={multiline}>
        <Text
          size="1"
          as="p"
          css={{
            color: '$loContrast',
            lineHeight: multiline ? '20px' : (undefined as any),
          }}
        >
          {content}
        </Text>
        <Box css={{ color: '$transparentExtreme' }}>
          <TooltipPrimitive.Arrow
            offset={3}
            width={11}
            height={5}
            style={{
              fill: 'currentColor',
            }}
          />
        </Box>
      </Content>
    </TooltipPrimitive.Root>
  );
}
