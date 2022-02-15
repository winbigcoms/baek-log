import Head from 'next/head';

import { inject, observer } from 'mobx-react';
import { PortpolloTmp } from 'src/components/templates';
import styled from 'styled-components';
import { StyleStore } from 'src/store/style';

const Wrapper = styled.div<{ darkMode: boolean }>`
  background-color: ${props => (props.darkMode ? '#000' : '#fff')};
  color: ${props => (props.darkMode ? '#fff' : '#000')};
`;

interface WhoAmIProps {
  style: StyleStore;
}

const WhoAmIPage = (props: WhoAmIProps) => {
  const { style } = props;

  const { darkMode } = style;
  return (
    <>
      <Head>
        <title>Baek Portfoilo</title>
        <meta name='description' content='웹 개발자 백승일의 포트폴리오' />
        <meta name='keyword' content='개발자 포트폴리오, 포트폴리오, 프론트엔드 개발자' />
      </Head>
      <Wrapper darkMode={darkMode}>
        <PortpolloTmp />
      </Wrapper>
    </>
  );
};

const WhoAmI = inject('style')(observer(WhoAmIPage));

export default WhoAmI;
