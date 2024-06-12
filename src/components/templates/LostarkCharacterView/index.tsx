import { GameCharacterWrapper } from 'src/components/molecules';
import { LostarkCharacter } from 'src/components/molecules/LostarkCharacter';

export const LostarkCharacterView = () => {
  return (
    <GameCharacterWrapper gameTitle='로스트 아크'>
      <LostarkCharacter />
    </GameCharacterWrapper>
  );
};
