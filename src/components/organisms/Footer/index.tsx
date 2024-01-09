import Image from 'next/image';
import Link from 'next/link';

import styled from 'styled-components';

const FooterElement = styled.footer<{ darkMode: boolean }>`
  background-color: ${props => (props.darkMode ? '#000' : '#fff')};
  color: ${props => (props.darkMode ? '#fff' : '#000')};
  border-top: 1px solid ${props => (props.darkMode ? '#ccc' : '#000')};
  transition:
    background-color 400ms linear,
    color 400ms linear;

  & > div {
    max-width: 1024px;
    display: flex;
    margin: 15px auto 0px;
    justify-content: center;
    padding: 0px 10px;
    flex-direction: column;

    div {
      text-align: center;
      margin-bottom: 10px;

      &:first-child {
        margin-top: 15px;
      }

      a {
        margin-right: 10px;
        width: 35px;
        display: inline-block;
        height: 35px;

        border-radius: 50%;
        background: #fff;
        overflow: hidden;
      }
      & > a:last-child {
        margin: 0px;
      }
    }
    & > a {
      text-align: center;
      margin-bottom: 15px;
    }
  }
`;

export const FooterComponent = () => {
  return (
    <FooterElement darkMode={true}>
      <div>
        <div>
          <a href='https://github.com/winbigcoms' target='_blank' rel='noreferrer'>
            <Image
              src={'/assets/img/github-white.png'}
              width='35px'
              height='35px'
              alt='깃허브 아이콘'
            />
          </a>
          <a href='https://velog.io/@winbigcoms' target='_blank' rel='noreferrer'>
            <Image src={'/assets/img/velog.svg'} width='35px' height='35px' alt='벨로그 아이콘' />
          </a>
          <a href='/'>
            <Image src={'/assets/img/logo.png'} width='35px' height='35px' alt='백로그 아이콘' />
          </a>
          <a
            href='https://sedate-stargazer-bc3.notion.site/d174986258ec4e6297723796e2986cac?pvs=4'
            target='_blank'
            rel='noreferrer'
          >
            <Image src={'/assets/img/notion.webp'} width='35px' height='35px' alt='백로그 아이콘' />
          </a>
          <a href='https://more-then-yesterday.tistory.com/' target='_blank' rel='noreferrer'>
            <Image
              src={'/assets/img/logo/tstory.png'}
              width='35px'
              height='35px'
              alt='티스토리 아이콘'
            />
          </a>
        </div>
        <div>제작, 기획, 디자인: 백승일</div>
        <Link href='/whoami'>제작자 포트폴리오 보러가기</Link>
        <div>&#169; SeungIl Beak. All rights reserved</div>
      </div>
    </FooterElement>
  );
};

export const Footer = FooterComponent;
