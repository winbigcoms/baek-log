import { useRouter } from 'next/router';

import styled, { keyframes } from 'styled-components';

import { BannerText, SlideSwitch } from 'src/components/atoms';

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

const HeaderContainer = styled.header`
  background-color: var(--bg-main);
  color: var(--text-main);
  transition: background-color 400ms linear, color 400ms linear;
  box-shadow: 0px 4px 4px -4px var(--box-shadow);
  z-index: 10;
  position: sticky;
  top: -1px;
  margin: auto;
  padding: 10px 0px;

  h1 {
    max-width: 1024px;
    margin: auto;
  }

  .introduce {
    min-height: 2rem;
    height: 100%;
    width: 1px;
    background-color: var(--bg-main);
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

interface HeaderProps {
  path: string;
}

const targetStrings = [
  '밥 값하는',
  '토론을 즐기는',
  '동료들과 협업하는',
  '회사와 같이 성장하는',
  '함께 일해보고 싶은'
];

export const Header = (props: HeaderProps) => {
  const { path } = props;

  const router = useRouter();

  const route = router.asPath;

  return (
    <div className={true ? 'dark' : 'light'}>
      <HeaderContainer>
        <BannerText>
          <TypeingText typeStrings={targetStrings} />
          {route.includes('whoami') ? (
            <span>백승일의 포트폴리오 입니다.</span>
          ) : (
            '개발자 백승일의 블로그'
          )}
          {path && (
            <div>
              <span>{path}</span>
            </div>
          )}
        </BannerText>
      </HeaderContainer>
      <SlideSwitch initState={true} onChange={() => {}} />
    </div>
  );
};
