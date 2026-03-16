import Script from "next/script";

import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "../styles/globals.css";

const GA_TRACKING_ID = "UA-32006853-1";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {process.env.NODE_ENV === "production" ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            strategy="lazyOnload"
          />
          <Script id="google-analytics" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      ) : null}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
