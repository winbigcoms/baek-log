import { Channel_Info } from 'src/types';

interface MultiTwitchViewerProps {
  onSelectChannel: (channel_Info: Channel_Info) => void;
  onOffChannel: (id: string) => void;
  selectedList: Channel_Info[];
}

export const MultiTwitchViewer = (props: MultiTwitchViewerProps) => {
  const { onOffChannel, onSelectChannel, selectedList } = props;

  return <div></div>;
};
