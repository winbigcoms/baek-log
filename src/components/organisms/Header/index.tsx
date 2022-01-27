import Image from 'next/image';

import styled from 'styled-components';

import { BannerText } from 'src/components/atoms';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0px;
  max-width: 1024px;
  margin: auto;
  padding: 10px 0px;
  background-color: #fff;
  z-index: 10;
`;

const BannerContainer = styled.div`
  & > div {
    display: flex;
    justify-content: center;
    max-width: 1024px;
    width: 100%;
    margin: auto;
  }
`;

interface HeaderProps {
  path: string;
}

export const Header = (props: HeaderProps) => {
  const { path } = props;
  return (
    <>
      <BannerContainer>
        <div>
          <Image src='/assets/img/banner-light.png' width='800px' height='250px' />
        </div>
      </BannerContainer>
      <HeaderContainer>
        <BannerText>평범한 개발자 나의 블로그{path}</BannerText>
      </HeaderContainer>
    </>
  );
};
