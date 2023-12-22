import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useModal } from 'src/Hooks';
import {
  MultiTwitchChenelList,
  MultiTwitchHeader,
  MultiTwitchLoginModal,
  MultiTwitchViewer
} from 'src/components/organisms';
import { Channel_Info } from 'src/types';
import { LocalStorageClient, get_user_channel_id_from_id } from 'src/utills';
import { SWRConfig } from 'swr';

export const MultiTwitchTmp = () => {
  const [selectedList, setSelectList] = useState<Channel_Info[]>([]);
  const [isLogin, setLogin] = useState(false);
  const [showLargeUserId, selectShowLargeUserId] = useState('');
  const router = useRouter();
  const access_token = LocalStorageClient.getItem('access_token');
  const userId = LocalStorageClient.getItem('userId');

  const { ModalComponent, modalState, switchModalState } = useModal({
    Contents: MultiTwitchLoginModal
  });

  const onSelectChannel = (channel_Info: Channel_Info) => {
    if (selectedList.length > 5) {
      return;
    }

    setSelectList(state =>
      state.find(channel => channel.user_id === channel_Info.user_id)
        ? state.filter(channel => channel.user_id !== channel_Info.user_id)
        : [...state, channel_Info]
    );
  };

  const onOffChannel = (user_id: string) => {
    setSelectList(state => state.filter(channelData => channelData.user_id !== user_id));
  };

  const onSelectShowLarge = (channel_Info: Channel_Info) => {
    selectShowLargeUserId(channel_Info.user_id);
  };

  const onCloseLargeMode = () => {
    selectShowLargeUserId('');
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
      <div style={{ display: 'flex', height: 'calc(100vh - 50px)' }}>
        {isLogin && (
          <SWRConfig>
            <MultiTwitchChenelList onSelectChannel={onSelectChannel} selectedList={selectedList} />
          </SWRConfig>
        )}
        <main style={{ padding: 10, backgroundColor: 'var(--real-black)' }}>
          <MultiTwitchViewer
            showLargeUserId={showLargeUserId}
            onSelectShowLarge={onSelectShowLarge}
            onCloseLargeMode={onCloseLargeMode}
            onOffChannel={onOffChannel}
            selectedList={selectedList}
          />
        </main>
      </div>
      {modalState && ModalComponent}
    </div>
  );
};
