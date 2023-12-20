import styled from 'styled-components';

import { PortpolloItemContainer } from 'src/components/atoms';
import { ImageBox } from 'src/components/molecules';

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
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
        <ImageBox imgUrl='/assets/img/thumbnail.png' />
      </div>
      <IntroduceText
        style={{
          fontSize: 36
        }}
        data-aos='fade-up'
        data-aos-duration='700'
      >
        안녕하세요!
      </IntroduceText>
      <IntroduceText
        style={{
          marginTop: '30px'
        }}
        data-aos='fade-up'
        data-aos-delay='600'
        data-aos-duration='700'
      >
        팀원과 함께할 때 더 빛나는 개발자 <br />
        프론트 엔드 개발자 백승일입니다!
      </IntroduceText>
    </PortpolloItemContainer>
  );
};
