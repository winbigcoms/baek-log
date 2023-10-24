import { useEffect, useLayoutEffect, useState } from 'react';
import { VIEWPORT_RATIO, get_streamURL } from 'src/const';
import { Channel_Info } from 'src/types';

import styled from 'styled-components';
// import { ReactTwitchEmbedVideo } from './ReactTwitchEmbedVideo';

interface MultiTwitchViewerProps {
  onOffChannel: (id: string) => void;
  selectedList: Channel_Info[];
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
    position: relative;
    width: fit-content;
    height: fit-content;

    .select_wrapper {
      background-color: #ccc;
      position: absolute;
      right: 0px;
      top: 0px;
      text-align: center;
    }
  }
`;

export const MultiTwitchViewer = (props: MultiTwitchViewerProps) => {
  const { onOffChannel, selectedList } = props;

  const [largeViewport, setLargeViewport] = useState('');
  const [containerSize, setContainerSize] = useState({
    width: 0,
    height: 0
  });

  const calcIframeSize = () => {
    const iframe_container = document.getElementById('iframe_container');
    const selectedListLength = selectedList.length;
    if (!iframe_container || selectedListLength === 0) return;

    const isInit = !containerSize.height || !containerSize.width;
    const { width, height } = isInit ? iframe_container.getClientRects()[0] : containerSize;

    if (isInit) {
      setContainerSize({
        width,
        height
      });
    }

    const availableWidth = width - 30;
    const availableHeight = height - 20;

    const ratio = VIEWPORT_RATIO[selectedListLength - 1];
    const iframes = iframe_container.getElementsByTagName('iframe');

    for (let iframeIdx = 0; iframeIdx < iframes.length; iframeIdx++) {
      iframes[iframeIdx].width = String(availableWidth / ratio[0]);
      iframes[iframeIdx].height = String(availableHeight / ratio[1]);
    }
  };

  useEffect(() => {
    calcIframeSize();
  }, [selectedList.length]);

  return (
    <MultiTwitchViewerStyle id='iframe_container'>
      {selectedList.map(channelInfo => (
        <div key={channelInfo.user_id} className='iframe_wrapper'>
          <iframe src={get_streamURL(channelInfo.user_login)} height={300} width={550} />
          <div className='select_wrapper'>
            <div className='btn'>크게보기</div>
            <div className='btn' onClick={() => onOffChannel(channelInfo.user_id)}>
              닫기
            </div>
          </div>
        </div>
      ))}
    </MultiTwitchViewerStyle>
  );
};
