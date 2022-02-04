import { useState } from 'react';
import { Provider } from 'mobx-react';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { Footer, Header } from 'src/components/organisms';
import { categoryToKorean } from 'src/const';
import RootStore from 'src/store';

import { ThemeProvider } from 'styled-components';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [store, setStore] = useState(new RootStore());

  const router = useRouter();
  const { category } = router.query;
  console.log(store);
  return (
    <Provider {...store}>
      <Header path={categoryToKorean(category)} />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
