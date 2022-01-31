import { CloseButton, ModalPortal } from "src/components/atoms"
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
    background-color:#fff;
  }
`

const ModalHeader = styled.div`
  border-bottom: 1px solid #ccc;
  position: relative;
  height: 80px;
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
      <ModalHeader>
        <CloseButton onClose={closeModal}/>

      </ModalHeader>
          히든퀘스트!
      </div>
    </HomeHiddenModalContainer>
  );
}