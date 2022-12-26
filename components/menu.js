import styles from "../styles/Menu.module.css";
import React, { useState } from "react";

export default function Menu() {
  return (
    <header>
      <div className="leading VStack">
        <h1 className="wordmark"><span>Daniel Pape</span></h1>
        <h2 className="wordmark">Product Designer</h2>
      </div>
      <div>
      <a href="mailto:hello@bydanielpape.com" className="cta">Contact Me</a>
      </div>
    </header>
  );
}
