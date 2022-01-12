import Head from "next/head";
import Menu from "../components/menu";
import Intro from "../components/intro";
import Splash from "../components/splash";
import AboutMe from "../components/aboutme";
import Footer from "../components/footer";
import Contact from "../components/contact";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";

export default function Home() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Daniel Pape, Product Designer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Homepage of Daniel Pape, a digital product designer from the UK." />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>

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
        <Menu />
        <Intro />
        <Splash />
        <AboutMe />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
