import styles from "../styles/Footer.module.css";
import React, { useState } from "react";

export default function Footer() {
  return (
    <div className="gridContainer small-vertical-padding">
      <div className={styles.leftColumn}>
        <p>Designed &amp; coded by Daniel Pape </p>
        <p>in a green part of England</p>
      </div>
      <div className={styles.rightColumn}>
        <p>
          Email:{" "}
          <a href="mailto:hello@bydanielpape.com">hello@bydanielpape.com</a>
        </p>
        <p>
          Twitter:{" "}
          <a href="https://www.twitter.com/bydanielpape">/bydanielpape</a>
        </p>
        <p>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/bydanielpape">/bydanielpape</a>
        </p>
      </div>
    </div>
  );
}
