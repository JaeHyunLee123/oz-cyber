import DeskTopBanner from "@/components/banner/DeskTopBanner";
import MobileBanner from "@/components/banner/MobileBanner";
import TrendingProducts from "@/components/TrendingProducts";
import { MOBILE_WIDTH } from "@/constants";
import useWindowWidth from "@/hooks/useWindowWidth";

export default function Home() {
  const windowWidth = useWindowWidth();

  return (
    <div className="flex flex-col items-center">
      {windowWidth >= MOBILE_WIDTH ? <DeskTopBanner /> : <MobileBanner />}

      <TrendingProducts />
    </div>
  );
}
