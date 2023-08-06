import React from 'react';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { ThemeProvider } from 'styled-components';

import { Footer, Header } from 'src/components/organisms';
import { categoryToKorean } from 'src/const';

import { theme } from '../styles/Theme';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { category } = router.query;

  return (
    <ThemeProvider theme={theme}>
      <Header path={categoryToKorean(category as string)} />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
