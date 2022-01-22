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
      <h3 className={styles.tag}>Currently</h3>
        <p>
          Currently I work in the Innovation Team at <strong>Next</strong>, where I design and
          prototype the future of eCommerce.
        </p>
        <h3 className={styles.tag}>Previously</h3>
        <p>
          Previously I led the design team at <strong>The Independent</strong> &amp; <strong>London
          Evening Standard</strong> where I built a small but mighty team of UX &amp;
          Product Designers.
        </p>
      </div>

      <div className={styles.para2}>
      <h3 className={styles.tag}>What I do</h3>
        <p>
        My focus is on maintaining <strong>design systems</strong> to build well structured user
        journeys and producing <strong>prototypes</strong> to test and gather feedback.
        </p>
        <h3 className={styles.tag}>Side Projects</h3>

        <p>
        In my spare time I <strong>code</strong> iPhone and Android apps, a few of which have been <strong>featured</strong> in the &quot;What&apos;s Hot&quot; section on the <strong>App Store</strong> by Apple.
        </p>
      </div>
    </div>
  );
}
