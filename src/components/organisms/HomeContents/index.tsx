import { ImageBox } from 'src/components/molecules';
import styled from 'styled-components';

const HomeContentsContainer = styled.main<{ darkMode: boolean }>`
  margin: auto;
  padding: 100px 0px 30px;
  height: 80vh;

  .greeting {
    text-align: center;
    font-size: 1.2rem;
    padding: 10px 0px;
  }

  & > div {
    margin-bottom: 15px;
  }

  background-color: ${props => (props.darkMode ? '#000' : '#fff')};
  color: ${props => (props.darkMode ? '#fff' : '#000')};
  transition:
    background-color 400ms linear,
    color 400ms linear;

  .menus {
    display: flex;
    height: 100%;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    gap: 20px;

    article a {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
`;

export const HomeContents = () => {
  return (
    <HomeContentsContainer darkMode={true}>
      <h2 className='a11y-hidden'>home</h2>
      <p className='greeting'>어서오세요~~ 어디로 가고 싶은가요!</p>
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
        <article>
          <a href='/playground/multi-twitch'>
            <>
              <h3>트위치 멀티뷰어</h3>
              <ImageBox imgUrl='/assets/img/twitch.png' useBGColor />
              <p>한 화면에 5개의 트위치 방송을</p>
            </>
          </a>
        </article>
      </div>
    </HomeContentsContainer>
  );
};
