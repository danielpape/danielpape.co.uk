import styles from "../styles/Contact.module.css";
import Image from "next/image";

import avatar from "../public/images/avatar.png"

import React, { useState } from "react";
import NextImage from "next/image";

// opt-out of image optimization, no-op
const customLoader = ({ src }) => {
  return src
}

export default function Contact() {
  return (
    <div className="gridContainer callout small-vertical-padding">
      <div className={styles.header}>
        <h2 className={styles.largeText}>
          If you want to work together or just say hi, get in touch
        </h2>
        <a href="mailto:hello@bydanielpape.com" className={styles.CTA}>
          Send Dan an Email
        </a>
      </div>
      <div className={styles.avatar}>
        <NextImage
        loader={customLoader}
          src={avatar}
          width="165"
          height="172"
          alt="A headshot of Daniel Pape"
          className={styles.splashImageSmallRadius}
        />
      </div>
    </div>
  );
}
