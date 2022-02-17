import { inject, observer } from 'mobx-react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
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
      <Html>
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
