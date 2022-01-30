import { ReactPortal, useEffect, useState } from "react";
import { ModalPortal } from "src/components/atoms";

interface UseModalProps {
  Contents: (props:{switchModalState:(state:boolean)=>void})=> JSX.Element;
}

export const useModal = (props:UseModalProps)=>{
  const { Contents } = props;
  const [modalState,setModalState] = useState(false);

  const switchModalState = (state:boolean)=>{
    setModalState(state);
  }

  useEffect(()=>{
    if(modalState && typeof window !== 'undefined'){
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = 'inherit';
    }
  },[modalState])

  return {
    ModalComponent : ModalPortal({Contents,switchModalState}),
    modalState,
    switchModalState
  };
}