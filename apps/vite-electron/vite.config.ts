import { rmSync } from 'fs';
import { join, resolve } from 'node:path';
import { A, D, flow } from '@mobily/ts-belt';
import viteReact from '@vitejs/plugin-react';
import { ConfigEnv, loadEnv, UserConfig } from 'vite';
import electron from 'vite-plugin-electron';
import tsconfigPaths from 'vite-tsconfig-paths';

const dist = resolve(__dirname, 'dist');

rmSync(dist, { recursive: true, force: true });

const toDefineEnv = flow(
  D.toPairs,
  A.map(
    ([key, value]) =>
      [`process.env.${key.toString()}`, JSON.stringify(value)] as [
        string,
        string
      ]
  ),
  D.fromPairs
);

const alias = {
  '@org/ui': resolve(__dirname, '../../packages/ui/build'),
  '@org/types': resolve(__dirname, '../../packages/types/build'),
  '@org/shared': resolve(__dirname, '../../packages/shared/build'),
};

const webAlias = {
  ...alias,

  '@/components': resolve(__dirname, 'src/components'),
  '@/hooks': resolve(__dirname, 'src/hooks'),
  '@/providers': resolve(__dirname, 'src/providers'),
  '@/styles': resolve(__dirname, 'src/styles'),
};

export default async ({ mode, command }: ConfigEnv): Promise<UserConfig> => {
  const root = process.cwd();
  const env = loadEnv(mode, root);

  const envMode = mode === 'development' ? 'development' : 'production';

  const replaceOptions = {};

  const envs = {
    STAGE: env.VITE_STAGE,

    API_URL: env.VITE_API_URL,

    NODE_ENV: env.VITE_USER_NODE_ENV ?? mode,
    NODE_DEBUG: env.VITE_NODE_DEBUG,
    ...replaceOptions,
  };

  const defineEnv = toDefineEnv(envs);

  return {
    base: env.VITE_PUBLIC_PATH,
    root,
    mode: envMode,
    resolve: {
      alias: webAlias,
    },
    plugins: [
      viteReact(),
      tsconfigPaths(),
      electron({
        main: {
          entry: join(__dirname, 'electron/main/index.ts'),
          vite: {
            resolve: {
              alias: {
                ...alias,
              },
            },
            define: {
              ...defineEnv,
              ...toDefineEnv({
                DEV_HOST: env.VITE_DEV_HOST,
                DEV_PORT: env.VITE_DEV_PORT,
              }),
            },
            build: {
              sourcemap: false,
              outDir: join(dist, 'electron/main'),
            },
          },
        },
        preload: {
          input: {
            index: join(__dirname, 'electron/preload/index.ts'),
          },
          vite: {
            resolve: {
              alias: {
                ...alias,
              },
            },
            define: {
              ...defineEnv,
              ...toDefineEnv({
                DEV_HOST: env.VITE_DEV_HOST,
                DEV_PORT: env.VITE_DEV_PORT,
              }),
            },
            build: {
              sourcemap: 'inline',
              outDir: join(dist, 'electron/preload'),
            },
          },
        },
        renderer: {},
      }),
    ],
    define: defineEnv,
    server: {
      port: parseInt(env.VITE_DEV_PORT, 10),
      cors: true,
    },
    build: {
      sourcemap: env.VITE_SOURCEMAP === 'true',
      outDir: dist,
    },
  };
};
