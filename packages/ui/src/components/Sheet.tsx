import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';
import { styled, VariantProps, CSS, keyframes } from '../stitches.config';
import { overlayStyles } from './Overlay';
import { IconButton } from './IconButton';
import { fadeIn, fadeOut } from '../keyframes';

const StyledOverlay = styled(DialogPrimitive.Overlay, overlayStyles, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,

  '&[data-state="open"]': {
    animation: `${fadeIn} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${fadeOut} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },
});

type SheetProps = React.ComponentProps<typeof DialogPrimitive.Root> & {
  overlay?: boolean;
};

export function Sheet({ children, overlay, ...props }: SheetProps) {
  return (
    <DialogPrimitive.Root {...props}>
      {overlay && <StyledOverlay />}
      {children}
    </DialogPrimitive.Root>
  );
}

const slideIn = keyframes({
  from: { transform: '$$transformValue' },
  to: { transform: 'translate3d(0,0,0)' },
});

const slideOut = keyframes({
  from: { transform: 'translate3d(0,0,0)' },
  to: { transform: '$$transformValue' },
});

const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: '$panel',
  boxShadow: '$colors$shadowLight 0 0 38px -10px, $colors$shadowDark 0 0 35px -15px',
  position: 'fixed',
  top: 0,
  bottom: 0,
  width: 250,

  // Among other things, prevents text alignment inconsistencies when dialog can't be centered in the viewport evenly.
  // Affects animated and non-animated dialogs alike.
  willChange: 'transform',

  // '&:focus': {
  //   outline: 'none',
  // },

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${slideOut} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },

  variants: {
    side: {
      top: {
        $$transformValue: 'translate3d(0,-100%,0)',
        width: '100%',
        height: 300,
        bottom: 'auto',
        left: 0,
        right: 0,
      },
      right: {
        $$transformValue: 'translate3d(100%,0,0)',
        right: 0,
      },
      bottom: {
        $$transformValue: 'translate3d(0,100%,0)',
        width: '100%',
        height: 300,
        bottom: 0,
        left: 0,
        top: 'auto',
      },
      left: {
        $$transformValue: 'translate3d(-100%,0,0)',
        left: 0,
      },
    },
  },

  defaultVariants: {
    side: 'right',
  },
});

const StyledCloseButton = styled(DialogPrimitive.Close, {
  position: 'absolute',
  top: '$2',
  right: '$2',
});

type SheetContentVariants = VariantProps<typeof StyledContent>;
type DialogContentPrimitiveProps = React.ComponentProps<typeof DialogPrimitive.Content>;
type SheetContentProps = DialogContentPrimitiveProps & SheetContentVariants & { css?: CSS; hideCloseButton?: boolean };

export const SheetContent = React.forwardRef<React.ElementRef<typeof StyledContent>, SheetContentProps>(
  ({ children, hideCloseButton, ...props }, forwardedRef) => (
    <StyledContent {...props} ref={forwardedRef}>
      {children}
      {!hideCloseButton && (
        <StyledCloseButton asChild>
          <IconButton variant="ghost">
            <Cross1Icon />
          </IconButton>
        </StyledCloseButton>
      )}
    </StyledContent>
  ),
);

SheetContent.displayName = 'SheetContent';

export const SheetTrigger = DialogPrimitive.Trigger;
export const SheetClose = DialogPrimitive.Close;
export const SheetTitle = DialogPrimitive.Title;
export const SheetDescription = DialogPrimitive.Description;
