import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#ffffff" />
        <meta name="author" content="Xasanov Javohir" />
        <meta
          name="description"
          content="This is Full-Stack Portfolio by Javohir"
        />
        <link rel="icon" href="/dev.svg" />
        <link rel="apple-touch-icon" href="/dev.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
