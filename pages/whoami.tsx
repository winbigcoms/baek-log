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
        <meta name='description' content='웹 개발자 백승일의 기술이력서' />
        <meta name='keyword' content='개발자, 기술이력서, 포트폴리오, 프론트엔드' />
        <meta property='og:url' content='https://www.white-win.dev/whoami' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='웹 개발자 백승일 기술이력서' />
        <meta property='og:description' content='안녕하세요. 백승일입니다.' />
        <meta
          property='og:image'
          content='https://baek-log-img.s3.ap-northeast-2.amazonaws.com/og.png'
        />
        <meta property='og:image:type' content='image/jpg' />
        <meta property='twitter:domain' content='https://www.white-win.dev' />
        <meta property='twitter:url' content='https://www.white-win.dev/whoami' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:image'
          content='https://baek-log-img.s3.ap-northeast-2.amazonaws.com/og.png'
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
