import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useModal } from 'src/Hooks';
import {
  MultiTwitchChenelList,
  MultiTwitchHeader,
  MultiTwitchLoginModal
} from 'src/components/organisms';
import { Channel_Info } from 'src/types';
import { LocalStorageClient, get_user_channel_id_from_id } from 'src/utills';
import { SWRConfig } from 'swr';

export const MultiTwitchTmp = () => {
  const [selectedList, setSelectList] = useState<Channel_Info[]>([]);
  const [isLogin, setLogin] = useState(false);
  const router = useRouter();
  const access_token = LocalStorageClient.getItem('access_token');
  const userId = LocalStorageClient.getItem('userId');

  const { ModalComponent, modalState, switchModalState } = useModal({
    Contents: MultiTwitchLoginModal
  });

  const onSelectChannel = (channel_Info: Channel_Info) => {
    setSelectList(state => [...state, channel_Info]);
  };

  const onOffChannel = (id: string) => {
    setSelectList(state => state.filter(channelData => channelData.id !== id));
  };

  useEffect(() => {
    // 토큰과 아이디가 있으면 ok
    if (access_token && userId) {
      setLogin(true);
      return;
    }

    const path = router.asPath;
    // oauth ridirect 체크
    if (path.includes('#access_token')) {
      const get_query = path
        .split('#')[1]
        .split('&')
        .map(str => ({ [str.split('=')[0]]: str.split('=')[1] }));

      const access_token_obj = get_query.find(obj => obj['access_token']);
      const access_token = (access_token_obj || {}).access_token;

      if (access_token) {
        LocalStorageClient.setItem('access_token', access_token);
      }

      get_user_channel_id_from_id()
        .then(res => {
          console.log(res);
          if (!res.data) return;

          if (res.data.length === 0) {
            alert('잘못된 정보입니다.');
            return;
          }

          const { id, display_name } = res.data[0];

          LocalStorageClient.setItem('display_name', display_name);
          LocalStorageClient.setItem('channel_id', id);
        })
        .then(() => {
          setLogin(true);
        });
    } else {
      //아니면 로그인 모달
      switchModalState(true);
    }
  }, []);

  return (
    <div>
      <MultiTwitchHeader />
      <div>
        {isLogin && (
          <SWRConfig>
            <MultiTwitchChenelList onSelectChannel={onSelectChannel} />
          </SWRConfig>
        )}
        <main></main>
      </div>
      {modalState && ModalComponent}
    </div>
  );
};

// 접근 - 키 확인, 유저 아이디 확인 ? 있으면 채널 가져오기 : 없으면 모달띄워서 아이디받고 oauth띄우기
