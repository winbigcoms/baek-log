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
      <IntroduceText
        style={{
          fontSize: 36
        }}
        data-aos='fade-up'
        data-aos-duration='500'
      >
        안녕하세요!
      </IntroduceText>
      <IntroduceText
        style={{
          marginTop: '30px'
        }}
        data-aos='fade-up'
        data-aos-delay='300'
        data-aos-duration='500'
      >
        혼자서도 역량이 있지만, <br />
        팀원과 함께할 때 더 빛나는 개발자가 목표인 <br />
        프론트 엔드 개발자 백승일입니다!
      </IntroduceText>
    </PortpolloItemContainer>
  );
};
