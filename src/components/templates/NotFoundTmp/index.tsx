import { inject, observer } from 'mobx-react';

import styled from 'styled-components';

import { StyleStore } from 'src/store/style';
import { CategoryBox } from '..';
import Link from 'next/link';

const NotFoundContainer = styled.main<{ darkMode: boolean }>`
  margin: auto;
  padding: 30px 0px;

  min-height: 100%;

  background-color: ${props => (props.darkMode ? '#000' : '#fff')};
  color: ${props => (props.darkMode ? '#fff' : '#000')};

  transition: background-color 400ms linear, color 400ms linear;

  text-align: center;
  font-size: 24px;

  a {
    display: block;
    padding: 20px;
    color: red;
  }
`;

interface HomeContentsProps {
  style: StyleStore;
}

const NotFoundComponent = (props: HomeContentsProps) => {
  const { style } = props;

  const { darkMode } = style;

  return (
    <NotFoundContainer darkMode={darkMode}>
      존재하지 않는 페이지인데! <br /> 어떻게 왔죠! <br />
      돌아가요!
      <Link href='/'>
        <a> 홈으로 돌아가기</a>
      </Link>
    </NotFoundContainer>
  );
};

export const NotFoundTmp = inject('style')(observer(NotFoundComponent));
