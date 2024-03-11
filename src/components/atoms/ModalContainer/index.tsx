import styled from 'styled-components';

const HomeHiddenModalContainer = styled.div`
  position: fixed;

  z-index: 200;
  width: 100%;
  height: 100vh;

  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);

  & > div {
    width: 80%;
    min-width: 400px;
    height: 80%;
    min-height: 300px;
    position: absolute;

    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;

    overflow: hidden;
  }
`;

export const ModalContainer: React.FC<{
  children: React.ReactNode;
}> = props => {
  return (
    <HomeHiddenModalContainer>
      <div>{props.children}</div>
    </HomeHiddenModalContainer>
  );
};
