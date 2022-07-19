import {
  Box,
  Caption,
  Container,
  Flex,
  Heading,
  Section,
  Separator,
  styled,
  Table,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@org/ui';
import { CheckIcon } from '@radix-ui/react-icons';
import { AccordionBlock } from '@/components/blocks/Accordion';
import { AlertBlock } from '@/components/blocks/Alert';
import { AlertDialogBlock } from '@/components/blocks/AlertDialog';
import { AvatarBlock } from '@/components/blocks/Avatar';
import { BadgeBlock } from '@/components/blocks/Badge';
import { ButtonBlock } from '@/components/blocks/Button';
import { CardBlock } from '@/components/blocks/Card';
import { CheckboxBlock } from '@/components/blocks/Checkbox';
import { CodeBlock } from '@/components/blocks/Code';
import { ContainerBlock } from '@/components/blocks/Container';
import { ContextMenuBlock } from '@/components/blocks/ContextMenu';
import { ControlGroupBlock } from '@/components/blocks/ControlGroup';
import { DialogBlock } from '@/components/blocks/Dialog';
import { DropdownMenuBlock } from '@/components/blocks/DropdownMenu';
import { FlexBlock } from '@/components/blocks/Flex';
import { GridBlock } from '@/components/blocks/Grid';
import { KbdBlock } from '@/components/blocks/Kbd';
import { LinkBlock } from '@/components/blocks/LinkBlock';
import { PopoverBlock } from '@/components/blocks/Popover';
import { ProgressBarBlock } from '@/components/blocks/ProgressBar';
import { RadioBlock } from '@/components/blocks/Radio';
import { RadioCardBlock } from '@/components/blocks/RadioCard';
import { SectionBlock } from '@/components/blocks/Section';
import { SheetBlock } from '@/components/blocks/Sheet';
import { SkeletonBlock } from '@/components/blocks/Skeleton';
import { SliderBlock } from '@/components/blocks/Slider';
import { StatusBlock } from '@/components/blocks/Status';
import { SwitchBlock } from '@/components/blocks/Switch';
import { TabLinkBlock } from '@/components/blocks/TabLink';
import { TabsBlock } from '@/components/blocks/Tabs';
import { TextBlock } from '@/components/blocks/Text';
import { TextareaBlock } from '@/components/blocks/Textarea';
import { TextFieldBlock } from '@/components/blocks/TextField';
import { TypographyBlock } from '@/components/blocks/Typography';
import { UiLink } from '@/components/UiLink';
import { Header } from '@/components/Header';

const StyledMainBox = styled(Box, {
  background: "$whiteA8",
  height: 'calc(100vh - 75px)',
  padding: '40px 100px',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  flex: 1,
});

const Components = () => {
  return (
    <>
      <Header />
      <Box
        css={{
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          position: 'fixed',
          zIndex: '-1',
          background:
            'radial-gradient(circle at top left, $violet4, rgba(255, 255, 255, 0) 15%), radial-gradient(circle at 80% 20%, $cyan4, rgba(255, 255, 255, 0) 15%)',
          '@bp2': {
            background:
              'radial-gradient(circle at 15% 50%, $violet4, rgba(255, 255, 255, 0) 25%), radial-gradient(circle at 85% 30%, $cyan4, rgba(255, 255, 255, 0) 25%)',
          },
        }}
      />
      <Flex css={{ overflow: 'hidden' }}>
        <Flex
          direction={'column'}
          css={{
            width: '200px',
            // border: '1px solid red',
            height: 'calc(100vh - 75px)',
            py: '$2',
            overflowY: 'auto',
            px: '$3',
            ml: '$4'
          }}
        >
          <UiLink name="Accordion" />
          <UiLink name="Alert" />
          <UiLink name="Alert Dialog" />
          <UiLink name="Avatar" />
          <UiLink name="Badge" />
          <UiLink name="Banner" />
          <UiLink name="Button" />
          <UiLink name="Card" />
          <UiLink name="Checkbox" />
          <UiLink name="Container" />
          <UiLink name="Context Menu" />
          <UiLink name="Control Group" />
          <UiLink name="Code" />
          <UiLink name="Dialog" />
          <UiLink name="Dropdown Menu" />
          <UiLink name="Kbd" />
          <UiLink name="Link" />
          <UiLink name="Popover" />
          <UiLink name="Progress Bar" />
          <UiLink name="Radio" />
          <UiLink name="Radio Card" />
          <UiLink name="Section" />
          <UiLink name="Sheet" />
          <UiLink name="Slider" />
          <UiLink name="Status" />
          <UiLink name="Switch" />
          <UiLink name="Table" />
          <UiLink name="TabLink" />
          <UiLink name="Tabs" />
          <UiLink name="Text" />
          <UiLink name="Textarea" />
          <UiLink name="TextField" />
          <UiLink name="Typography" />
          <UiLink name="Simple Toggle" />
          <UiLink name="Skeleton" />
          <UiLink name="Verified Badge" />
        </Flex>
        <StyledMainBox>
          <SectionBlock />
          <ContainerBlock />
          <FlexBlock />
          <GridBlock />
          <TextBlock />
          <TypographyBlock />
          <SkeletonBlock />
          <BadgeBlock />
          <StatusBlock />
          <AlertBlock />
          <ButtonBlock />
          <TextFieldBlock />
          <ControlGroupBlock />
          <TextareaBlock />
          <KbdBlock />
          <LinkBlock />
          <CodeBlock />
          <CardBlock />
          <DialogBlock />
          <AlertDialogBlock />
          <SheetBlock />
          <ProgressBarBlock />
          <PopoverBlock />
          <AccordionBlock />
          <AvatarBlock />
          <TabsBlock />
          <TabLinkBlock />
          <SliderBlock />
          <CheckboxBlock />
          <RadioBlock />
          <RadioCardBlock />
          <SwitchBlock />
          <DropdownMenuBlock />
          <ContextMenuBlock />
          <Section size="3">
            <Container size="2">
              <Heading id="table" css={{ mb: '$6', scrollMarginTop: '$7' }}>
                Table
              </Heading>
              <Table>
                <Caption>This is the table caption.</Caption>
                <Thead>
                  <Tr>
                    <Th css={{ width: 190 }}>Club</Th>
                    <Td align="center">MP</Td>
                    <Td align="center">W</Td>
                    <Td align="center">D</Td>
                    <Td align="center">L</Td>
                    <Td align="center">GF</Td>
                    <Td align="center">GA</Td>
                    <Td align="center">GD</Td>
                    <Td align="center">Pts</Td>
                    <Td css={{ width: 100 }} align="center">
                      Last 5
                    </Td>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Th css={{ width: 190 }}>Man City</Th>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">
                      <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                      </Flex>
                    </Td>
                  </Tr>
                  <Tr>
                    <Th css={{ width: 190 }}>Man United</Th>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">
                      <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                      </Flex>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Leicester City</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">
                      <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                      </Flex>
                    </Td>
                  </Tr>
                  <Tr>
                    <Th css={{ width: 190 }}>Chelsea</Th>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">
                      <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                      </Flex>
                    </Td>
                  </Tr>
                  <Tr>
                    <Th css={{ width: 190 }}>West Ham</Th>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">
                      <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                      </Flex>
                    </Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th css={{ width: 190 }}>Leicester City</Th>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">
                      <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                      </Flex>
                    </Td>
                  </Tr>
                </Tfoot>
              </Table>

              <Table css={{ mt: '$7' }}>
                <Caption>This is the table caption.</Caption>
                <Thead>
                  <Tr>
                    <Th css={{ width: 190 }}>Club</Th>
                    <Td align="center">MP</Td>
                    <Td align="center">W</Td>
                    <Td align="center">D</Td>
                    <Td align="center">L</Td>
                    <Td align="center">GF</Td>
                    <Td align="center">GA</Td>
                    <Td align="center">GD</Td>
                    <Td align="center">Pts</Td>
                    <Td css={{ width: 100 }} align="center">
                      Last 5
                    </Td>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Th css={{ width: 190 }}>
                      <Flex>
                        <Box css={{ width: '$5' }}>1</Box>
                        Man City
                      </Flex>
                    </Th>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">
                      <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                      </Flex>
                    </Td>
                  </Tr>
                  <Tr>
                    <Th css={{ width: 190 }}>
                      <Flex>
                        <Box css={{ width: '$5' }}>2</Box>
                        Man United
                      </Flex>
                    </Th>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">
                      <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                      </Flex>
                    </Td>
                  </Tr>
                  <Tr style={{ borderBottom: '2px solid yellow' }}>
                    <Td border="dashed">
                      <Flex>
                        <Box css={{ width: '$5' }}>3</Box>
                        Leicester City
                      </Flex>
                    </Td>
                    <Td align="center" border="dashed">
                      32
                    </Td>
                    <Td align="center" border="dashed">
                      32
                    </Td>
                    <Td align="center" border="dashed">
                      32
                    </Td>
                    <Td align="center" border="dashed">
                      32
                    </Td>
                    <Td align="center" border="dashed">
                      32
                    </Td>
                    <Td align="center" border="dashed">
                      32
                    </Td>
                    <Td align="center" border="dashed">
                      32
                    </Td>
                    <Td align="center" border="dashed">
                      32
                    </Td>
                    <Td align="center" border="dashed">
                      <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                      </Flex>
                    </Td>
                  </Tr>
                  <Tr>
                    <Th css={{ width: 190 }}>
                      <Flex>
                        <Box css={{ width: '$5' }}>4</Box>
                        Chelsea
                      </Flex>
                    </Th>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">
                      <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                      </Flex>
                    </Td>
                  </Tr>
                  <Tr>
                    <Th css={{ width: 190 }}>
                      <Flex>
                        <Box css={{ width: '$5' }}>5</Box>
                        West Ham
                      </Flex>
                    </Th>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">
                      <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                      </Flex>
                    </Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th css={{ width: 190 }}>
                      <Flex>
                        <Box css={{ width: '$5' }}>6</Box>
                        Leicester City
                      </Flex>
                    </Th>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">
                      <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                      </Flex>
                    </Td>
                  </Tr>
                </Tfoot>
              </Table>

              <Table striped css={{ mt: '$7' }}>
                <Caption>Striped table caption.</Caption>
                <Thead>
                  <Tr>
                    <Th css={{ width: 190 }}>Club</Th>
                    <Td align="center">MP</Td>
                    <Td align="center">W</Td>
                    <Td align="center">D</Td>
                    <Td align="center">L</Td>
                    <Td align="center">GF</Td>
                    <Td align="center">GA</Td>
                    <Td align="center">GD</Td>
                    <Td align="center">Pts</Td>
                    <Td css={{ width: 100 }} align="center">
                      Last 5
                    </Td>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Th css={{ width: 190 }}>Man City</Th>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">
                      <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                      </Flex>
                    </Td>
                  </Tr>
                  <Tr>
                    <Th css={{ width: 190 }}>Man United</Th>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">
                      <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                      </Flex>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Leicester City</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">
                      <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                      </Flex>
                    </Td>
                  </Tr>
                  <Tr>
                    <Th css={{ width: 190 }}>Chelsea</Th>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">
                      <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                      </Flex>
                    </Td>
                  </Tr>
                  <Tr>
                    <Th css={{ width: 190 }}>West Ham</Th>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">
                      <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                      </Flex>
                    </Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th css={{ width: 190 }}>Leicester City</Th>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">32</Td>
                    <Td align="center">
                      <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                        <Box
                          css={{
                            width: 15,
                            height: 15,
                            bc: '$green9',
                            borderRadius: '$round',
                          }}
                        >
                          <CheckIcon />
                        </Box>
                      </Flex>
                    </Td>
                  </Tr>
                </Tfoot>
              </Table>
            </Container>
          </Section>
        </StyledMainBox>
      </Flex>
    </>
  )
}

export default Components
