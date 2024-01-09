import React, { useEffect } from 'react';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { ThemeProvider } from 'styled-components';
import AOS from 'aos';

import { Footer } from 'src/components/organisms';
import { theme } from '../styles/Theme';
import 'aos/dist/aos.css';
import '../styles/globals.css';

const exceptRouter = ['year', 'playground/paint', 'playground/multi-twitch', 'playground/utill'];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isExceptRouter = exceptRouter.includes(router.pathname.replace('/', ''));

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      {!isExceptRouter && <Footer />}
    </ThemeProvider>
  );
}

export default MyApp;
