import { Flex, Heading, Paragraph, Sub, Sup } from '@org/ui';
import { Block } from '@/components/Block';

export function TypographyBlock() {
  return (
    <Block title="Typography">
      <Flex css={{ fd: 'column', gap: '$4' }}>
        <Heading size="4" as="h1">
          This is a heading size 4
        </Heading>
        <Heading size="3" as="h1">
          This is a heading size 3
        </Heading>
        <Heading size="2" as="h1">
          This is a heading size 2
        </Heading>
        <Heading size="1" as="h1">
          This is a heading size 1
        </Heading>
        <Paragraph size="2">
          This is a Paragraph size 2. Design in the target medium. Prototype with real components. Handoff production
          code.
        </Paragraph>
        <Paragraph size="1">
          This is a Paragraph size 1. A really long paragraph of text, to demonstrate prose text, like for example, the
          kind you might read in a blog post. The reason we&apos;re using prose here is because the most common use case
          for this container size is longform text. So we&apos;re previewing some longform text here so we can make sure
          the container width provides an optimal line length for this font size.
        </Paragraph>
        <Paragraph>
          This is a Sup and Sub demo. The kind you might read in a blog post.<Sup>1</Sup> This is a really long
          paragraph of text, to demonstrate prose text.<Sub>1</Sub>
        </Paragraph>
      </Flex>
    </Block>
  );
}
