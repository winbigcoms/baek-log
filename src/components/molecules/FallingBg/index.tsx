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
            position: 'absolute',
            fontSize: '15px',
            color: `#fff`,
            left: `${data.x}px`,
            top: `${data.y}px`
          }}
        >
          {fallingStuff}
        </div>
      ))}
    </FallingBgContainer>
  );
};
