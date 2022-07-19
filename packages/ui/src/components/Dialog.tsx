import React, { ComponentProps, PropsWithChildren } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { styled, CSS } from '../stitches.config';
import { overlayStyles } from './Overlay';
import { panelStyles } from './Panel';
import { fadeIn, fadeOut } from '../keyframes';

type DialogProps = PropsWithChildren<ComponentProps<typeof DialogPrimitive.Root>>;

const StyledOverlay = styled(DialogPrimitive.Overlay, overlayStyles, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});

export function Dialog({ children, ...props }: DialogProps) {
  return (
    <DialogPrimitive.Root {...props}>
      <StyledOverlay />
      {children}
    </DialogPrimitive.Root>
  );
}

const StyledContent = styled(DialogPrimitive.Content, panelStyles, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 200,
  maxHeight: '85vh',
  padding: '$4',
  marginTop: '-5vh',
  '&:focus': {
    outline: 'none',
  },
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '150ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    '&[data-state="open"]': { animationName: fadeIn },
    '&[data-state="closed"]': { animationName: fadeOut },
  },
});

type DialogContentPrimitiveProps = React.ComponentProps<typeof DialogPrimitive.Content>;
type DialogContentProps = DialogContentPrimitiveProps & { css?: CSS };

export const DialogContent = React.forwardRef<React.ElementRef<typeof StyledContent>, DialogContentProps>(
  ({ children, ...props }, forwardedRef) => (
    <DialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props} ref={forwardedRef}>
        {children}
      </StyledContent>
    </DialogPrimitive.Portal>
  ),
);

DialogContent.displayName = 'DialogContent';

export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;
export const DialogTitle = DialogPrimitive.Title;
export const DialogDescription = DialogPrimitive.Description;
