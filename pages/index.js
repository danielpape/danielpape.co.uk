import React from "react";
import Head from "next/head";

import Navigation from "../components/sections/Navigation";
import Splash from "../components/sections/Splash";
import Grid from "../components/sections/Grid";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Footer from "../components/sections/Footer";

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
      </Head>
      <main>
        <Navigation />
        <Splash />
        <Grid />
        <About />
        <Experience />
        <Footer />
      </main>
    </>
  );
}
