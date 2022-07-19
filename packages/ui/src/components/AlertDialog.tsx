import React, { ComponentProps, PropsWithChildren } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { CSS, styled } from '../stitches.config';
import { overlayStyles } from './Overlay';
import { panelStyles } from './Panel';
import { fadeIn, fadeOut } from '../keyframes';

type AlertDialogProps = PropsWithChildren<ComponentProps<typeof AlertDialogPrimitive.Root>>;

const StyledOverlay = styled(AlertDialogPrimitive.Overlay, overlayStyles, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});

export function AlertDialog({ children, ...props }: AlertDialogProps) {
  return <AlertDialogPrimitive.Root {...props}>{children}</AlertDialogPrimitive.Root>;
}

const StyledContent = styled(AlertDialogPrimitive.Content, panelStyles, {
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

type AlertDialogContentPrimitiveProps = React.ComponentProps<typeof AlertDialogPrimitive.Content>;
type DialogContentProps = AlertDialogContentPrimitiveProps & { css?: CSS };

export const AlertDialogContent = React.forwardRef<React.ElementRef<typeof StyledContent>, DialogContentProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <AlertDialogPrimitive.Portal>
        <StyledOverlay />
        <StyledContent {...props} ref={forwardedRef}>
          {children}
        </StyledContent>
      </AlertDialogPrimitive.Portal>
    );
  },
);

AlertDialogContent.displayName = 'AlertDialogContent';

export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
export const AlertDialogTitle = AlertDialogPrimitive.Title;
export const AlertDialogDescription = AlertDialogPrimitive.Description;

export const AlertDialogAction = AlertDialogPrimitive.Action;
export const AlertDialogCancel = AlertDialogPrimitive.Cancel;
