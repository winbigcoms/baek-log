import { LostarkCharacterView } from 'src/components/templates/LostarkCharacterView';
import { MapleCharacterView } from 'src/components/templates/MapleCharacterView';

const GamePage = () => {
  return (
    <div className='dark'>
      <h1>주인장의 게임 캐릭터</h1>
      <div
        style={{
          display: 'flex'
        }}
      >
        <LostarkCharacterView />
        <MapleCharacterView />
      </div>
    </div>
  );
};

export default GamePage;
