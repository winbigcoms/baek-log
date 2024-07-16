'use client';

import Image from 'next/image';
import { GameCharacterInfo } from 'src/components/atoms';
import { MAPLE_CHARACTER } from 'src/types/apis/maple';
import styled from 'styled-components';

interface MapleCharacterProps {
  data: MAPLE_CHARACTER;
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

export const MapleCharacter = (props: MapleCharacterProps) => {
  const { data } = props;

  return (
    <StyledWrapper>
      <div className='gameCharBox'>
        <div className='gameCharInfoBox'>
          <GameCharacterInfo title='닉네임' data={data.character_name} />
          <GameCharacterInfo title='서버' data={data.world_name} />
          <GameCharacterInfo title='직업' data={data.character_class} />
          <GameCharacterInfo title='캐릭터 레벨' data={data.character_level} />
        </div>
        <div className='gameCharImg'>
          <Image fill objectFit='contain' src={data.character_image} alt='메이플스토리 캐릭터' />
        </div>
      </div>
    </StyledWrapper>
  );
};
