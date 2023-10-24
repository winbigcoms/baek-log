import axios from 'axios';
import { krChild, krChildUnder } from 'src/const';
import {
  Channel_Info,
  Channel_List_info,
  Get_Follow_Channels_List,
  Streamer_Info,
  userInfo
} from 'src/types';

export const checkHomeHiddenCommand = (command: string[]) => {
  const targetCommand = ['ArrowUp', 'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowDown'];

  for (let i = 0; i < command.length; i++) {
    if (command[i] !== targetCommand[i]) {
      return false;
    }
    if (i === targetCommand.length - 1) {
      return true;
    }
  }
};

export const checkCategoryHiddenCommand = (command: string[]) => {
  const targetCommand = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'KeyA',
    'KeyB'
  ];

  for (let i = 0; i < command.length; i++) {
    if (command[i] !== targetCommand[i]) {
      return false;
    }
    if (i === targetCommand.length - 1) {
      return true;
    }
  }
};

export const imgUploader = async (file: File, imgCategory = 'utill') => {
  const filename = encodeURIComponent(file.name);
  const paramCategory = encodeURIComponent(imgCategory);

  const { url } = await fetch(`/api/imgupload?filename=${filename}&category=${paramCategory}`).then(
    res => res.json()
  );

  await fetch(`${url}`, {
    method: 'PUT',
    headers: {
      'Content-Type': file.type
    },
    body: file
  });

  const imgUrl = url.split('?')[0];

  return imgUrl;
};

export const stringSplit = (target: string) => {
  const chars = [];
  const cnt = target.length;
  let cCode;
  let jong;
  let jung;
  let cho;

  for (let i = 0; i < cnt; i++) {
    cCode = target.charCodeAt(i);
    if (cCode == 32) {
      chars.push(' ');
      continue;
    }

    if (cCode < 0xac00 || cCode > 0xd7a3) {
      chars.push(target.charAt(i));
      continue;
    }

    cCode = target.charCodeAt(i) - 0xac00;

    jong = cCode % 28;

    jung = ((cCode - jong) / 28) % 21;

    cho = ((cCode - jong) / 28 - jung) / 21;
    chars.push(krChild[cho]);
    chars.push(String.fromCharCode(44032 + cho * 588 + jung * 28));
    if (krChildUnder[jong] !== '') {
      chars.push(String.fromCharCode(44032 + cho * 588 + jung * 28 + jong));
    }
  }

  return chars;
};
export const get_user_channel_id_from_id = () => {
  const userId = LocalStorageClient.getItem('userId') || '';
  return axios
    .get<{ data: userInfo[] }>(`https://api.twitch.tv/helix/users?login=${userId}`, {
      headers: {
        Authorization: `Bearer ${LocalStorageClient.getItem('access_token')}` || '',
        'Client-Id': process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID || ''
      }
    })
    .then(res => res.data);
};

export const get_Follow_channels_List = () => {
  const channel_id = LocalStorageClient.getItem('channel_id') || '';
  return axios
    .get<{ data: Channel_Info[] }>(
      `https://api.twitch.tv/helix/streams/followed?user_id=${channel_id}&first=100`,
      {
        headers: {
          Authorization: `Bearer ${LocalStorageClient.getItem('access_token')}` || '',
          'Client-Id': process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID || ''
        }
      }
    )
    .then(res => res.data)
    .catch(err => {
      console.log(err);
      return {
        data: [] as Channel_Info[]
      };
    });
};

export const get_Streamer_Profile_img = (userLoginList: string[]) => {
  const query_params = userLoginList.map(str => 'login=' + str).join('&');

  return axios
    .get<{ data: Streamer_Info[] }>(`https://api.twitch.tv/helix/users?${query_params}`, {
      headers: {
        Authorization: `Bearer ${LocalStorageClient.getItem('access_token')}` || '',
        'Client-Id': process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID || ''
      }
    })
    .then(res => res.data)
    .catch(err => {
      console.log(err);

      return {
        data: [] as Streamer_Info[]
      };
    });
};

export const get_Follow_Streamers_With_Img = async () => {
  const follow_list = await get_Follow_channels_List();
  console.log(follow_list.data);
  const streamer_ids = follow_list.data.map(streamer => streamer.user_login);

  const streamer_imgs = (await get_Streamer_Profile_img(streamer_ids)).data;
  const Follow_Streamers_With_Img = follow_list.data.map(streamer => ({
    ...streamer,
    profileImg: streamer_imgs.find(streamerInfo => streamerInfo.id === streamer.user_id)
      ?.profile_image_url
  }));

  return Follow_Streamers_With_Img as Channel_List_info[];
};

export class LocalStorageClient {
  constructor() {}

  static getItem(key: string) {
    return typeof window !== 'undefined' ? localStorage.getItem(key) : null;
  }

  static setItem(key: string, value: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value);
    }
    return;
  }
}
