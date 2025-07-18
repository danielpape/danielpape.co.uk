import DesktopIcon from "./icons/DesktopIcon";
import FactoryIcon from "./icons/FactoryIcon";
import HomeIcon from "./icons/HomeIcon";
import LorryIcon from "./icons/LorryIcon";
import ParcelIcon from "./icons/ParcelIcon";
import StoreIcon from "./icons/StoreIcon";
import TPIcon from "./icons/TPIcon";
import WarehouseIcon from "./icons/WarehouseIcon";

export default function Grid(props) {
  return (
    <div
      class="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:h-[312px] px-4 my-12 max-w-screen-xl m-auto
    "
    >
      <div class="md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-3 md:max-h-[500px] max-h-[240px] border border-slate-300 rounded-md overflow-hidden">
        <img
          src="/images/medori.png"
          class="w-full h-full object-cover"
          alt="A person's hands holding a phone displaying the Medori app which lists medications and which have been taken"
        />
      </div>
      <div class="md:col-start-4 md:col-end-6 md:row-start-1 md:row-end-3 border border-slate-300 rounded-md overflow-hidden">
        <img
          src="/images/nextpay.png"
          class="w-full h-full object-cover"
          alt="A person's hands holding a phone displaying the Next Pay credit overlay"
        />
      </div>
      <div className="flex items-center justify-center md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 min-h-[140px] max-h-[240px] border border-slate-300 rounded-md overflow-hidden max-h-[160px] bg-white">
        <video
          src="/videos/TagAnimation.mp4"
          className="max-w-[240px] p-8"
          autoPlay
          loop
          muted
          playsInline
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3 flex flex-col items-center p-2 justify-center gap-1 bg-slate-50 border border-slate-300 rounded-md overflow-hidden min-h-[140px]">
        <div className="flex flex-row gap-4">
          <HomeIcon />
          <StoreIcon />
          <WarehouseIcon />
          <LorryIcon />
        </div>
        <div className="flex flex-row gap-4">
          <DesktopIcon />
          <FactoryIcon />
          <ParcelIcon />
          <TPIcon />
        </div>
      </div>
    </div>
  );
}
