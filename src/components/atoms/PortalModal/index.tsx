import ReactDOM from 'react-dom';

interface ModalPortalProps {
  Contents: (props:{switchModalState:(state:boolean)=>void})=> JSX.Element;
  switchModalState: (state:boolean)=> void;
}

export const ModalPortal = (props:ModalPortalProps)=>{
  const { Contents, switchModalState } = props;

  const element = typeof window !== 'undefined' && document.getElementById('portal');

  return element && Contents ? ReactDOM.createPortal(<Contents switchModalState={switchModalState}/>,element):null
}
