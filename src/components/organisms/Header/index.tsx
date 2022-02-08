import Image from 'next/image';

import styled from 'styled-components';

import { BannerText, SlideSwitch } from 'src/components/atoms';
import { StyleStore } from 'src/store/style';
import { inject, observer } from 'mobx-react';

const HeaderContainer = styled.header<{ darkMode: boolean }>`
  position: sticky;
  top: 0px;
  margin: auto;
  padding: 10px 0px;
  background-color: ${props => (props.darkMode ? '#000' : '#fff')};
  color: ${props => (props.darkMode ? '#fff' : '#000')};
  z-index: 10;
  transition: background-color 400ms linear, color 400ms linear;

  h1 {
    max-width: 1024px;
    margin: auto;
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 25px;

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

const HeaderComponent = (props: HeaderProps) => {
  const { path, style } = props;

  const { darkMode, changeMode } = style;

  return (
    <>
      <BannerContainer darkMode={darkMode}>
        <div>
          <Image
            src={darkMode ? '/assets/img/banner-dark.png' : '/assets/img/banner-light.png'}
            width='800px'
            height='250px'
          />
        </div>
      </BannerContainer>
      <HeaderContainer darkMode={darkMode}>
        <BannerText>
          평범한 개발자의 블로그 <span>{path}</span>
        </BannerText>
        <SlideSwitch initState={darkMode} onChange={changeMode} />
      </HeaderContainer>
    </>
  );
};

export const Header = inject('style')(observer(HeaderComponent));
