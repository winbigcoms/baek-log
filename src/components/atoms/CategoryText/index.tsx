import { HTMLAttributes } from 'react';
import styled from 'styled-components';

const CategoryTextElement = styled.h2`
  height: 35px;
`;

export const CategoryText: React.FC<HTMLAttributes<HTMLElement>> = ({ children, ...rest }) => {
  return <CategoryTextElement {...rest}>{children}</CategoryTextElement>;
};
