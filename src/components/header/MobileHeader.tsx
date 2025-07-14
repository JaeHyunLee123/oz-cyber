import { useState } from "react";
import { Link, useLocation } from "react-router";
import Burger from "@/components/icons/Burger";
import Cart from "@/components/icons/Cart";
import Heart from "@/components/icons/Heart";
import Logo from "@/components/icons/Logo";
import User from "@/components/icons/User";
import SearchInput from "@/components/SearchInput";

export default function MobileHeader() {
  const { pathname } = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex flex-col">
      <div className="flex flex-row px-2 py-5 justify-between items-center">
        <Logo />
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="hover:cursor-pointer"
        >
          <Burger />
        </button>
      </div>

      <div
        className={`flex flex-col justify-center items-center space-y-2 ${
          isOpen ? "" : "hidden"
        }`}
      >
        <SearchInput />
        <nav className="flex flex-col justify-center items-center space-y-1">
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
    </header>
  );
}
