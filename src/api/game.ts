import { LOA_CHARACTER } from 'src/types/apis/loa';
import { MAPLE_CHARACTER } from 'src/types/apis/maple';

const loa_nickname = '%EA%B7%A0%EC%9D%98%EB%B0%A9%ED%8C%A8';
const loa_api_URL = 'https://developer-lostark.game.onstove.com';

const maple_api_url = 'https://open.api.nexon.com/maplestory/v1';

const loaAPIInstanceFetch = <T>(url: string, method: string): Promise<T> =>
  fetch(`${loa_api_URL}${url}`, {
    method,
    headers: {
      Authorization: `bearer ${process.env.NEXT_PUBLIC_LOA_KEY}`
    },
    next: {}
  }).then(res => res.json());
const mapleAPIHeaders = new Headers();
mapleAPIHeaders.set('x-nxopen-api-key', process.env.NEXT_PUBLIC_MAP_KEY || '');
const mapleAPIInstanceFetch = <T>(url: string, method: string): Promise<T> =>
  fetch(`${maple_api_url}${url}`, {
    method,
    headers: mapleAPIHeaders,
    next: {}
  }).then(res => res.json());

export const get_loa_info = {
  get_character_fetch: () =>
    loaAPIInstanceFetch<LOA_CHARACTER>(
      `/armories/characters/${loa_nickname}?filters=profiles`,
      'GET'
    )
};

export const get_maple_info = {
  get_character_fetch: () =>
    mapleAPIInstanceFetch<MAPLE_CHARACTER>(
      `/character/basic?ocid=${process.env.NEXT_PUBLIC_MAP_OCID}`,
      'GET'
    )
};
