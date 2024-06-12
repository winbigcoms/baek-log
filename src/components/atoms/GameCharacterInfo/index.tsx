'use client';

import styled from 'styled-components';

interface GameCharacterInfoProps {
  title: string;
  data: string | number;
}

export const GameCharacterInfo = (props: GameCharacterInfoProps) => {
  const { title, data } = props;
  return (
    <GameCharacterInfoStyle>
      <div className='gameCharInfoTitle'>{title}</div>
      <div className='gameCharInfoData'>{data}</div>
    </GameCharacterInfoStyle>
  );
};

const GameCharacterInfoStyle = styled.div`
  display: flex;
  gap: 5px;
  color: var(--text-main);

  .gameCharInfoTitle {
    padding: 10px 3px;
    background-color: var(--box-bg);
  }
`;
