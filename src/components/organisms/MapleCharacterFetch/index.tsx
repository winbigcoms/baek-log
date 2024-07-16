import { get_maple_info } from 'src/api/game';
import { MapleCharacter } from 'src/components/molecules/MapleCharacter';

export const MapleCharaterFetch = async () => {
  const mapleChar = await get_maple_info.get_character_fetch();

  return <MapleCharacter data={mapleChar} />;
};
