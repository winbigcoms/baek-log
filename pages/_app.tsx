import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { Footer, Header } from 'src/components/organisms';

import { categoryToKorean } from 'src/const';
import { Provider } from 'mobx-react';
import RootStore from 'src/store';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [store, setStore] = useState(new RootStore());

  const router = useRouter();
  const { category } = router.query;

  return (
    <Provider {...store}>
      <Header path={categoryToKorean(category)} />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
