import Camera from "../icons/Camera";
import Computer from "../icons/Computer";
import Devider from "../icons/Devider";
import Gaming from "../icons/Gaming";
import HeadPhone from "../icons/HeadPhone";
import Phone from "../icons/Phone";
import SmartWatch from "../icons/SmartWatch";

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
