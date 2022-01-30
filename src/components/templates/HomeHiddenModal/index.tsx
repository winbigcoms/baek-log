import { ModalPortal } from "src/components/atoms"
import styled from "styled-components";

const HomeHiddenModalContainer = styled.div`
  position: fixed;

  z-index: 200;
  width: 100%;
  height: 100vh;

  top:0;
  left:0;
  background-color: rgba(0,0,0,0.5);

  & > div{
    width: 800px;
    height: 600px;
    position: absolute;

    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    background-color:#ccc;
  }
`

const CloseModalButton = styled.button`
  width: 50px;
  height: 50px;
  position:absolute;
  top:10px;
  right:10px;
`

interface HomeHiddenModalProps {
  switchModalState: (state:boolean)=>void;
}

export const HomeHiddenModal = (props:HomeHiddenModalProps)=>{
  const { switchModalState } = props;

  const closeModal = ()=>{
    switchModalState(false);
  }

  return (
    <HomeHiddenModalContainer>
      <div>
        <CloseModalButton onClick={closeModal}>닫기</CloseModalButton>
          히든퀘스트!
      </div>
    </HomeHiddenModalContainer>
  );
}