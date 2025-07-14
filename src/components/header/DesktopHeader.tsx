import { useLocation, Link } from "react-router";
import Cart from "@/components/icons/Cart";
import Heart from "@/components/icons/Heart";
import Logo from "@/components/icons/Logo";
import User from "@/components/icons/User";
import SearchInput from "@/components/SearchInput";
import SubNav from "./SubNav";

export default function DesktopHeader() {
  const { pathname } = useLocation();
  return (
    <header className="flex flex-col">
      <div className="flex px-2 justify-around items-center py-5 space-x-3 flex-wrap">
        <Logo />
        <SearchInput />
        <nav className="flex justify-center items-center space-x-2">
          <Link
            to="/home"
            className={pathname === "/" ? "text-black" : "text-gray-500"}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={pathname === "/about" ? "text-black" : "text-gray-500"}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={pathname === "/contact" ? "text-black" : "text-gray-500"}
          >
            Contanct Us
          </Link>
          <Link
            to="/blog"
            className={pathname === "/blog" ? "text-black" : "text-gray-500"}
          >
            Blog
          </Link>
        </nav>
        <div className="flex justify-center items-center space-x-2">
          <Heart />
          <Cart />
          <User />
        </div>
      </div>
      <SubNav />
    </header>
  );
}
