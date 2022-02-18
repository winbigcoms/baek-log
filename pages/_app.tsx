import { useEffect, useState } from 'react';
import { Provider } from 'mobx-react';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { ThemeProvider } from 'styled-components';

import { Footer, Header } from 'src/components/organisms';
import { categoryToKorean } from 'src/const';
import RootStore from 'src/store';

import { theme } from '../styles/Theme';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [store, setStore] = useState(new RootStore());

  const router = useRouter();
  const { category } = router.query;

  useEffect(() => {
    const clientMode = localStorage.getItem('mode');

    const stringClientMode = Boolean(clientMode) ? JSON.parse(clientMode) : '';
    const { changeMode } = store.style;

    if (!Boolean(stringClientMode)) {
      localStorage.setItem('mode', JSON.stringify(false));
    } else if (stringClientMode) {
      changeMode(stringClientMode);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Provider {...store}>
        <Header path={categoryToKorean(category as string)} />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
