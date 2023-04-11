import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang='ko'>
        <Head>
          <meta name='keyword' content='개인 블로그' />
        </Head>
        <body id='body'>
          <Main />
          <div id='portal'></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}
