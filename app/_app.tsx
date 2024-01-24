import React, { useEffect } from 'react';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { ThemeProvider } from 'styled-components';
import AOS from 'aos';

import { Footer } from 'src/components/organisms';
import { theme } from '../styles/Theme';
import 'aos/dist/aos.css';
import '../styles/globals.css';
import Head from 'next/head';

const exceptRouter = ['year', 'playground/paint', 'playground/multi-twitch', 'playground/utill'];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isExceptRouter = exceptRouter.includes(router.pathname.replace('/', ''));

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <meta name='keyword' content='개인 블로그' key='keyword' />
        <meta property='og:locale' content='ko_KR' key='og-locale' />
        <meta name='robots' content='index,follow' key='robots' />
        <meta property='og:url' content='https://www.white-win.dev/' key='og-url' />
        <meta property='og:type' content='website' key='og-type' />
        <meta property='og:description' content='안녕하세요. 백승일입니다.' key='og-desc' />
        <meta
          property='og:image'
          content='https://baek-log-img.s3.ap-northeast-2.amazonaws.com/og.png'
          key='og-img'
        />
        <meta property='og:image:type' content='image/jpg' key='og-img-type' />
        <meta property='twitter:domain' content='https://www.white-win.dev' key='twitter-domain' />
        <meta property='twitter:url' content='https://www.white-win.dev/' key='twitter-url' />
        <meta name='twitter:card' content='summary_large_image' key='twitter-card' />
        <meta
          name='twitter:image'
          content='https://baek-log-img.s3.ap-northeast-2.amazonaws.com/og.png'
          key='twitter-key'
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        {!isExceptRouter && <Footer />}
      </ThemeProvider>
    </>
  );
}

export default MyApp;
