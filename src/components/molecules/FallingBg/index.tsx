'use client';
import { useMemo } from 'react';
import { useFalling } from 'src/Hooks';
import { get_falling_stuff } from 'src/utills';
import styled from 'styled-components';

interface FallingBgProps {
  amount: number;
}

const FallingBgContainer = styled.div`
  position: fixed;
  z-index: 0;
  height: 1px;
  user-select: none;
`;

export const FallingBg = (props: FallingBgProps) => {
  const { amount } = props;
  const faillingData = useFalling(amount);
  const fallingStuff = useMemo(() => get_falling_stuff(), []);

  return (
    <FallingBgContainer>
      {faillingData.map((data, idx) => (
        <div
          key={idx}
          style={{
            fontSize: '15px',
            color: `#fff`,
            transform: `translate(${data.x}px, ${data.y}px)`,
            position: 'absolute',
            left: 0,
            top: 0
          }}
        >
          {fallingStuff}
        </div>
      ))}
    </FallingBgContainer>
  );
};
