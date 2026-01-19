import DesktopIcon from "../icons/DesktopIcon";
import FactoryIcon from "../icons/FactoryIcon";
import HomeIcon from "../icons/HomeIcon";
import LorryIcon from "../icons/LorryIcon";
import ParcelIcon from "../icons/ParcelIcon";
import StoreIcon from "../icons/StoreIcon";
import TPIcon from "../icons/TPIcon";
import WarehouseIcon from "../icons/WarehouseIcon";

export default function Grid(props) {
  return (
    <div class="bento">
      <div class="bento__item bento__item--large">
        <img
          src="/images/medori.png"
          class="bento__media"
          alt="A person's hands holding a phone displaying the Medori app which lists medications and which have been taken"
        />
      </div>

      <div class="bento__item bento__item--tall">
        <img
          src="/images/nextpay.png"
          class="bento__media"
          alt="A person's hands holding a phone displaying the Next Pay credit overlay"
        />
      </div>

      <div class="bento__item bento__item--video">
        <video
          src="/videos/TagAnimation.mp4"
          class="bento__video"
          autoplay
          loop
          muted
          playsinline
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <div class="bento__item bento__item--icons">
        <div class="bento__icon-row">
          <HomeIcon />
          <StoreIcon />
          <WarehouseIcon />
          <LorryIcon />
        </div>
        <div class="bento__icon-row">
          <DesktopIcon />
          <FactoryIcon />
          <ParcelIcon />
          <TPIcon />
        </div>
      </div>
    </div>
  );
}
