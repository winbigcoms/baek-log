'ues client';
import { LocalStorageClient, get_Follow_channels_List } from 'src/utills';
import styled from 'styled-components';
import useSWR from 'swr';

const MultiTwitchChenelListStyle = styled.nav`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  width: 10vw;
  overflow-y: scroll;
  gap: 10px;

  h3 {
    padding-left: 5px;
    padding-top: 5px;
    border-bottom: 1px solid #ccc;
  }

  .item {
    padding: 5px 10px;
    cursor: pointer;
    .title,
    .game,
    .count {
      text-indent: 1rem;
      font-size: 0.9rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: break-all;
    }
  }
`;

export const MultiTwitchChenelList = () => {
  const channel_id = LocalStorageClient.getItem('channel_id');

  const { data: requestList } = useSWR(channel_id || null, get_Follow_channels_List);

  return (
    <MultiTwitchChenelListStyle>
      <h3>채널</h3>
      {requestList &&
        requestList.data.map(channel => (
          <div key={channel.id} className='item'>
            <div className='streamer'>{channel.user_name}</div>
            <div className='title'>{channel.title}</div>
            <div className='game'>{channel.game_name}</div>
            <div className='count'>시청자:{channel.viewer_count}명</div>
          </div>
        ))}
    </MultiTwitchChenelListStyle>
  );
};
