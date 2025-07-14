import Camera from "@/components/icons/Camera";
import Computer from "@/components/icons/Computer";
import Devider from "@/components/icons/Devider";
import Gaming from "@/components/icons/Gaming";
import HeadPhone from "@/components/icons/HeadPhone";
import Phone from "@/components/icons/Phone";
import SmartWatch from "@/components/icons/SmartWatch";

export default function SubNav() {
  return (
    <div className="flex itmes justify-center space-x-2 bg-[#2e2e2e] p-2">
      <Phone fill="#969696" />
      <span className="text-[#969696]">Phone</span>

      <Devider stroke="#969696" />

      <Computer stroke="#969696" />
      <span className="text-[#969696]">Computer</span>

      <Devider stroke="#969696" />

      <SmartWatch fill="#969696" />
      <span className="text-[#969696]">Smart Watch</span>

      <Devider stroke="#969696" />

      <Camera stroke="#969696" />
      <span className="text-[#969696]">Camera</span>

      <Devider stroke="#969696" />

      <HeadPhone stroke="#969696" />
      <span className="text-[#969696]">HeadPhone</span>

      <Devider stroke="#969696" />

      <Gaming fill="#969696" />
      <span className="text-[#969696]">Gaming</span>
    </div>
  );
}
