import React from "react";
import Head from "next/head";

import Header from "../components/header";
import Intro from "../components/intro";
import Grid from "../components/grid";
import AboutMe from "../components/aboutme";
import Experience from "../components/experience";
import Footer from "../components/Footer";

import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Daniel Pape - Product Designer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Homepage of Daniel Pape, a digital product designer from the UK."
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-32006853-1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-32006853-1', { page_path: window.location.pathname });
            `,
          }}
        />
      </Head>
      <main className="dark:bg-slate-800">
        <Header />
        <Intro />
        <Grid />
        <AboutMe />
        <Experience />
        <Footer />
      </main>
    </>
  );
}
