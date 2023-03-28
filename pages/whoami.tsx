import Head from 'next/head';

import { PortpolloTmp } from 'src/components/templates';
import styled from 'styled-components';

const Wrapper = styled.div<{ darkMode: boolean }>`
  background-color: var(--bg-main);
  color: var(--text-main);

  transition: background-color 400ms linear, color 400ms linear;
`;

const WhoAmIPage = () => {
  return (
    <>
      <Head>
        <title>Baek Portfoilo</title>
        <meta name='description' content='웹 개발자 백승일의 포트폴리오' />
        <meta name='keyword' content='개발자 포트폴리오, 포트폴리오, 프론트엔드 개발자' />
      </Head>
      <Wrapper className={true ? 'dark' : 'light'} darkMode={true}>
        <PortpolloTmp />
      </Wrapper>
    </>
  );
};

export default WhoAmIPage;
