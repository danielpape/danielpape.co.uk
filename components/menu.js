import styles from "../styles/Menu.module.css";
import React, { useState } from "react";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <div className="leading VStack">
        <a href="/">
          <h1 className={styles.wordmark}>
            <span>Daniel Pape</span>
          </h1>
          <h2 className={styles.wordmark}>Product Designer</h2>
        </a>
      </div>
      <div className={styles.menuItems}>
        <a href="/work" className="">
          My Work
        </a>
        <a href="mailto:hello@bydanielpape.com" className={styles.CTA}>
          Contact Me
        </a>
      </div>
    </div>
  );
}
