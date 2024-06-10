import axios from 'axios';
import { LOA_CHARACTER } from 'src/types/apis/loa';

const loa_nickname = '%EA%B7%A0%EC%9D%98%EB%B0%A9%ED%8C%A8';
const api_URL = 'https://developer-lostark.game.onstove.com';

const loaAPIInstance = axios.create({
  baseURL: api_URL,
  headers: {
    Authorization: `bearer ${process.env.NEXT_PUBLIC_LOA_KEY}`
  }
});

export const get_loa_info = {
  get_character: () =>
    loaAPIInstance.get<LOA_CHARACTER>(`/armories/characters/${loa_nickname}`).then(res => res.data)
};
