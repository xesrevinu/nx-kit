import { Flex, Heading, Status } from '@org/ui';
import { Block } from '@/components/Block';

export function StatusBlock() {
  return (
    <Block title="Status">
      <Heading css={{ mb: '$6' }}>Default Status</Heading>
      <Status />
      <Heading css={{ mt: '$7', mb: '$7' }}>Sizes</Heading>
      <Flex css={{ gap: '$6', mt: '$6' }}>
        <Status size="1" />
        <Status size="2" />
      </Flex>
      <Heading css={{ mt: '$7', mb: '$7' }}>Variants</Heading>
      <Flex css={{ gap: '$6', mt: '$6' }}>
        <Status variant="gray" />
        <Status variant="blue" />
        <Status variant="green" />
        <Status variant="yellow" />
        <Status variant="red" />
      </Flex>
    </Block>
  );
}
