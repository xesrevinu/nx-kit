import React from 'react';
import * as MenuPrimitive from '@radix-ui/react-menu';
import { styled, css, CSS } from '../stitches.config';
import { Box } from './Box';
import { panelStyles } from './Panel';
import { Radio, RadioGroup } from './Radio';
import { Checkbox } from './Checkbox';

export const itemCss = css({
  all: 'unset',
  fontSize: '$2',
  lineHeight: 1,
  color: '$hiContrast',
  borderRadius: '$radii$1',
  display: 'flex',
  alignItems: 'center',
  height: 32,
  padding: '0 5px',
  position: 'relative',
  paddingLeft: 28,
  userSelect: 'none',
  cursor: 'pointer',

  '&:focus': {
    outline: 'none',
    backgroundColor: '#f1f1f1',
  },

  '&[data-disabled]': {
    color: '$slate9',
    pointerEvents: 'none',
    cursor: 'not-allowed',
  },
});

export const labelCss = css({
  paddingLeft: 28,
  fontSize: 12,
  lineHeight: '25px',
  color: '$slate11',
});

export const menuCss = css({
  minWidth: 180,
  bc: '#fff',
  borderRadius: '$radii$1',
  overflow: 'hidden',
  padding: 5,
  boxShadow: '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
});

export const separatorCss = css({
  height: 1,
  my: '$1',
  backgroundColor: '$slate6',
});

export const Menu = styled(MenuPrimitive.Root, menuCss);
export const MenuContent = styled(MenuPrimitive.Content, panelStyles);

export const MenuSeparator = styled(MenuPrimitive.Separator, separatorCss);

export const MenuItem = styled(MenuPrimitive.Item, itemCss);

const StyledMenuRadioItem = styled(MenuPrimitive.RadioItem, itemCss);

type MenuRadioItemPrimitiveProps = React.ComponentProps<typeof MenuPrimitive.RadioItem>;
type MenuRadioItemProps = MenuRadioItemPrimitiveProps & { css?: CSS };

export const MenuRadioItem = React.forwardRef<React.ElementRef<typeof StyledMenuRadioItem>, MenuRadioItemProps>(
  ({ children, ...props }, forwardedRef) => (
    <StyledMenuRadioItem {...props} ref={forwardedRef}>
      <Box as="span" css={{ position: 'absolute', left: '$1' }}>
        <MenuPrimitive.ItemIndicator>
          <RadioGroup defaultChecked readOnly>
            <Radio checked value="" />
          </RadioGroup>
        </MenuPrimitive.ItemIndicator>
      </Box>
      {children}
    </StyledMenuRadioItem>
  ),
);

MenuRadioItem.displayName = 'MenuRadioItem';

const StyledMenuCheckboxItem = styled(MenuPrimitive.CheckboxItem, itemCss);

type MenuCheckboxItemPrimitiveProps = React.ComponentProps<typeof MenuPrimitive.CheckboxItem>;
type MenuCheckboxItemProps = MenuCheckboxItemPrimitiveProps & { css?: CSS };

export const MenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof StyledMenuCheckboxItem>,
  MenuCheckboxItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledMenuCheckboxItem {...props} ref={forwardedRef}>
    <Box as="span" css={{ position: 'absolute', left: '$1' }}>
      <MenuPrimitive.ItemIndicator>
        <Checkbox defaultChecked readOnly />
      </MenuPrimitive.ItemIndicator>
    </Box>
    {children}
  </StyledMenuCheckboxItem>
));

MenuCheckboxItem.displayName = 'MenuCheckboxItem';

export const MenuLabel = styled(MenuPrimitive.Label, labelCss);
export const MenuRadioGroup = styled(MenuPrimitive.RadioGroup, {});
export const MenuGroup = styled(MenuPrimitive.Group, {});
