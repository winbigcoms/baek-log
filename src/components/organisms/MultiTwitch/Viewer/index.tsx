import { useEffect, useState } from 'react';
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
  background-color: #222;
  padding: 10px;
  gap: 10px;

  .iframe_wrapper {
    position: relative;

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

  useEffect(() => {
    const iframe_container = document.getElementById('iframe_container');
    if (!iframe_container) return;
    const { width, height } = iframe_container.getClientRects()[0];
    console.log(width, height);
    const availableWidth = width - 40;
    const availableHeight = height - 40;

    const ratio = VIEWPORT_RATIO[selectedList.length - 1];
    const iframes = iframe_container.getElementsByTagName('iframe');
    [...iframes].forEach((iframe: HTMLIFrameElement) => {
      console.log(availableWidth, availableHeight, ratio);
      iframe.width = availableWidth / ratio[0];
      iframe.height = availableHeight / ratio[1];
    });
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
