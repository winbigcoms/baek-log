import Image from 'next/image';

import styled from 'styled-components';

const FooterElement = styled.footer`
  height: 100px;

  & > div {
    max-width: 1024px;
    min-width: 800px;
    display: flex;
    margin: 15px auto 0px;
    justify-content: space-between;
    padding: 0px 10px;
  }
  border-top: 1px solid #ccc;
`;

export const Footer = () => {
  return (
    <FooterElement>
      <div>
        <div>제작, 기획, 디자인: 백승일</div>
        <div>
          <a href='https://github.com/winbigcoms'>
            <Image src='/assets/img/github.png' width='25px' height='25px' />
          </a>
        </div>
      </div>
    </FooterElement>
  );
};
