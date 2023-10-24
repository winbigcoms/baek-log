import dynamic from 'next/dynamic';

export const ReactTwitchEmbedVideo = dynamic(() => import('react-twitch-embed-video'), {
  ssr: false
});
