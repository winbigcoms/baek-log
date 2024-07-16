import { GameCharacterWrapper } from 'src/components/molecules/GameCharacterWrapper';
import { MapleCharaterFetch } from 'src/components/organisms/MapleCharacterFetch';

export const MapleCharacterView = () => {
  return (
    <GameCharacterWrapper gameTitle='메이플스토리'>
      <MapleCharaterFetch />
    </GameCharacterWrapper>
  );
};
