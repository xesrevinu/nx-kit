import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { CheckIcon } from '@radix-ui/react-icons';
import { MenuItemIndicator } from '@radix-ui/react-menu';
import React, { forwardRef } from 'react';
import { slideDownAndFade, slideLeftAndFade, slideRightAndFade, slideUpAndFade } from '../keyframes';
import { CSS, styled } from '../stitches.config';
import { Box } from './Box';
import { itemCss, labelCss, menuCss, separatorCss } from './Menu';
import { panelStyles } from './Panel';
import { Radio, RadioGroup } from './Radio';

export const DropdownMenu = DropdownMenuPrimitive.Root;

export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

export const DropdownMenuTriggerItem = styled(DropdownMenuPrimitive.TriggerItem, itemCss);

export const DropdownMenuContent = styled(DropdownMenuPrimitive.Content, menuCss, panelStyles, {
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '150ms',
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

export const DropdownMenuSeparator = styled(DropdownMenuPrimitive.Separator, separatorCss);

export const DropdownMenuItem = styled(DropdownMenuPrimitive.Item, itemCss);

const StyledDropdownMenuRadioItem = styled(DropdownMenuPrimitive.RadioItem, itemCss);

type DialogMenuRadioItemPrimitiveProps = React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>;

type DialogMenuRadioItemProps = DialogMenuRadioItemPrimitiveProps & {
  css?: CSS;
};

export const DropdownMenuRadioItemIndicator = forwardRef<
  React.ElementRef<typeof MenuItemIndicator>,
  { 'data-state'?: 'checked' | 'unchecked'; value: string }
>(({ value, ...props }, ref) => {
  return (
    <span ref={ref}>
      <RadioGroup readOnly>
        <Radio checked={props['data-state'] === 'checked'} value={value} />
      </RadioGroup>
    </span>
  );
});

DropdownMenuRadioItemIndicator.displayName = 'DropdownMenuRadioItemIndicator';

export const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof StyledDropdownMenuRadioItem>,
  DialogMenuRadioItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledDropdownMenuRadioItem {...props} ref={forwardedRef}>
    <Box as="span" css={{ position: 'absolute', left: '$1' }}>
      <DropdownMenuPrimitive.ItemIndicator forceMount asChild>
        <DropdownMenuRadioItemIndicator value={props.value} />
      </DropdownMenuPrimitive.ItemIndicator>
    </Box>
    {children}
  </StyledDropdownMenuRadioItem>
));

DropdownMenuRadioItem.displayName = 'DropdownMenuRadioItem';

const StyledDropdownMenuCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, itemCss);

type DialogMenuCheckboxItemPrimitiveProps = React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>;
type DialogMenuCheckboxItemProps = DialogMenuCheckboxItemPrimitiveProps & {
  css?: CSS;
};

export const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof StyledDropdownMenuCheckboxItem>,
  DialogMenuCheckboxItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledDropdownMenuCheckboxItem {...props} ref={forwardedRef}>
    <Box as="span" css={{ position: 'absolute', left: '$1' }}>
      <DropdownMenuPrimitive.ItemIndicator>
        <CheckIcon style={{ width: '18px', height: '18px' }} />
      </DropdownMenuPrimitive.ItemIndicator>
    </Box>
    {children}
  </StyledDropdownMenuCheckboxItem>
));

DropdownMenuCheckboxItem.displayName = 'DropdownMenuCheckboxItem';

export const DropdownMenuLabel = styled(DropdownMenuPrimitive.Label, labelCss);
export const DropdownMenuRadioGroup = styled(DropdownMenuPrimitive.RadioGroup, {});
export const DropdownMenuGroup = styled(DropdownMenuPrimitive.Group, {});
export const DropdownMenuArrow = styled(DropdownMenuPrimitive.Arrow, {
  fill: 'white',
});
