import { Box, Flex, Heading, Section, Separator } from '@org/ui';
import { PropsWithChildren } from 'react';

export function Block({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <>
      <Section size="3">
        <Heading size="2" id={title} css={{ mb: '$7', px: '$6' }}>
          {title}
        </Heading>
        <Box css={{ px: '$8' }}>{children}</Box>
      </Section>
      <Flex css={{ jc: 'center' }}>
        <Separator size="3" />
      </Flex>
    </>
  );
}
