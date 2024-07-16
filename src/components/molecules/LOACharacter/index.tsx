'use client';

import Image from 'next/image';
import { GameCharacterInfo } from 'src/components/atoms';
import { LOA_CHARACTER } from 'src/types/apis/loa';
import styled from 'styled-components';

interface LOACharacterProps {
  data: LOA_CHARACTER;
}

const StyledWrapper = styled.div`
  min-height: 400px;
  display: flex;
  flex-direction: column;

  .gameCharBox {
    display: flex;
    flex: 1;

    .gameCharInfoBox {
      padding: 0px 10px;
      background-color: var(--box-bg);
    }
    .gameCharImg {
      padding: 10px 0px;
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
      {ArmoryProfile && (
        <div className='gameCharBox'>
          <div className='gameCharInfoBox'>
            <GameCharacterInfo title='닉네임' data={ArmoryProfile.CharacterName} />
            <GameCharacterInfo title='서버' data={ArmoryProfile.ServerName} />
            <GameCharacterInfo title='직업' data={ArmoryProfile.CharacterClassName} />
            <GameCharacterInfo title='아이템 레벨' data={ArmoryProfile.ItemMaxLevel} />
            <GameCharacterInfo title='캐릭터 레벨' data={ArmoryProfile.CharacterLevel} />
          </div>
          <div className='gameCharImg'>
            <Image
              fill
              objectFit='contain'
              src={ArmoryProfile.CharacterImage}
              alt='로스트아크 캐릭터'
            />
          </div>
        </div>
      )}
    </StyledWrapper>
  );
};
