import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

import { twitchOauthUrl } from 'src/const';
import { LocalStorageClient } from 'src/utills';
import { useRouter } from 'next/router';

const MultiTwitchLoginModalStyle = styled.div``;

export const MultiTwitchLoginModal = () => {
  const [userId, setUserId] = useState('');
  const router = useRouter();

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const onClickLogin = () => {
    LocalStorageClient.setItem('userId', userId);
    router.push(twitchOauthUrl);
  };

  return (
    <MultiTwitchLoginModalStyle>
      <label>
        본인 트위치 아이디:
        <input type='text' value={userId} onChange={onChangeUserId} />
      </label>
      <div onClick={onClickLogin}>로그인 하기</div>
      트위치 로그인이 필요한 서비스입니다.
    </MultiTwitchLoginModalStyle>
  );
};
