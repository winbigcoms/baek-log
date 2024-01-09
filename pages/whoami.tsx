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
        <meta property='og:type' content='article' />
        <meta property='og:title' content='웹 개발자 백승일 기술이력서' />
        <meta property='og:description' content='안녕하세요. 백승일입니다.' />
        <meta property='og:image' content='../assets/img/og.jpg' />
        <meta property='og:image:type' content='image/jpg' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:image' content='../assets/img/og.jpg' />
      </Head>
      <Wrapper className={'dark'} darkMode={true}>
        <FallingBg amount={30} />
        <PortpolloTmp />
      </Wrapper>
    </>
  );
};

export default WhoAmIPage;
