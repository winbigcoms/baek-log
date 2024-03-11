import { Metadata } from 'next';
import RootStyleRegistry from 'src/lib/registar';
import 'src/styles/globals.css';

export const metadata: Metadata = {
  title: 'BSL',
  description: '백승일 개인 작업실',
  openGraph: {
    images: 'https://baek-log-img.s3.ap-northeast-2.amazonaws.com/og.png'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  );
}
