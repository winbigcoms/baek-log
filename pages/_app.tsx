import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { Footer, Header } from 'src/components/organisms';

import { categoryToKorean } from 'src/const';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const { category } = router.query;

  return (
    <>
      <Header path={categoryToKorean(category)} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
