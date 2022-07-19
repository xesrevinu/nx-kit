import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { CheckIcon } from '@radix-ui/react-icons';
import { MenuItemIndicator } from '@radix-ui/react-menu';
import React, { forwardRef } from 'react';
import { scaleFadeIn, scaleFadeOut } from '../keyframes';
import { CSS, styled } from '../stitches.config';
import { Box } from './Box';
import { itemCss, labelCss, menuCss, separatorCss } from './Menu';
import { panelStyles } from './Panel';
import { Radio, RadioGroup } from './Radio';

export const ContextMenu = ContextMenuPrimitive.Root;

export const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

export const ContextMenuTriggerItem = styled(ContextMenuPrimitive.TriggerItem, itemCss, {
  '&[data-state="open"]': {
    backgroundColor: '$slateA5',
  },
});

export const ContextMenuContent = styled(ContextMenuPrimitive.Content, menuCss, panelStyles, {
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '150ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': { animationName: scaleFadeIn },
    '&[data-state="closed"]': { animationName: scaleFadeOut },
  },
});

export const ContextMenuSeparator = styled(ContextMenuPrimitive.Separator, separatorCss);

export const ContextMenuItem = styled(ContextMenuPrimitive.Item, itemCss);

const StyledItemIndicator = styled(ContextMenuPrimitive.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ContextMenuItemIndicator = StyledItemIndicator;

const StyledContextMenuRadioItem = styled(ContextMenuPrimitive.RadioItem, itemCss);

type ContextMenuRadioItemPrimitiveProps = React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>;

type ContextMenuRadioItemProps = ContextMenuRadioItemPrimitiveProps & {
  css?: CSS;
};

export const ContextMenuRadioItemIndicator = forwardRef<
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

ContextMenuRadioItemIndicator.displayName = 'ContextMenuRadioItemIndicator';

export const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof StyledContextMenuRadioItem>,
  ContextMenuRadioItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledContextMenuRadioItem {...props} ref={forwardedRef}>
    <Box as="span" css={{ position: 'absolute', left: '$1' }}>
      <ContextMenuPrimitive.ItemIndicator forceMount asChild>
        <ContextMenuRadioItemIndicator value={props.value} />
      </ContextMenuPrimitive.ItemIndicator>
    </Box>
    {children}
  </StyledContextMenuRadioItem>
));

ContextMenuRadioItem.displayName = 'ContextMenuRadioItem';

const StyledContextMenuCheckboxItem = styled(ContextMenuPrimitive.CheckboxItem, itemCss);

type ContextMenuCheckboxItemPrimitiveProps = React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>;
type ContextMenuCheckboxItemProps = ContextMenuCheckboxItemPrimitiveProps & {
  css?: CSS;
};

export const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof StyledContextMenuCheckboxItem>,
  ContextMenuCheckboxItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledContextMenuCheckboxItem {...props} ref={forwardedRef}>
    <Box as="span" css={{ position: 'absolute', left: '$1' }}>
      <ContextMenuPrimitive.ItemIndicator>
        <CheckIcon style={{ width: '18px', height: '18px' }} />
      </ContextMenuPrimitive.ItemIndicator>
    </Box>
    {children}
  </StyledContextMenuCheckboxItem>
));

ContextMenuCheckboxItem.displayName = 'ContextMenuCheckboxItem';

export const ContextMenuLabel = styled(ContextMenuPrimitive.Label, labelCss);
export const ContextMenuRadioGroup = styled(ContextMenuPrimitive.RadioGroup, {});
export const ContextMenuGroup = styled(ContextMenuPrimitive.Group, {});
