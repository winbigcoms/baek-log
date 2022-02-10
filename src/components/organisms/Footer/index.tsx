import { inject, observer } from 'mobx-react';
import Image from 'next/image';
import { StyleStore } from 'src/store/style';

import styled from 'styled-components';

const FooterElement = styled.footer<{ darkMode: boolean }>`
  height: 100px;

  background-color: ${props => (props.darkMode ? '#000' : '#fff')};
  color: ${props => (props.darkMode ? '#fff' : '#000')};
  border-top: 1px solid ${props => (props.darkMode ? '#ccc' : '#000')};

  transition: background-color 400ms linear, color 400ms linear;

  & > div {
    max-width: 1024px;
    display: flex;
    margin: 15px auto 0px;
    justify-content: center;
    padding: 0px 10px;
    flex-direction: column;

    div {
      text-align: center;
      a {
        margin-right: 10px;
        width: 35px;
        display: inline-block;
        height: 35px;
      }
      & > a:last-child {
        margin: 0px;
      }
    }
  }
`;

interface FooterProps {
  style: StyleStore;
}

export const FooterComponent = (props: FooterProps) => {
  const { style } = props;

  const { darkMode } = style;

  return (
    <FooterElement darkMode={darkMode}>
      <div>
        <div>
          <a href='https://github.com/winbigcoms'>
            <Image
              src={darkMode ? '/assets/img/github-white.png' : '/assets/img/github.png'}
              width='35px'
              height='35px'
            />
          </a>
          <a href='https://github.com/winbigcoms'>
            <Image src={'/assets/img/velog.png'} width='35px' height='35px' />
          </a>
          <a href='https://github.com/winbigcoms'>
            <Image src={'/assets/img/Logo.png'} width='35px' height='35px' />
          </a>
        </div>
        <div>제작, 기획, 디자인: 백승일</div>
        <div>&#169; SeungIl Beak. All rights reserved</div>
      </div>
    </FooterElement>
  );
};

export const Footer = inject('style')(observer(FooterComponent));
