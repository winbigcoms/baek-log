'use client';
import { UIEvent, useState } from 'react';
import { Channel_Info } from 'src/types';
import { LocalStorageClient, get_Follow_Streamers_With_Img } from 'src/utills';
import styled from 'styled-components';
import useSWR from 'swr';

const MultiTwitchChenelListStyle = styled.nav`
  display: flex;

  background: var(--real-black);
  color: var(--real-white);

  flex-direction: column;
  height: calc(100vh - 50px);
  width: 200px;
  gap: 10px;
  border-right: 1px solid #ddd;
  transition: width 0.5s;

  &.slim {
    width: 80px;

    .item {
      img {
        margin-right: 10px;
      }
    }
  }

  .channel_list_header {
    display: flex;
    width: 100%;
    justify-content: space-between;

    padding: 5px 10px;
    border-bottom: 1px solid #ccc;

    h3 {
      font-size: 1rem;
    }
    span {
      cursor: pointer;
      line-height: 1;
    }
  }

  .channel_list {
    height: calc(100% - 1.5rem);
    overflow-y: overlay;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      background: transparent;
    }

    .item {
      padding: 5px 10px;
      cursor: pointer;
      display: flex;
      gap: 10px;

      align-items: center;

      img {
        width: 50px;
        height: 50px;
        border-radius: 50px;
        transition: all 0.5s;
        margin-bottom: 8px;
      }

      .user_info {
        width: 8vw;
        max-width: 120px;

        .title,
        .game,
        .count {
          font-size: 0.8rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          word-break: break-all;
        }
      }
    }
  }
`;
interface MultiTwitchChenelListProps {
  onSelectChannel: (channel_Info: Channel_Info) => void;
  selectedList: Channel_Info[];
}

export const MultiTwitchChenelList = (props: MultiTwitchChenelListProps) => {
  const { onSelectChannel, selectedList } = props;

  const [slimMode, setSlim] = useState(false);
  const channel_id = LocalStorageClient.getItem('channel_id');

  const { data: requestList } = useSWR(channel_id || null, get_Follow_Streamers_With_Img);
  let debounceTimer: NodeJS.Timeout | undefined;

  const onScroll = (e: UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    target.classList.remove('hide_scroll');

    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    debounceTimer = setTimeout(() => {
      target.classList.add('hide_scroll');
    }, 1000);
  };

  const onClickSlim = () => {
    setSlim(state => !state);
  };

  return (
    <MultiTwitchChenelListStyle className={slimMode ? 'slim' : ''}>
      <div className='channel_list_header'>
        <h3>채널</h3>
        <span onClick={onClickSlim}>{slimMode ? '>' : '<'}</span>
      </div>
      <div className='channel_list hide_scroll btn' onScroll={onScroll}>
        {requestList &&
          requestList.map(channel => (
            <div
              key={channel.id}
              className={`item ${
                selectedList.find(listItem => channel.user_id === listItem.user_id)
                  ? 'selected'
                  : 'unSelected'
              }`}
              onClick={() => onSelectChannel(channel)}
              title={channel.title}
            >
              {channel.profileImg && <img src={channel.profileImg} alt='' />}
              <div className='user_info'>
                <div className='streamer'>{channel.user_name}</div>
                <div className='title'>{channel.title}</div>
                <div className='game'>{channel.game_name}</div>
                <div className='count'>시청자:{channel.viewer_count}명</div>
              </div>
            </div>
          ))}
      </div>
    </MultiTwitchChenelListStyle>
  );
};
