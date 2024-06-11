import Image from 'next/image';
import { get_loa_info } from 'src/api/game';

export const LostarkCharacter = async () => {
  const { ArmoryProfile } = await get_loa_info.get_character_fetch();

  return (
    <div>
      <div>{ArmoryProfile.CharacterName}</div>
      <div>{ArmoryProfile.ItemMaxLevel}</div>

      <Image width={102} height={120} src={ArmoryProfile.CharacterImage} alt='균의방패' />
    </div>
  );
};
