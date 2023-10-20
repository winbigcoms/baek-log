'use client';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { MultiTwitchHeader } from 'src/components/organisms';
import { twitchOauthUrl } from 'src/const';
import { Chenel_Info } from 'src/types';
import { LocalStorageClient } from 'src/utills';

export const MultiTwitchTmp = () => {
  const [followList, setFollowList] = useState<Chenel_Info[]>([]);

  const router = useRouter();
  const access_token = LocalStorageClient.getItem('access_token');
  const useId = LocalStorageClient.getItem('useId');

  useEffect(() => {
    if (access_token) return;

    const path = router.asPath;
    if (path.includes('#access_token')) {
      const get_query = path
        .split('#')[1]
        .split('&')
        .map(str => ({ [str.split('=')[0]]: str.split('=')[1] }));

      LocalStorageClient.setItem(
        'access_token',
        get_query.find(obj => obj['access_token']).access_token
      );
    }
  }, []);

  return (
    <div>
      <MultiTwitchHeader />
      <div>
        <nav></nav>
        <main></main>
        <a href={twitchOauthUrl}>Connect with Twitch</a>
      </div>
    </div>
  );
};

// 접근 - 키 확인, 유저 아이디 확인 ? 있으면 채널 가져오기 : 없으면 모달띄워서 아이디받고 oauth띄우기
