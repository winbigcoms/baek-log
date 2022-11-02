import Image from 'next/image';
import { useRouter } from 'next/router';

import styled, { keyframes } from 'styled-components';

import { inject, observer } from 'mobx-react';
import { BannerText, SlideSwitch } from 'src/components/atoms';

import { StyleStore } from 'src/store/style';
import { TypeingText } from 'src/components/atoms/TypIngText';

const introduceAnimation = keyframes`
0% {
  opacity: 1;
}
50% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const HeaderContainer = styled.header<{ darkMode: boolean }>`
  position: sticky;
  top: -1px;
  margin: auto;
  padding: 10px 0px;
  background-color: ${props => (props.darkMode ? '#000' : '#fff')};
  color: ${props => (props.darkMode ? '#fff' : '#000')};
  z-index: 10;
  transition: background-color 400ms linear, color 400ms linear;
  box-shadow: 0px 4px 4px -4px ${props => (props.darkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.2)')};

  h1 {
    max-width: 1024px;
    margin: auto;
  }

  .introduce {
    min-height: 2rem;
    height: 100%;
    width: 1px;
    background-color: ${props => (props.darkMode ? '#fff' : '#000')};
    animation: ${introduceAnimation} 0.7s infinite;
  }

  @media screen and (max-width: 800px) {
    h1 {
      font-size: 25px;

      span {
        display: block;
      }
    }
  }

  @media screen and (max-width: 360px) {
    h1 {
      font-size: 20px;

      span {
        display: block;
      }
    }
  }
`;

const BannerContainer = styled.div<{ darkMode: boolean }>`
  & > div {
    display: flex;
    justify-content: center;
    max-width: 1024px;
    width: 100%;
    margin: auto;
  }

  background-color: ${props => (props.darkMode ? '#000' : 'inhetit')};
  transition: background-color 400ms linear;
`;

interface HeaderProps {
  path: string;
  style: StyleStore;
}

const targetStrings = ['밥 값하는', '토론을 즐기는', '동료들과 협업하는', '회사와 같이 성장하는'];

const HeaderComponent = (props: HeaderProps) => {
  const { path, style } = props;

  const { darkMode, changeMode } = style;

  const router = useRouter();

  const route = router.asPath;

  return (
    <>
      <BannerContainer darkMode={darkMode}>
        <div>
          <Image
            src={darkMode ? '/assets/img/banner-dark.png' : '/assets/img/banner-light.png'}
            width='800px'
            height='250px'
            alt='배너 이미지'
          />
        </div>
      </BannerContainer>
      <HeaderContainer darkMode={darkMode}>
        <BannerText>
          <TypeingText typeStrings={targetStrings} />
          {route.includes('whoami') ? (
            <>
              프론트엔드 개발자 <span>백승일의 포트폴리오 입니다.</span>
            </>
          ) : (
            '개발자 백승일의 블로그'
          )}
          {path && (
            <div>
              <span>{path}</span>
            </div>
          )}
          <SlideSwitch initState={darkMode} onChange={changeMode} />
        </BannerText>
      </HeaderContainer>
    </>
  );
};

export const Header = inject('style')(observer(HeaderComponent));
