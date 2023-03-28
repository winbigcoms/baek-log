import styled from 'styled-components';

const MoreButtonElement = styled.button`
  background-color: #c4c4c4;
  width: 80px;
  height: 25px;
  border: none;
  background-color: inherit;
  cursor: pointer;
  color: inherit;
`;

interface MoreButtonProps {
  onClick: () => void;
}

export const MoreButton = (props: MoreButtonProps) => {
  const { onClick } = props;
  return <MoreButtonElement onClick={onClick}>더보기 +</MoreButtonElement>;
};
