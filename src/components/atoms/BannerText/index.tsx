'use client';

import { HTMLAttributes } from 'react';

import styled from 'styled-components';

const BannerTextElement = styled.h1`
  text-align: center;
  position: relative;
`;

export const BannerText: React.FC<HTMLAttributes<HTMLElement>> = ({ children, ...rest }) => {
  return <BannerTextElement {...rest}>{children}</BannerTextElement>;
};
