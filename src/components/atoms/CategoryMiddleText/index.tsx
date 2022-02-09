import styled from 'styled-components';

const CategoryMiddleTextElement = styled.p`
  text-align: center;
  font-size: 18px;
`;

interface CategoryMiddleTItle {
  text: string;
}

export const CategoryMiddleText = (props: CategoryMiddleTItle) => {
  const { text } = props;

  return <CategoryMiddleTextElement>{text}</CategoryMiddleTextElement>;
};
