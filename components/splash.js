import styles from "../styles/Splash.module.css";
import Image from "next/image";
import React, { useState } from "react";


import MedoriAmbient from "../public/images/MedoriAmbient.png"
import EMOMicon from "../public/images/EMOMicon.png"
import ESAmbient from "../public/images/ESAmbient.png"
import eveAppstore from "../public/images/eveAppstore.png"
import EveOnDevice from "../public/images/EveOnDevice.png"
import independentAmbient from "../public/images/independentAmbient.png"
import independentIcon from "../public/images/independentIcon.png"
import NOnDevice from "../public/images/NOnDevice.png"








export default function Splash() {
  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  const [isHovering4, setIsHovering4] = useState(false);
  const [isHovering5, setIsHovering5] = useState(false);
  const [isHovering6, setIsHovering6] = useState(false);
  const [isHovering7, setIsHovering7] = useState(false);


  return (
    <div className={styles.splashContainer}>
      <div
        className={styles.item1}
        onMouseEnter={() => setIsHovering1(true)}
        onMouseLeave={() => setIsHovering1(false)}
      >
        <Image
          src={NOnDevice}
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDEiIGNsYXNzPSJpbWctZmx1aWQgcm91bmRlZCBteC1hdXRvIGQtYmxvY2siIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPgogICAgICAgICAgICAgICAgICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2NjY2MiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIyNnB4IiBmaWxsPSIjZmZmZmZmIj4xeDE8L3RleHQ+ICAgCiAgICAgICAgICAgICAgICA8L3N2Zz4KICAgICAgICAgICAgICAgIDwhLS08YSBkb3dubG9hZD0iRklMRU5BTUUucG5nIiBocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsYXNkYXNkLi4uIj5Eb3dubG9hZDwvYT4tLT4="
          placeholder="blur"
          alt="Next Store Finder Chatbot on an iPhone Device"
          className={styles.splashImage}
        />
        <div
          className={styles.itemInfo}
          style={
            isHovering1
              ? { opacity: 1 }
              : { opacity: 0, transform: "translateY(-8px)" }
          }
        >
          <h2 className={styles.itemTitle}>Next</h2>
        </div>
      </div>
      <div
        className={styles.item5}
        onMouseEnter={() => setIsHovering5(true)}
        onMouseLeave={() => setIsHovering5(false)}
      >
        <Image
          src={MedoriAmbient}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDEiIGNsYXNzPSJpbWctZmx1aWQgcm91bmRlZCBteC1hdXRvIGQtYmxvY2siIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPgogICAgICAgICAgICAgICAgICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2NjY2MiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIyNnB4IiBmaWxsPSIjZmZmZmZmIj4xeDE8L3RleHQ+ICAgCiAgICAgICAgICAgICAgICA8L3N2Zz4KICAgICAgICAgICAgICAgIDwhLS08YSBkb3dubG9hZD0iRklMRU5BTUUucG5nIiBocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsYXNkYXNkLi4uIj5Eb3dubG9hZDwvYT4tLT4="
          alt="A medication reminder app with timers running on an iPhone"
          className={styles.splashImageMediumRadius}
        />
        <div
          className={styles.itemInfo}
          style={
            isHovering5
              ? { opacity: 1 }
              : { opacity: 0, transform: "translateY(-8px)" }
          }
        >
          <h2 className={styles.itemTitle}>Medori</h2>
        </div>
      </div>
      <div
        className={styles.item2}
        onMouseEnter={() => setIsHovering2(true)}
        onMouseLeave={() => setIsHovering2(false)}
      >
        <Image
          src={ESAmbient}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDEiIGNsYXNzPSJpbWctZmx1aWQgcm91bmRlZCBteC1hdXRvIGQtYmxvY2siIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPgogICAgICAgICAgICAgICAgICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2NjY2MiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIyNnB4IiBmaWxsPSIjZmZmZmZmIj4xeDE8L3RleHQ+ICAgCiAgICAgICAgICAgICAgICA8L3N2Zz4KICAgICAgICAgICAgICAgIDwhLS08YSBkb3dubG9hZD0iRklMRU5BTUUucG5nIiBocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsYXNkYXNkLi4uIj5Eb3dubG9hZDwvYT4tLT4="
          alt="The London Evening Standard website on an iPhone"
          className={styles.splashImage}
        />
        <div
          className={styles.itemInfo}
          style={
            isHovering2
              ? { opacity: 1 }
              : { opacity: 0, transform: "translateY(-8px)" }
          }
        >
          <h2 className={styles.itemTitle}>London Evening Standard</h2>
        </div>
      </div>
      <div
        className={styles.item3}
        onMouseEnter={() => setIsHovering3(true)}
        onMouseLeave={() => setIsHovering3(false)}
      >
        <Image
          src={EMOMicon}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDEiIGNsYXNzPSJpbWctZmx1aWQgcm91bmRlZCBteC1hdXRvIGQtYmxvY2siIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPgogICAgICAgICAgICAgICAgICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2NjY2MiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIyNnB4IiBmaWxsPSIjZmZmZmZmIj4xeDE8L3RleHQ+ICAgCiAgICAgICAgICAgICAgICA8L3N2Zz4KICAgICAgICAgICAgICAgIDwhLS08YSBkb3dubG9hZD0iRklMRU5BTUUucG5nIiBocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsYXNkYXNkLi4uIj5Eb3dubG9hZDwvYT4tLT4="
          alt="The icon for Simple Timer App: A green circle showing progress"
        />
        <div
          className={styles.itemInfo}
          style={
            isHovering3
              ? { opacity: 1 }
              : { opacity: 0, transform: "translateY(-8px)" }
          }
        >
          <h2 className={styles.itemTitle}>Simple Timer Android App</h2>
        </div>
      </div>
      <div
        className={styles.item4}
        onMouseEnter={() => setIsHovering4(true)}
        onMouseLeave={() => setIsHovering4(false)}
      >
        <Image
          src={EveOnDevice}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDEiIGNsYXNzPSJpbWctZmx1aWQgcm91bmRlZCBteC1hdXRvIGQtYmxvY2siIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPgogICAgICAgICAgICAgICAgICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2NjY2MiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIyNnB4IiBmaWxsPSIjZmZmZmZmIj4xeDE8L3RleHQ+ICAgCiAgICAgICAgICAgICAgICA8L3N2Zz4KICAgICAgICAgICAgICAgIDwhLS08YSBkb3dubG9hZD0iRklMRU5BTUUucG5nIiBocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsYXNkYXNkLi4uIj5Eb3dubG9hZDwvYT4tLT4="
       alt="Eve Alarm app on an iPhone, showing the alarm time and a wheel to set the time"
          className={styles.splashImage}
        />
        <div
          className={styles.itemInfo}
          style={
            isHovering4
              ? { opacity: 1 }
              : { opacity: 0, transform: "translateY(-8px)" }
          }
        >
          <h2 className={styles.itemTitle}>Eve Alarm</h2>
        </div>
      </div>
      <div
        className={styles.item6}
        onMouseEnter={() => setIsHovering6(true)}
        onMouseLeave={() => setIsHovering6(false)}
      >
        <Image
          src={independentAmbient}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDEiIGNsYXNzPSJpbWctZmx1aWQgcm91bmRlZCBteC1hdXRvIGQtYmxvY2siIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPgogICAgICAgICAgICAgICAgICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2NjY2MiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIyNnB4IiBmaWxsPSIjZmZmZmZmIj4xeDE8L3RleHQ+ICAgCiAgICAgICAgICAgICAgICA8L3N2Zz4KICAgICAgICAgICAgICAgIDwhLS08YSBkb3dubG9hZD0iRklMRU5BTUUucG5nIiBocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsYXNkYXNkLi4uIj5Eb3dubG9hZDwvYT4tLT4="
         alt="The Independent Subscriptions website on a Desktop Computer"
          className={styles.splashImage}
        />
        <div
          className={styles.itemInfo}
          style={
            isHovering6
              ? { opacity: 1 }
              : { opacity: 0, transform: "translateY(-8px)" }
          }
        >
          <h2 className={styles.itemTitle}>The Independent</h2>
        </div>
      </div>
      <div
        className={styles.item7}
        onMouseEnter={() => setIsHovering7(true)}
        onMouseLeave={() => setIsHovering7(false)}
      >
        <Image
          src={eveAppstore}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDEiIGNsYXNzPSJpbWctZmx1aWQgcm91bmRlZCBteC1hdXRvIGQtYmxvY2siIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPgogICAgICAgICAgICAgICAgICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2NjY2MiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIyNnB4IiBmaWxsPSIjZmZmZmZmIj4xeDE8L3RleHQ+ICAgCiAgICAgICAgICAgICAgICA8L3N2Zz4KICAgICAgICAgICAgICAgIDwhLS08YSBkb3dubG9hZD0iRklMRU5BTUUucG5nIiBocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsYXNkYXNkLi4uIj5Eb3dubG9hZDwvYT4tLT4="
          alt="A screenshot of the Apple App Store showing Eve Alarm in the What's Hot Section"
          className={styles.splashImageSmallRadius}
        />
      </div>
      <div className={styles.item8}>
        <Image
          src={independentIcon}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDEiIGNsYXNzPSJpbWctZmx1aWQgcm91bmRlZCBteC1hdXRvIGQtYmxvY2siIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPgogICAgICAgICAgICAgICAgICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2NjY2MiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIyNnB4IiBmaWxsPSIjZmZmZmZmIj4xeDE8L3RleHQ+ICAgCiAgICAgICAgICAgICAgICA8L3N2Zz4KICAgICAgICAgICAgICAgIDwhLS08YSBkb3dubG9hZD0iRklMRU5BTUUucG5nIiBocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsYXNkYXNkLi4uIj5Eb3dubG9hZDwvYT4tLT4="
         alt="The icon for the Independent App: A red circle with an eagle carrying a newspaper in its claws"
          className={styles.splashImage}
        />
      </div>
    </div>
  );
}
