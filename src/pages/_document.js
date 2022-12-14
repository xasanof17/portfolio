import { Html, Head, Main, NextScript } from 'next/document';
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#ffffff" />
        <meta name="author" content="Xasanov Javohir" />
        <meta name="description" content="Portfolio | Javokhir" />
        <link rel="icon" href="/dev.png" />
        <link rel="apple-touch-icon" href="/dev.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
