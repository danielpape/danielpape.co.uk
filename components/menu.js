import styles from "../styles/Menu.module.css";
import React, { useState } from "react";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <div className="leading VStack">
        <h1 className={styles.wordmark}><span>Daniel Pape</span></h1>
        <h2 className={styles.wordmark}>Product Designer</h2>
      </div>
      <div>
      <a href="mailto:hello@bydanielpape.com" className={styles.CTA}>Contact Me</a>
      </div>
    </div>
  );
}
