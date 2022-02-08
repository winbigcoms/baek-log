import { MouseEvent, HTMLAttributes, KeyboardEvent, useState } from 'react';

import styled from 'styled-components';

interface BlockItemContainerProps extends HTMLAttributes<HTMLElement> {
  removeKeyword: (item: string) => void;
  blockItems: string[];
}

const colorBox = ['#FD6060', '#FF9330', '#AEFA62', '#AAFFFF'];

const ColorfulBlockBox = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 74%;
  margin-left: auto;
  margin-bottom: 15px;

  & > div {
    display: flex;
  }
`;

const ColorfulBlock = styled.button<{ color: string }>`
  background-color: ${props => props.color};
  padding: 5px 5px;
  min-width: 50px;
  text-align: center;
  border-radius: 4px;
  border: none;
  margin-right: 5px;
  cursor: pointer;
`;

export const BlockItemContainer = (props: BlockItemContainerProps) => {
  const { removeKeyword, blockItems, ...rest } = props;

  const removeBlock = (e: MouseEvent<HTMLDivElement>) => {
    const data = e.target.dataset.value;

    if (data) {
      removeKeyword(data);
    }
  };

  return (
    <ColorfulBlockBox {...rest}>
      <div onClick={removeBlock}>
        {blockItems.map((item, idx) => (
          <ColorfulBlock key={item} data-value={item} color={colorBox[idx % 4]}>
            {item}
          </ColorfulBlock>
        ))}
      </div>
    </ColorfulBlockBox>
  );
};
