import { GameCharacterWrapper } from 'src/components/molecules/GameCharacterWrapper';
import { LostarkCharacterFetch } from 'src/components/organisms/LostarkCharacterFetch';

export const LostarkCharacterView = () => {
  return (
    <GameCharacterWrapper gameTitle='로스트 아크'>
      <LostarkCharacterFetch />
    </GameCharacterWrapper>
  );
};
