import useWindowWidth from "@/hooks/useWindowWidth";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import { MOBILE_WIDTH } from "@/constants";

export default function Header() {
  const windowWidth = useWindowWidth();

  return (
    <>{windowWidth >= MOBILE_WIDTH ? <DesktopHeader /> : <MobileHeader />}</>
  );
}
