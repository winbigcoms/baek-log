import Image from 'next/image';
import { get_loa_info } from 'src/api/game';

export const GameChar = async () => {
  const loa_character = await get_loa_info.get_character();

  return (
    <div>
      <div>{loa_character.ArmoryProfile.CharacterName}</div>
      <Image
        alt='로아 캐릭터'
        src={loa_character.ArmoryProfile.CharacterImage}
        width={102}
        height={108}
      />
    </div>
  );
};
