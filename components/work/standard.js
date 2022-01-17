import styles from "/styles/work/Standard.module.css";
import React, { useState } from "react";

export default function Standard() {
  return (
    <div className="gridContainer vertical-padding">
      <div className={styles.header}>
        <h2 className={styles.largeText}>
        Evening Standard is a London-based newspaper which reaches a total of 18 million readers a month across desktop, mobile &amp; native apps.         </h2>
      </div>
      <div className={styles.para1}>
        <p>
        In mid 2017 I was the lead designer on a major redesign & replatform of the Evening Standard homepage. My role spanned from user research and requirement gathering, to wireframing and gathering feedback, right through to pixel-perfect interactive mockups. The solution was a library of adaptive components that can be utilised to create flexible, coherant page layouts. The library of components covers editorial, commericial and user-acquisition to address the business needs of a modern news media homepage.        </p>
        <p>
        I spent 3 weeks conducting research with members of the editorial team to build the foundations for how we would define success of the design system. From those interviews I identified 3 key areas that would improve user experience: 1. a cohesive design system that could be used across a wide range of subject matters 2. create a collection of responsive components that can be reused across devices & screen sizes 3. Ensure commercial placements work with the content of the page, rather than be obtrusive and inelegant.        </p>
      </div>
      <div className={styles.para2}>
        <p>
        I designed a library of components that can be curated by editors to build up the structure of the page. The components are designed to have varying information density so that the page rhythm can be tailored to be harmonious for the reader. The most important articles are given "hero" status which elevates their visual hierarchy: adding a colour swatch and increasing the font size. This is to give the user a real sense of navigating through the page rather than just being presented a list of articles. The components are based on a 12 column grid, although the bounds of the columns are strategically broken in order to add emphasis to certain elements and to add depth.        </p>
        <p>
        Onboarding new team members and contractors is a key part of working in such a reactive team. To aid this I compiled a full style guide incorporating typography, grid and palette in pdf format for the design system, as well as created a library for the Sketch Design app which allows all components to be added to artboards without requiring any previous experience with the system.                </p>
        <p>6 months following the launch of the new design style the website outperformed all major UK digital news sites with a year-on-year growth of 28%, as well as receiving the Website of the Year award at the 2019 Drum Online Media Awards</p>

      </div>
    </div>
  );
}