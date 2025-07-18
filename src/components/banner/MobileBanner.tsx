import useWindowWidth from "@/hooks/useWindowWidth";

import iphoneImage from "@/assets/banner/iphone-image.png";
import playStationImage from "@/assets/banner/play-station-mobile.png";
import airpodMaxImage from "@/assets/banner/air-pod-max-mobile.png";
import visionProImage from "@/assets/banner/apple-vision-mobile.png";
import macbookImage from "@/assets/banner/mac-book-pro-14-mobile.png";

export default function MobileBanner() {
  //TODO: 쓰로틀링 적용
  const windowWidth = useWindowWidth();

  const height = windowWidth * 5;

  return (
    <div
      className="grid grid-cols-1 grid-rows-6 w-full h-[2500px]"
      style={{ height: `${height}px` }}
    >
      <div className="bg-[#211C24] col-span-1 row-span-2 w-full flex flex-col justify-between">
        <div className="flex-1 flex flex-col justify-center items-center space-y-1">
          <span className="text-gray-400">Pro.Beyond</span>
          <h1 className="text-white text-5xl text-center">
            IPhone 14 <strong>Pro</strong>
          </h1>
          <span className="text-gray-400 text-center">
            Created to everything for the better.For everyone
          </span>
        </div>

        <img
          src={iphoneImage}
          alt="iphone"
          className="h-[65%] object-contain"
        />
      </div>

      <div className="bg-neutral-200 w-full flex flex-col justify-center items-center space-y-2">
        <img
          src={airpodMaxImage}
          alt="airpod-max"
          className="overflow-hidden w-[50%]"
        />

        <div className="p-1 flex flex-col items-center">
          <h1 className="text-black  text-2xl sm:text-3xl">
            Air Pods <strong>Max</strong>
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm">
            Computational audio. Listen, it's powerful
          </p>
        </div>
      </div>

      <div className="bg-neutral-700 w-full flex flex-col justify-center items-center space-y-2">
        <img
          src={visionProImage}
          alt="vision-pro"
          className="overflow-hidden w-[50%]"
        />

        <div className="flex flex-col items-center">
          <h1 className="text-white  text-2xl sm:text-3xl">
            Apple Vision <strong>Pro</strong>
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm">
            An immersive way to experience entertainment
          </p>
        </div>
      </div>

      <div className="bg-white w-full flex flex-col justify-center items-center space-y-2">
        <img
          src={playStationImage}
          alt="playstation"
          className="overflow-hidden w-[50%]"
        />

        <div className="flex flex-col items-center">
          <h1 className="text-black font-bold text-2xl sm:text-3xl">
            Playstation 5
          </h1>
          <p className="text-gray-400 text-xs text-center sm:text-sm">
            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
            redefine your PlayStation experience.
          </p>
        </div>
      </div>

      <div className="bg-neutral-200 w-full flex flex-col justify-center items-center space-y-2">
        <img
          src={macbookImage}
          alt="macbook"
          className="overflow-hidden w-[50%]"
        />

        <div className="flex flex-col items-center">
          <h1 className="text-black text-2xl sm:text-3xl">
            Macbook <strong>Pro</strong>
          </h1>
          <p className="text-gray-400 text-center text-xs sm:text-sm">
            The new 15‑inch MacBook Pro makes room for more of what you love
            with a spacious Liquid Retina display.
          </p>
        </div>
      </div>
    </div>
  );
}
