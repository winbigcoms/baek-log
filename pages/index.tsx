import type { NextPage } from 'next';
import Head from 'next/head';

import { HomeTmp } from 'src/components/templates';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Baek log</title>
        <meta name='description' content='웹 개발자 백승일의 개발자 블로그' />
      </Head>
      <HomeTmp />
    </>
  );
};

export default Home;
