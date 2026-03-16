import { useEffect, useRef, useState } from "react";

import DesktopIcon from "../icons/DesktopIcon";
import FactoryIcon from "../icons/FactoryIcon";
import HomeIcon from "../icons/HomeIcon";
import LorryIcon from "../icons/LorryIcon";
import ParcelIcon from "../icons/ParcelIcon";
import StoreIcon from "../icons/StoreIcon";
import TPIcon from "../icons/TPIcon";
import WarehouseIcon from "../icons/WarehouseIcon";

export default function Grid() {
  const videoRef = useRef(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const node = videoRef.current;

    if (!node || shouldLoadVideo) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [shouldLoadVideo]);

  return (
    <div className="bento">
      <div className="bento__item bento__item--large">
        <picture>
          <source
            srcSet="/images/medori-768.jpg 754w, /images/medori-1280.jpg 1258w"
            sizes="(min-width: 768px) 50vw, calc(100vw - 2rem)"
            type="image/jpeg"
          />
          <img
            src="/images/medori-1280.jpg"
            className="bento__media"
            alt="A person's hands holding a phone displaying the Medori app which lists medications and which have been taken"
            width="1258"
            height="1280"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </picture>
      </div>

      <div className="bento__item bento__item--tall">
        <picture>
          <source
            srcSet="/images/nextpay-640.jpg 640w, /images/nextpay-960.jpg 960w"
            sizes="(min-width: 768px) 50vw, calc(100vw - 2rem)"
            type="image/jpeg"
          />
          <img
            src="/images/nextpay-960.jpg"
            className="bento__media"
            alt="A person's hands holding a phone displaying the Next Pay credit overlay"
            width="960"
            height="806"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>

      <div className="bento__item bento__item--video" ref={videoRef}>
        {shouldLoadVideo ? (
          <video
            src="/videos/TagAnimation.mp4"
            className="bento__video"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="bento__video-placeholder" aria-hidden="true" />
        )}
      </div>

      <div className="bento__item bento__item--icons">
        <div className="bento__icon-row">
          <HomeIcon />
          <StoreIcon />
          <WarehouseIcon />
          <LorryIcon />
        </div>
        <div className="bento__icon-row">
          <DesktopIcon />
          <FactoryIcon />
          <ParcelIcon />
          <TPIcon />
        </div>
      </div>
    </div>
  );
}
