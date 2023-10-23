import { useState } from 'react';
import { get_streamURL } from 'src/const';
import { Channel_Info } from 'src/types';
import styled from 'styled-components';

interface MultiTwitchViewerProps {
  onSelectChannel: (channel_Info: Channel_Info) => void;
  onOffChannel: (id: string) => void;
  selectedList: Channel_Info[];
}

const MultiTwitchViewerStyle = styled.div`
  display: flex;
`;

export const MultiTwitchViewer = (props: MultiTwitchViewerProps) => {
  const { onOffChannel, onSelectChannel, selectedList } = props;

  const [largeViewport, setLargeViewport] = useState('');

  return (
    <MultiTwitchViewerStyle>
      {selectedList.map(channelInfo => (
        <iframe src={get_streamURL(channelInfo.user_id)} key={channelInfo.user_id} />
      ))}
    </MultiTwitchViewerStyle>
  );
};
