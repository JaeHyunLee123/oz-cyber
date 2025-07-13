import useWindowWidth from "../../hooks/useWindowWidth";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

export default function Header() {
  const windowWidth = useWindowWidth();

  return <>{windowWidth >= 730 ? <DesktopHeader /> : <MobileHeader />}</>;
}
