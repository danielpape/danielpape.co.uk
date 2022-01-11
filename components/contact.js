import styles from "../styles/Contact.module.css";
import Image from "next/image";

import React, { useState } from "react";

export default function Contact() {
  return (
    <div className="gridContainer callout small-vertical-padding">
      <div className={styles.header}>
        <h2 className={styles.largeText}>
          If you want to work together or just say hi, get in touch
        </h2>
        <button href="mailto:hello@bydanielpape.com" className={styles.CTA}>
          Send Dan an Email
        </button>
      </div>
      <div className={styles.avatar}>
        <Image
          src="/images/avatar.png"
          width="165"
          height="172"
          alt="Evening Standard website on device"
          className={styles.splashImageSmallRadius}
        />
      </div>
    </div>
  );
}
