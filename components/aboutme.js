import styles from "../styles/AboutMe.module.css";
import React, { useState } from "react";

export default function AboutMe() {
  return (
    <div className="gridContainer vertical-padding">
      <div className={styles.header}>
        <h2 className={styles.largeText}>
          I design and build{" "}
          <span style={{ fontWeight: "bold" }}>User Experiences</span> with a
          focus on <em>design systems</em>, <em>prototyping</em> &amp; improving{" "}
          <em>accessibility</em>.{" "}
        </h2>
      </div>
      <div className={styles.para1}>
        <p>
          Previously I led the design team at The Independent &amp; London
          Evening Standard where I built a small but mighty team of UX &amp;
          Product Designers.
        </p>
        <p>
          Currently I work in the Innovation Team at Next, where I design and
          prototype the future of eCommerce.
        </p>
      </div>
      <div className={styles.para2}>
        <p>
        My focus is on maintaining design systems to build well structured user
        journeys and producing prototypes to test and gather feedback.
        </p>
        <p>
        In my spare time I code iPhone and Android apps, a few of which heave been featured in the &quot;What&apos;s Hot&quot; section on the App Store by Apple.
        </p>
      </div>
    </div>
  );
}
