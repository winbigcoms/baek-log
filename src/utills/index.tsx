import axios from 'axios';
import { krChild, krChildUnder } from 'src/const';
import { Get_Follow_Chenels_List } from 'src/types';

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

export const get_Follow_Chenels_List = async (useId: string) => {
  return await axios
    .get<Get_Follow_Chenels_List>(
      `https://api.twitch.tv/helix/channels/followed?user_id=${useId}`,
      {
        headers: {
          Authorization: LocalStorageClient.getItem('access_token'),
          'Client-Id': LocalStorageClient.getItem('userId')
        }
      }
    )
    .then(res => res.data)
    .catch(err => {
      console.log(err);
      return {
        total: 0,
        data: []
      } as Get_Follow_Chenels_List;
    });
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
