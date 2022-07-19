import viteReact from '@vitejs/plugin-react';
import { resolve, join } from 'node:path';
import { A, D, flow } from '@mobily/ts-belt';
import analyze from 'rollup-plugin-analyzer';
import visualizer from 'rollup-plugin-visualizer';
import { splitVendorChunkPlugin, ConfigEnv, loadEnv, UserConfig } from 'vite';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths';
import httpsLocalhost from 'https-localhost';
import * as path from 'path';

// @ts-expect-error
import { dependencies } from '../../package.json';

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

function renderChunks(deps: Record<string, string>) {
  const chunks = {};

  for (const key of Object.keys(deps)) {
    if (key.indexOf('@radix-ui') > -1) {
      continue;
    }

    if (
      [
        'react',
        'react-router-dom',
        'react-dom',
        'electron-store',
        'next',
        'next-themes',
        '@effect/core',
        '@tsplus/stdlib',
        'lodash.merge',
        'tslib',
        'core-js',
        '@swc/helpers',
        '@mobily/ts-belt',
        '@stitches/react',
        'regenerator-runtime',
      ].includes(key)
    ) {
      continue;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    chunks[key] = [key];
  }

  return chunks;
}

const dist = resolve(__dirname, '../../dist/apps/vite');

export default async ({ mode, command }: ConfigEnv): Promise<UserConfig> => {
  const root = process.cwd();
  const env = loadEnv(mode, root);

  let certs = { key: '', cert: '' };

  if (command !== 'build') {
    const httpServer = httpsLocalhost();

    certs = await httpServer.getCerts();
  }

  const envMode = mode === 'development' ? 'development' : 'production';

  const replaceOptions = {};

  const envs = {
    USE_PWA: env.VITE_USE_PWA === 'true',
    STAGE: env.VITE_STAGE,

    API_URL: env.VITE_API_URL,

    NODE_ENV: env.VITE_USER_NODE_ENV ?? mode,
    NODE_DEBUG: env.VITE_NODE_DEBUG,
    ...replaceOptions,
  };

  const defineEnv = toDefineEnv(envs);

  const plugins = [nodePolyfills(), tsconfigPaths(), viteReact()];

  let pwaOptions: Partial<VitePWAOptions> = {};

  if (env.VITE_USE_PWA === 'true') {
    // TODO
    pwaOptions = {
      manifest: {
        short_name: 'Test',
        name: 'Test',
        description: 'Test',
        prefer_related_applications: false,
        orientation: 'portrait',
        icons: [
          {
            src: 'favicon.ico',
            sizes: '64x64 48x48 32x32 24x24 16x16',
            type: 'image/x-icon',
          },
          {
            src: 'logo192.png',
            type: 'image/png',
            sizes: '192x192',
          },
          {
            src: 'logo512.png',
            type: 'image/png',
            sizes: '512x512',
          },
        ],
        scope: '/',
        start_url: '/',
        display: 'standalone',
        theme_color: '#314466',
        background_color: '#314466',
      },
      injectManifest: {
        globDirectory: 'dist',
        globPatterns: [
          './*.html',
          'assets/*.{js,css,svg,png,jpg,jpeg,gif,webp,svg}',
          'locales/**/*.json',
        ],
      },
      minify: env.VITE_STAGE !== 'development',
      devOptions: {
        enabled: true,
        type: 'module',
        navigateFallback: 'index.html',
      },
      useCredentials: true,
      srcDir: 'src',
      filename: 'prompt-sw.ts',
      strategies: 'injectManifest',
      registerType: 'prompt',
    };

    plugins.push(VitePWA(pwaOptions));
  }

  if (env.VITE_STAGE !== 'development') {
    plugins.push(splitVendorChunkPlugin());
  }

  const isAnalyzeEnabled = env.VITE_ANALYZE === 'true';

  return {
    base: env.VITE_PUBLIC_PATH,
    root,
    mode: envMode,
    plugins: plugins,
    define: defineEnv,
    resolve: {
      alias: {
        '@org/ui': path.resolve(__dirname, '../../packages/ui/build'),
        '@org/types': path.resolve(__dirname, '../../packages/types/build'),
        '@org/icons': path.resolve(__dirname, '../../packages/icons/build'),
        '@org/shared': path.resolve(__dirname, '../../packages/shared/build'),

        '@/components': path.resolve(__dirname, 'src/components'),
        '@/hooks': path.resolve(__dirname, 'src/hooks'),
        '@/providers': path.resolve(__dirname, 'src/providers'),
        '@/styles': path.resolve(__dirname, 'src/styles'),
      },
    },
    server: {
      port: parseInt(env.VITE_PORT, 10),
      cors: true,
      https: {
        cert: certs.cert,
        key: certs.key,
      },
    },
    build: {
      sourcemap: env.VITE_SOURCEMAP === 'true',
      target: ['es2020', 'chrome90'],
      outDir: dist,
      minify: env.VITE_STAGE === 'development' ? false : 'esbuild',
      // Turning off brotliSize display can slightly reduce packaging time
      brotliSize: false,
      chunkSizeWarningLimit: 10000,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-router-dom', 'react-dom'],
            ...renderChunks(dependencies),
          },
        },
        plugins: isAnalyzeEnabled
          ? [
              analyze(),
              visualizer({
                filename: join(dist, 'stats/stats.html'),
                open: env.VITE_STAGE === 'development',
                gzipSize: true,
                brotliSize: true,
                projectRoot: join(__dirname),
              }),
            ]
          : [],
      },
    },
    optimizeDeps: {
      esbuildOptions: {
        drop: ['console', 'debugger'],
        target: ['es2020', 'chrome90'],
      },
    },
  };
};
