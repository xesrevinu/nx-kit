import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes'
import { darkTheme, globalCss } from '@org/ui';

const globalStyles = globalCss({
  // Commenting out while we fix flashing issues
  // '@font-face': [
  //   {
  //     fontFamily: 'Untitled Sans',
  //     fontWeight: '400',
  //     fontDisplay: 'swap',
  //     src:
  //       'url(/fonts/UntitledSansWeb-Regular.woff2) format("woff2"), url(/fonts/UntitledSansWeb-Regular.woff) format("woff")',
  //   },
  //   {
  //     fontFamily: 'Untitled Sans',
  //     fontWeight: '500',
  //     fontDisplay: 'swap',
  //     src:
  //       'url(/fonts/UntitledSansWeb-Medium.woff2) format("woff2"), url(/fonts/UntitledSansWeb-Medium.woff) format("woff")',
  //   },
  //   {
  //     fontFamily: 'Söhne Mono',
  //     fontWeight: 'normal',
  //     fontStyle: 'normal',
  //     fontDisplay: 'swap',
  //     src:
  //       'url(/fonts/soehne-mono-web-buch.woff2) format("woff2"), url(/fonts/soehne-mono-web-buch.woff) format("woff")',
  //   },
  // ],

  html: {
    overflowX: 'hidden',
  },

  body: {
    margin: 0,
    backgroundColor: '$loContrast',
  },

  'body, button': {
    fontFamily: '$untitled',
  },

  svg: { display: 'block' },

  'pre, code': { margin: 0, fontFamily: '$mono' },

  '::selection': {
    backgroundColor: '$violet5',
  },
});

function CustomApp({ Component, pageProps }: AppProps) {
  globalStyles();


  return (

    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: 'light-theme', dark: darkTheme.className }}
      defaultTheme="system"
    >
      <Head>
        <title>Welcome</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default CustomApp;
