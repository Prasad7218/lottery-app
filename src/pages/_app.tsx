import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      />
      <Script src="https://mozilla.github.io/pdf.js/build/pdf.js" />
      <Script src="https://unpkg.com/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" />

      <Script src="https://static.phonepe.com/phonepe-sdk/checkout.js" />

      <Component {...pageProps} />
    </>
  );
}
