import { IntroduceText, PortpolloItemContainer } from 'src/components/atoms';

export const Introduce = () => {
  return (
    <PortpolloItemContainer>
      <div className='slide_when_moblie' style={{ display: 'flex', alignItems: 'center' }}>
        <h2 tabIndex={1} style={{ flex: 1 }}>
          <p className='a11y-hidden'>소개</p>
          <p data-aos='fade-up' data-aos-duration='500'>
            안녕하세요
          </p>
          <br />
          <p data-aos='fade-up' data-aos-delay='200' data-aos-duration='700'>
            개발자 백승일입니다!
          </p>
        </h2>
        <div style={{ flex: 1 }} data-aos='fade-up' data-aos-delay='700' data-aos-duration='700'>
          <IntroduceText>
            프론트엔드 개발자 백승일입니다.
            <br /> 문제를 해결함에 있어서 근본이 되는 원인을 파악합니다.
            <br /> 스킬에 욕심이 있어 기술에 관심이 많습니다.
            <br /> 앞으로 더 많은 분야를 경험해보고 싶습니다.
          </IntroduceText>
        </div>
      </div>
    </PortpolloItemContainer>
  );
};
