import React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { styled, CSS, VariantProps } from '../stitches.config';

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },
  alignItems: 'center',
  appearance: 'none',
  display: 'inline-flex',
  justifyContent: 'center',
  lineHeight: '1',
  margin: '0',
  outline: 'none',
  padding: '0',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  color: '$hiContrast',
  overflow: 'hidden',
  border: '1px solid $gray6',
  '&:focus': {
    outline: 'none',
  },
  '@hover': {
    '&:hover': {
      backgroundColor: '$slateA5',
    },
  },
  '&:active': {
    backgroundColor: '$slateA7',
  },
  '&[data-state="checked"]': {
    background: '#1885F2',
    borderColor: '#1885F2',
    '@hover': {
      '&:hover': {
        backgroundColor: '#076FD7',
      },
    },
    '&:active': {
      backgroundColor: '#1562B0',
    },
  },
  variants: {
    size: {
      '1': {
        width: '$3',
        height: '$3',
        borderRadius: '$1',
      },
      '2': {
        width: '$5',
        height: '$5',
        borderRadius: '$2',
      },
    },
  },
  defaultVariants: {
    size: '1',
  },
});

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  width: '100%',
  '&[data-state="checked"]': {
    color: '#fff',
  },
});

type CheckboxPrimitiveProps = React.ComponentProps<typeof CheckboxPrimitive.Root>;
type CheckboxVariants = VariantProps<typeof StyledCheckbox>;
type CheckboxProps = CheckboxPrimitiveProps & CheckboxVariants & { css?: CSS };

export const Checkbox = React.forwardRef<React.ElementRef<typeof StyledCheckbox>, CheckboxProps>(
  (props, forwardedRef) => (
    <StyledCheckbox {...props} ref={forwardedRef}>
      <StyledIndicator>
        <CheckIcon />
      </StyledIndicator>
    </StyledCheckbox>
  ),
);

Checkbox.displayName = 'Checkbox';
