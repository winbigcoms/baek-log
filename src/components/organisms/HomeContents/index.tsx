import { ImageBox } from 'src/components/molecules';
import styled from 'styled-components';

const HomeContentsContainer = styled.main`
  margin: auto;
  padding: 100px 10px 30px;
  min-height: calc(100vh - 172px);

  .greeting {
    text-align: center;
    font-size: 1.2rem;
    padding: 10px 0px;
  }

  & > div {
    margin-bottom: 15px;
  }

  background-color: #000;
  color: #fff;
  transition:
    background-color 400ms linear,
    color 400ms linear;

  .menus {
    display: flex;
    height: 100%;
    flex-wrap: wrap;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media screen and (max-width: 800px) {
      height: auto;
    }

    article a {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
`;

export const HomeContents = () => {
  return (
    <HomeContentsContainer>
      <h2 className='a11y-hidden'>home</h2>
      <p className='greeting'>
        어서 오시게 낮선 이여. 여긴 아무것도 없다네. 다른 곳을 둘러보시게나
      </p>
      <div className='menus'>
        <article>
          <a href='/whoami'>
            <>
              <h3>주인장 포트폴리오</h3>
              <ImageBox imgUrl='/assets/img/thumbnail.png' />
              <p>Let me introduce my self</p>
            </>
          </a>
        </article>
      </div>
    </HomeContentsContainer>
  );
};
