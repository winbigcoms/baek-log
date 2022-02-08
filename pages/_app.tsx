import { useEffect, useState } from 'react';
import { Provider } from 'mobx-react';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { Footer, Header } from 'src/components/organisms';
import { categoryToKorean } from 'src/const';
import RootStore from 'src/store';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [store, setStore] = useState(new RootStore());

  const router = useRouter();
  const { category } = router.query;

  useEffect(() => {
    const clientMode = localStorage.getItem('mode');
    const { changeMode } = store.style;

    if (!clientMode) {
      localStorage.setItem('mode', JSON.stringify(false));
    } else if (clientMode && clientMode) {
      changeMode(clientMode);
    }
  }, []);

  return (
    <Provider {...store}>
      <Header path={categoryToKorean(category as string)} />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
