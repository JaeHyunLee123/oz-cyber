import { Link, useLocation } from "react-router";
import Cart from "./icons/Cart";
import Heart from "./icons/Heart";
import Logo from "./icons/logo";
import User from "./icons/User";
import SearchInput from "./SearchInput";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className="flex justify-around items-center p-10 space-x-3 flex-wrap">
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
    </header>
  );
}
