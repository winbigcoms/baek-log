import Head from 'next/head';
import { MultiTwitchTmp } from 'src/components/templates';

const MultiViewerTwitch = () => {
  return (
    <>
      <Head>
        <title>multi-twitch</title>
        <meta name='description' content='트위치 다중화면 시청' key='desc' />
        <meta
          property='og:url'
          content='https://www.white-win.dev/playground/multi-twitch'
          key='og-url'
        />
        <meta property='og:description' content='트위치 다중화면 시청' key='og-desc' />
        <meta
          property='og:image'
          content='https://baek-log-img.s3.ap-northeast-2.amazonaws.com/multi-og.png'
          key='og-img'
        />
        <meta
          name='twitter:image'
          content='https://baek-log-img.s3.ap-northeast-2.amazonaws.com/multi-og.png'
          key='twitter-key'
        />
      </Head>
      <MultiTwitchTmp />
    </>
  );
};

export default MultiViewerTwitch;
