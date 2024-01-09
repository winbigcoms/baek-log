import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang='ko'>
        <Head>
          <meta name='keyword' content='개인 블로그' />
          <meta property='og:locale' content='ko_KR' />
          <meta name='robots' content='index,follow' />
          <meta property='og:url' content='https://www.white-win.dev/' />
          <meta property='og:type' content='website' />
          <meta property='og:description' content='안녕하세요. 백승일입니다.' />
          <meta
            property='og:image'
            content='https://baek-log-img.s3.ap-northeast-2.amazonaws.com/og.png'
          />
          <meta property='og:image:type' content='image/jpg' />
          <meta property='twitter:domain' content='https://www.white-win.dev' />
          <meta property='twitter:url' content='https://www.white-win.dev/' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta
            name='twitter:image'
            content='https://baek-log-img.s3.ap-northeast-2.amazonaws.com/og.png'
          />
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
