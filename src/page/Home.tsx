import DeskTopBanner from "@/components/banner/DeskTopBanner";
import TrendingProducts from "@/components/TrendingProducts";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <DeskTopBanner />
      <TrendingProducts />
    </div>
  );
}
