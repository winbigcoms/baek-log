import Head from 'next/head';

import { inject, observer } from 'mobx-react';

const WhoAmIPage = () => {
  return (
    <>
      <Head>
        <title>Baek Portfoilo</title>
        <meta name='description' content='웹 개발자 백승일의 포트폴리오' />
        <meta name='keyword' content='개발자 포트폴리오, 포트폴리오, 개발자' />
      </Head>
    </>
  );
};

const WhoAmI = inject('style')(observer(WhoAmIPage));

export default WhoAmI;
