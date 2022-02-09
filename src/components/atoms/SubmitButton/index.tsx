import styled from 'styled-components';

const SubmitButtonElement = styled.button`
  cursor: pointer;
  width: 150px;
  height: 60px;
  border: none;
  border-radius: 15px;

  margin: 20px auto 0px;
  display: block;

  font-size: 24px;
`;

interface SubmitButtonProps {
  onClick: () => void;
  text: string;
}

export const SubmitButton = (props: SubmitButtonProps) => {
  const { text, onClick } = props;

  return <SubmitButtonElement onClick={onClick}>{text}</SubmitButtonElement>;
};
