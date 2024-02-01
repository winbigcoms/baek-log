'use client';
import Head from 'next/head';
import { MultiTwitchTmp } from 'src/components/templates';

const MultiViewerTwitch = () => {
  return (
    <>
      <Head>
        <title>multi-twitch</title>
        <meta name='description' content='트위치 다중화면 시청' />
      </Head>
      <MultiTwitchTmp />
    </>
  );
};

export default MultiViewerTwitch;
