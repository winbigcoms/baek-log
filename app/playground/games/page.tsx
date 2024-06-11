'use client';

import { GameCharacterWrapper } from 'src/components/molecules';
import { LostarkCharacter } from 'src/components/molecules/LostarkCharacter';

export default async function GamePage() {
  return (
    <div>
      <h1>주인장의 게임 캐릭터</h1>
      <GameCharacterWrapper gameTitle='로스트 아크'>
        <LostarkCharacter />
      </GameCharacterWrapper>
    </div>
  );
}
