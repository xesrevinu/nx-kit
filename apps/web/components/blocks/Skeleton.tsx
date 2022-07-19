import { Flex, Heading, Skeleton } from '@org/ui';
import { Block } from '@/components/Block';

export function SkeletonBlock() {
  return (
    <Block title="Skeleton">
      <Heading css={{ mb: '$6' }}>Avatar variants</Heading>
      <Flex
        css={{
          ai: 'center',
          gap: '$5',
          fw: 'wrap',
          mb: '$7',
        }}
      >
        <Skeleton variant="avatar1" />
        <Skeleton variant="avatar2" />
        <Skeleton variant="avatar3" />
        <Skeleton variant="avatar4" />
        <Skeleton variant="avatar5" />
        <Skeleton variant="avatar6" />
      </Flex>
      <Heading css={{ mb: '$6' }}>Text variants</Heading>
      <Flex
        css={{
          fd: 'column',
          gap: '$4',
          mb: '$7',
        }}
      >
        <Skeleton variant="title" css={{ width: '50%' }} />
        <Skeleton variant="heading" css={{ width: '25%' }} />
      </Flex>
      <Flex
        css={{
          fd: 'column',
          gap: '$4',
          mb: '$7',
        }}
      >
        <Skeleton variant="text" />
        <Skeleton variant="text" css={{ width: '75%' }} />
        <Skeleton variant="text" />
        <Skeleton variant="text" css={{ width: '50%' }} />
      </Flex>
      <Heading css={{ mb: '$6' }}>Control variants</Heading>
      <Flex
        css={{
          fd: 'column',
          gap: '$4',
        }}
      >
        <Skeleton variant="button" />
      </Flex>
    </Block>
  );
}
