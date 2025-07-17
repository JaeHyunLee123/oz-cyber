import iphoneImage from "@/assets/banner/iphone-image.png";
import playStationImage from "@/assets/banner/play-station.png";
import airpodMaxImage from "@/assets/banner/air-pod-max.png";
import visionProImage from "@/assets/banner/apple-vision.png";
import macbookImage from "@/assets/banner/mac-book-pro-14.png";

export default function DeskTopBanner() {
  return (
    <div className="grid grid-cols-4 grid-rows-4 w-full max-w-7xl h-[900px]">
      <div className="col-span-4 row-span-2 flex items-center justify-center space-x-10 bg-[#211C24]">
        <div className="flex flex-col justify-center items-start">
          <span className="text-gray-400">Pro.Beyond</span>
          <h1 className="text-white text-5xl">
            IPhone 14 <strong>Pro</strong>
          </h1>
          <span className="text-gray-400">
            Created to everything for the better.For everyone
          </span>
        </div>
        <img className="h-full  object-center object-cover" src={iphoneImage} />
      </div>
      <div className="bg-white col-span-2 row-span-1 flex items-center justify-center space-x-1">
        <img
          className="h-full object-center object-cover"
          src={playStationImage}
        />
        <div className="pr-1">
          <h1 className="text-black font-bold text-3xl">Playstation 5</h1>
          <p className="text-gray-400">
            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
            redefine your PlayStation experience.
          </p>
        </div>
      </div>
      <div className="bg-neutral-200 col-span-2 row-span-2 flex items-center">
        <div className="pl-1">
          <h1 className="text-black text-3xl">
            Macbook <strong>Pro</strong>
          </h1>
          <p className="text-gray-400">
            The new 15‑inch MacBook Pro makes room for more of what you love
            with a spacious Liquid Retina display.
          </p>
        </div>
        <img
          className="h-[300px] object-center object-cover"
          src={macbookImage}
        />
      </div>
      <div className="bg-neutral-200 col-span-1 row-span-1 flex items-center">
        <img
          className="h-full object-center object-cover"
          src={airpodMaxImage}
        />
        <div className="p-1">
          <h1 className="text-black  text-2xl">
            Air Pods <strong>Max</strong>
          </h1>
          <p className="text-gray-400 text-xs">
            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
            redefine your PlayStation experience.
          </p>
        </div>
      </div>
      <div className="bg-neutral-700 col-span-1 row-span-1 flex items-center">
        <img
          className="h-[150px] object-center object-cover"
          src={visionProImage}
        />
        <div className="pr-1">
          <h1 className="text-white  text-2xl">
            Apple Vision <strong>Pro</strong>
          </h1>
          <p className="text-gray-400 text-xs">
            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
            redefine your PlayStation experience.
          </p>
        </div>
      </div>
    </div>
  );
}
