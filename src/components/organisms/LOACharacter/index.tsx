'use client';

import Image from 'next/image';
import { GameCharacterInfo } from 'src/components/atoms';
import { LOA_CHARACTER } from 'src/types/apis/loa';
import styled from 'styled-components';

interface LOACharacterProps {
  data: LOA_CHARACTER;
}

const StyledWrapper = styled.div`
  width: 33%;
  min-height: 500px;
  display: flex;
  flex-direction: column;

  .gameCharBox {
    display: flex;
    flex: 1;
    .gameCharImg {
      flex: 1;
      position: relative;
      background-color: var(--bg-main);
    }
  }
`;

export const LOACharacter = (props: LOACharacterProps) => {
  const { data } = props;

  const { ArmoryProfile } = data;

  return (
    <StyledWrapper>
      <div className='gameCharName'>{ArmoryProfile.CharacterName}</div>
      <div className='gameCharBox'>
        <div className='gameCharImg'>
          <Image fill objectFit='contain' src={ArmoryProfile.CharacterImage} alt='균의방패' />
        </div>
        <div className='gameCharInfoBox'>
          <GameCharacterInfo title='아이템 레벨' data={ArmoryProfile.ItemMaxLevel} />
        </div>
      </div>
    </StyledWrapper>
  );
};
