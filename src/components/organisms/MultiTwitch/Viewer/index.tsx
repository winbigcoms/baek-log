'use client';
import { useEffect, useRef, useState } from 'react';
import {
  FIVE_VIEWPORT_RATIO,
  SELECT_MAIN_VIEWPORT_RATIO,
  VIEWPORT_RATIO,
  get_streamURL
} from 'src/const';
import { Channel_Info } from 'src/types';

import styled from 'styled-components';

interface MultiTwitchViewerProps {
  onOffChannel: (id: string) => void;
  showLargeUserId: string;
  selectedList: Channel_Info[];
  onSelectShowLarge: (channel_Info: Channel_Info) => void;
  onCloseLargeMode: () => void;
}

const MultiTwitchViewerStyle = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #222;
  gap: 10px;

  .iframe_wrapper {
    order: 2;
    position: relative;
    width: fit-content;
    height: fit-content;

    &.large {
      order: 1;
    }

    .select_wrapper {
      display: none;
      background-color: #ccc;
      position: absolute;
      right: 0px;
      top: 0px;
      text-align: center;

      .btn {
        cursor: pointer;
      }
    }
    &:hover {
      .select_wrapper {
        display: block;
      }
    }
  }

  .empty_chennel {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ccc;
    font-size: 1.5rem;
  }
`;

export const MultiTwitchViewer = (props: MultiTwitchViewerProps) => {
  const { onOffChannel, selectedList, onCloseLargeMode, onSelectShowLarge, showLargeUserId } =
    props;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerSize, setContainerSize] = useState({
    width: 0,
    height: 0
  });

  const calcIframeSize = () => {
    const { width, height } = containerSize;
    const iframe_container = document.getElementById('iframe_container');
    if (!iframe_container) return;

    const iframe_containerRects = iframe_container.getClientRects()[0];

    const availableWidth = width || iframe_containerRects.width - 30;
    const availableHeight = height || iframe_containerRects.height - 20;

    if (width === 0 || height === 0) {
      setContainerSize({
        width: availableWidth,
        height: availableHeight
      });
    }

    const iframes = iframe_container.getElementsByTagName('iframe');
    if (iframes.length === 0) return;

    if (showLargeUserId) {
      const largeTargetIdx = selectedList.findIndex(channel => channel.user_id === showLargeUserId);

      for (let iframeIdx = 0; iframeIdx < iframes.length; iframeIdx++) {
        const ratio =
          largeTargetIdx === iframeIdx
            ? SELECT_MAIN_VIEWPORT_RATIO[0]
            : SELECT_MAIN_VIEWPORT_RATIO[1];
        iframes[iframeIdx].width = String(width / ratio[0]);
        iframes[iframeIdx].height = String(height / ratio[1]);
      }

      return;
    }

    if (iframes.length === 5) {
      for (let iframeIdx = 0; iframeIdx < iframes.length; iframeIdx++) {
        iframes[iframeIdx].width = String(availableWidth / FIVE_VIEWPORT_RATIO[iframeIdx][0]);
        iframes[iframeIdx].height = String(availableHeight / FIVE_VIEWPORT_RATIO[iframeIdx][1]);
      }

      return;
    }

    const ratio = VIEWPORT_RATIO[iframes.length - 1];

    for (let iframeIdx = 0; iframeIdx < iframes.length; iframeIdx++) {
      iframes[iframeIdx].width = String(width / ratio[0]);
      iframes[iframeIdx].height = String(height / ratio[1]);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerObserver = new ResizeObserver(entries => {
      const targetContainer = entries[0];
      const { width, height } = targetContainer.contentRect;

      const availableWidth = width - 30;
      const availableHeight = height - 20;

      setContainerSize({
        width: availableWidth,
        height: availableHeight
      });
    });
    containerObserver.observe(container);

    return () => {
      containerObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    calcIframeSize();
  }, [containerSize, selectedList.length, showLargeUserId]);

  return (
    <MultiTwitchViewerStyle id='iframe_container' ref={containerRef}>
      {selectedList.length > 0 ? (
        selectedList.map(channelInfo => (
          <div
            key={channelInfo.user_id}
            className={`iframe_wrapper ${channelInfo.user_id === showLargeUserId ? 'large' : ''}`}
          >
            <iframe src={get_streamURL(channelInfo.user_login)} />
            <div className='select_wrapper'>
              <div
                className='btn'
                onClick={() =>
                  showLargeUserId === channelInfo.user_id
                    ? onCloseLargeMode()
                    : onSelectShowLarge(channelInfo)
                }
              >
                {showLargeUserId === channelInfo.user_id ? '축소하기' : '확대하기'}
              </div>
              <div className='btn' onClick={() => onOffChannel(channelInfo.user_id)}>
                닫기
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className='empty_chennel'>채널을 클릭하여 시청하세요</div>
      )}
    </MultiTwitchViewerStyle>
  );
};
