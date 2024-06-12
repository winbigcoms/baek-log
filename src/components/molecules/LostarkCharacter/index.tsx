import { get_loa_info } from 'src/api/game';
import { LOACharacter } from 'src/components/organisms/LOACharacter';

export const LostarkCharacter = async () => {
  const LOAChar = await get_loa_info.get_character_fetch();

  return <LOACharacter data={LOAChar} />;
};
