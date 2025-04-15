import styled from 'styled-components';

const SlideSwitchElement = styled.div<{ state: boolean }>`
  width: 60px;
  height: 30px;

  border-radius: 15px;

  position: fixed;
  right: 1rem;
  bottom: 1rem;

  background-color: var(--bg-theme-switch);
  border: 1px solid var(--border-theme-switch);
  transition:
    background-color 400ms linear,
    border 400ms linear;
  overflow: hidden;

  & > div {
    position: relative;
    top: -1px;
    transition: all 0.5s;
    transform: translateX(${props => (props.state ? '-2px' : '31px')});
    width: 30px;
    height: 30px;
    background-color: #c4c4c4;
    border-radius: 15px;
  }

  @media (max-width: 800px) {
    right: 10px;
    width: 50px;
    height: 25px;
    & > div {
      width: 25px;
      height: 25px;
      transform: translateX(${props => (props.state ? '-2px' : '25px')});
    }
  }

  @media (max-width: 360px) {
    right: 10px;
    width: 36px;
    height: 18px;
    & > div {
      width: 18px;
      height: 18px;
      transform: translateX(${props => (props.state ? '-2px' : '18px')});
    }
  }
`;

interface SlideSwitchProps {
  initState: boolean;
  onChange: () => void;
}

export const SlideSwitch = (props: SlideSwitchProps) => {
  const { initState, onChange } = props;

  return (
    <SlideSwitchElement onClick={onChange} state={initState}>
      <div></div>
    </SlideSwitchElement>
  );
};
