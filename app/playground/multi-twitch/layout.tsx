import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'multi-twitch',
  description: '트위치 다중 시청',
  openGraph: {
    images: 'https://baek-log-img.s3.ap-northeast-2.amazonaws.com/multi-og.png'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <div id='portal'></div>
    </>
  );
}
