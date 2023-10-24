import React, { useEffect } from 'react';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { ThemeProvider } from 'styled-components';
import AOS from 'aos';

import { Footer, Header } from 'src/components/organisms';
import { categoryToKorean } from 'src/const';
import { theme } from '../styles/Theme';
import 'aos/dist/aos.css';
import '../styles/globals.css';

const exceptRouter = ['year', 'playground/paint', 'playground/multi-twitch'];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { category } = router.query;
  const isExceptRouter = exceptRouter.includes(router.pathname.replace('/', ''));

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {!isExceptRouter && <Header path={categoryToKorean(category as string)} />}
      <Component {...pageProps} />
      {!isExceptRouter && <Footer />}
    </ThemeProvider>
  );
}

export default MyApp;
