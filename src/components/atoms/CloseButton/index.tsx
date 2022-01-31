import styled from 'styled-components';

const CloseButtonElement = styled.button`
  background-color: inherit;
  border: none;
  width: 50px;
  height: 50px;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  transition: background 0.5s;

  &:hover {
    background-color: #efefef;
  }

  & > span {
    display: inline-block;
    width: 30px;
    height: 1px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    background-color: #000;
  }

  & > span:nth-child(2) {
    transform: translate(-50%, -50%) rotate(135deg);
  }
`;

interface CloseButtonProps {
  onClose: () => void;
}

export const CloseButton = (props: CloseButtonProps) => {
  const { onClose } = props;

  return (
    <CloseButtonElement onClick={onClose}>
      <span></span>
      <span></span>
    </CloseButtonElement>
  );
};
