import { defineConfig } from 'vitest/config';
import viteReact from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import * as path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@org/ui': path.resolve(__dirname, '../../packages/ui/build'),
      '@org/types': path.resolve(__dirname, '../../packages/types/build'),
      '@org/icons': path.resolve(__dirname, '../../packages/icons/build'),
      '@org/shared': path.resolve(__dirname, '../../packages/shared/build'),

      '@/components': path.resolve(__dirname, 'components'),
      '@/hooks': path.resolve(__dirname, 'hooks'),
      '@/providers': path.resolve(__dirname, 'providers'),
      '@/styles': path.resolve(__dirname, 'styles'),
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    tsconfigPaths({
      projects: ['./tsconfig.spec.json'],
    }),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    viteReact(),
  ],
  test: {
    environment: 'jsdom',
    include: ['test/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['src/**/*', 'build/**/*'],
  },
});
