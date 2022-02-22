import styled from 'styled-components';

import { PortpolloItemContainer } from 'src/components/atoms';

const IntroduceText = styled.p`
  text-align: center;
  font-size: 24px;
  line-height: 48px;
`;

export const Introduce = () => {
  return (
    <PortpolloItemContainer>
      <h2>소개</h2>
      <IntroduceText>
        안녕하세요! <br />
        소통하며 협업하는 것을 좋아하는 프론트 엔드 개발자 백승일입니다. <br />
        모르는 것을 부끄러워 하지 않는 것, 질문을 두려워 하지 않는 점이 장점이랍니다.
      </IntroduceText>
    </PortpolloItemContainer>
  );
};
