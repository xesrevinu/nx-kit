import { Section, Text } from '@org/ui';
import { Block } from '@/components/Block';

export function SectionBlock() {
  return (
    <Block title="Section">
      <Section size="1" css={{ bc: '$slate3' }}>
        <Text as="p" size="4" css={{ ta: 'center' }}>
          Section 1
        </Text>
      </Section>
      <Section size="2" css={{ bc: '$slate3', my: '$1' }}>
        <Text as="p" size="4" css={{ ta: 'center' }}>
          Section 2
        </Text>
      </Section>
      <Section size="3" css={{ bc: '$slate3' }}>
        <Text as="p" size="4" css={{ ta: 'center' }}>
          Section 3
        </Text>
      </Section>
    </Block>
  );
}
