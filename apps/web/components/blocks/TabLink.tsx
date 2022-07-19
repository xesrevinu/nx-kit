import { Box, Flex, TabLink } from '@org/ui';
import {
  ActivityLogIcon,
  BarChartIcon,
  CodeIcon,
  CommitIcon,
  ExclamationTriangleIcon,
  GearIcon,
  LockClosedIcon,
  ReaderIcon,
  VideoIcon,
} from '@radix-ui/react-icons';
import { Block } from '@/components/Block';

export function TabLinkBlock() {
  return (
    <Block title="TabLink">
      <Flex css={{ borderBottom: '1px solid $slate6' }}>
        <TabLink href="#" active>
          <Box css={{ mr: '$1' }}>
            <CodeIcon />
          </Box>
          Code
        </TabLink>
        <TabLink href="#">
          <Box css={{ mr: '$1' }}>
            <ExclamationTriangleIcon />
          </Box>
          Issues
        </TabLink>
        <TabLink href="#">
          <Box css={{ mr: '$1' }}>
            <CommitIcon />
          </Box>
          Pull requests
        </TabLink>
        <TabLink href="#">
          <Box css={{ mr: '$1' }}>
            <VideoIcon />
          </Box>
          Actions
        </TabLink>
        <TabLink href="#">
          <Box css={{ mr: '$1' }}>
            <ActivityLogIcon />
          </Box>
          Projects
        </TabLink>
        <TabLink href="#">
          <Box css={{ mr: '$1' }}>
            <ReaderIcon />
          </Box>
          Wiki
        </TabLink>
        <TabLink href="#">
          <Box css={{ mr: '$1' }}>
            <LockClosedIcon />
          </Box>
          Security
        </TabLink>
        <TabLink href="#">
          <Box css={{ mr: '$1' }}>
            <BarChartIcon />
          </Box>
          Insights
        </TabLink>
        <TabLink href="#">
          <Box css={{ mr: '$1' }}>
            <GearIcon />
          </Box>
          Settings
        </TabLink>
      </Flex>
    </Block>
  );
}
