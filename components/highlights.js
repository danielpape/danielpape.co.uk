import React, { useState } from "react";

export default function Highlights() {
  return (
    <div className="gridContainer vertical-padding">
      <div className={styles.header}>
        <h2 className={styles.largeText}>Career Highlights</h2>
      </div>
      <div className={styles.content}>
        <div>
          <h3>Next</h3>
          <p>UX Designer — Innovation Squad</p>
          <p>Since 2018</p>
          <p>
            Working with innovative technologies to help users try on make up
            with AR, find their perfect product with chatbots & hold remote
            video consultations{" "}
          </p>
        </div>
        <div>
          <h3>The Independent &amp; London Evening Standard</h3>
          <p>Product Designer</p>
          <p>2015-2018</p>
          <p>
            Leading the digital design team where I created the design system
            used on the Evening Standard homepage & The Independent Daily
            Edition app
          </p>
        </div>
      </div>
    </div>
  );
}
