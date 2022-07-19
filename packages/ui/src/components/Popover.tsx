import React, { ComponentProps, PropsWithChildren } from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { styled, CSS } from '../stitches.config';
import { Box } from './Box';
import { panelStyles } from './Panel';
import { slideDownAndFade, slideLeftAndFade, slideRightAndFade, slideUpAndFade } from '../keyframes';

type PopoverProps = PropsWithChildren<ComponentProps<typeof PopoverPrimitive.Root>>;

export function Popover({ children, ...props }: PopoverProps) {
  return <PopoverPrimitive.Root {...props}>{children}</PopoverPrimitive.Root>;
}

const StyledContent = styled(PopoverPrimitive.Content, panelStyles, {
  minWidth: 200,
  minHeight: '$6',
  maxWidth: 265,
  '&:focus': {
    outline: 'none',
  },
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '200ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

type PopoverContentPrimitiveProps = React.ComponentProps<typeof PopoverPrimitive.Content>;

type PopoverContentProps = PopoverContentPrimitiveProps & {
  css?: CSS;
  hideArrow?: boolean;
};

export const PopoverContent = React.forwardRef<React.ElementRef<typeof StyledContent>, PopoverContentProps>(
  ({ children, hideArrow, ...props }, fowardedRef) => (
    <StyledContent sideOffset={0} {...props} ref={fowardedRef}>
      {children}
      {!hideArrow && (
        <Box css={{ color: '$panel' }}>
          <PopoverPrimitive.Arrow width={11} height={5} offset={10} style={{ fill: 'currentColor' }} />
        </Box>
      )}
    </StyledContent>
  ),
);

PopoverContent.displayName = 'PopoverContent';

export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverClose = PopoverPrimitive.Close;
