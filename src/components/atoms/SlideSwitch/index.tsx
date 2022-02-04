import styled from 'styled-components';

const SlideSwitchElement = styled.div<{ state: boolean }>`
  width: 60px;
  height: 30px;
  border-radius: 15px;
  position: absolute;
  right: 50px;
  top: 15px;
  background-color: ${props => (props.state ? '#fff' : '#000')};
  border: 1px solid ${props => (props.state ? '#000' : '#fff')};
  transition: background-color 400ms linear, border 400ms linear;

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
`;

interface SlideSwitchProps {
  initState: boolean;
  onChange: (mode: boolean) => void;
}

export const SlideSwitch = (props: SlideSwitchProps) => {
  const { initState, onChange } = props;

  const onClickSwitch = () => {
    onChange(!initState);
  };

  return (
    <SlideSwitchElement onClick={() => onClickSwitch()} state={initState}>
      <div></div>
    </SlideSwitchElement>
  );
};
