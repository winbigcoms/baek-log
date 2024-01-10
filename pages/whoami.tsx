import Head from 'next/head';
import { FallingBg } from 'src/components/molecules';

import { PortpolloTmp } from 'src/components/templates';
import styled from 'styled-components';

const Wrapper = styled.div<{ darkMode: boolean }>`
  background-color: var(--bg-main);
  color: var(--text-main);

  transition:
    background-color 400ms linear,
    color 400ms linear;
`;

const WhoAmIPage = () => {
  return (
    <>
      <Head>
        <title>백승일 기술이력서</title>
        <meta property='og:url' content='https://www.white-win.dev/whoami' key='og-url' />
        <meta
          property='og:image'
          content='https://baek-log-img.s3.ap-northeast-2.amazonaws.com/og.png?v=1'
          key='og-img'
        />
        <meta property='twitter:url' content='https://www.white-win.dev/whoami' key='twitter-url' />
        <meta
          name='twitter:image'
          content='https://baek-log-img.s3.ap-northeast-2.amazonaws.com/og.png?v=1'
          key='twitter-key'
        />
      </Head>
      <Wrapper className={'dark'} darkMode={true}>
        <FallingBg amount={30} />
        <PortpolloTmp />
      </Wrapper>
    </>
  );
};

export default WhoAmIPage;
