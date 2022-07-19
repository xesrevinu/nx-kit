import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['build/test/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
