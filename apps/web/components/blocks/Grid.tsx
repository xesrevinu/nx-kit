import { Box, Grid } from '@org/ui';
import { Block } from '@/components/Block';

export function GridBlock() {
  return (
    <Block title="Grid">
      <Grid columns="4" align="center" gapX="3" gapY="6">
        <Box css={{ height: '$9', bc: '$blue9' }} />
        <Box css={{ height: '$7', bc: '$blue9' }} />
        <Box css={{ height: '$7', bc: '$blue9' }} />
        <Box css={{ height: '$7', bc: '$blue9' }} />
        <Box css={{ height: '$7', bc: '$blue9' }} />
        <Box css={{ height: '$7', bc: '$blue9' }} />
        <Box css={{ height: '$7', bc: '$blue9' }} />
      </Grid>
    </Block>
  );
}
