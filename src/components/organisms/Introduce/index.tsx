import styled from 'styled-components';

import { PortpolloItemContainer } from 'src/components/atoms';

const IntroduceText = styled.p`
  text-align: center;
  font-size: 24px;
  line-height: 48px;
  word-break: keep-all;
`;

export const Introduce = () => {
  return (
    <PortpolloItemContainer>
      <h2 className='a11y-hidden'>소개</h2>
      <IntroduceText>안녕하세요! 프론트 엔드 개발자 백승일입니다.</IntroduceText>
    </PortpolloItemContainer>
  );
};
