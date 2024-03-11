import styled from 'styled-components';

import Link from 'next/link';

const NotFoundContainer = styled.main`
  margin: auto;
  padding: 30px 0px;

  min-height: 100%;

  background-color: #000;
  color: #fff;

  transition:
    background-color 400ms linear,
    color 400ms linear;

  text-align: center;
  font-size: 24px;

  a {
    display: block;
    padding: 20px;
    color: red;
  }
`;

const NotFoundComponent = () => {
  return (
    <NotFoundContainer>
      존재하지 않는 페이지인데! <br /> 어떻게 왔죠! <br />
      돌아가요!
      <Link href='/whoami'>홈으로 돌아가기</Link>
    </NotFoundContainer>
  );
};

export default NotFoundComponent;
