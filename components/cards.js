import React, { useState } from "react";

export default function Cards() {
  return (
    <div className={styles.cardContainer}>
      <div className={`${styles.card} ${styles.card1}`}>
        <video className={styles.video} autoPlay>
          <source src="../videos/ESVideo.mp4" type="video/mp4" />
        </video>
        <h2 className={styles.title}>Evening Standard</h2>
      </div>
      <div className={`${styles.card} ${styles.card2}`}>
        <h2>Independent</h2>
      </div>
      <div className={`${styles.card} ${styles.card3}`}>
        <h2>Next</h2>
      </div>
      <div className={`${styles.card} ${styles.card4}`}>
        <h2>Eve Alarm</h2>
      </div>
      <div className={`${styles.card} ${styles.card5}`}>
        <h2>Medori</h2>
      </div>
    </div>
  );
}
