"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="header px-5 xl:px-10 2xl:px-52 fixed top-5 w-full z-50">
      <div
        className={`bg-customGray flex items-center justify-between p-3 rounded-md ${
          isScrolled ? "shadow-[0px_3px_100px_0px_rgba(201,243,29,0.3)]" : ""
        }`}
      >
        {/* Logo Section */}
        <div className="header-logo w-[25%]">
          <Link href={"/"}>
            <Image
              id="logo"
              src="/images/logo-white.svg"
              alt="Logo"
              className="cursor-pointer"
              width={100}
              height={50}
            />
          </Link>
        </div>

        {/* Hamburger Menu for Tablet and Smaller */}
        <div className="menu lg:hidden">
          <RxHamburgerMenu
            className="text-white text-2xl cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>

        {/* Links for Larger Screens */}
        <div className="header-menu hidden lg:flex gap-5 w-[50%] justify-center">
          <Link href={"/"}>
            <p className="text-white">Home</p>
          </Link>
          <Link href={"/about"}>
            <p className="text-white">About</p>
          </Link>
          <Link href={"/services"}>
            <p className="text-white">Services</p>
          </Link>
          <Link href={"/projects"}>
            <p className="text-white">Projects</p>
          </Link>
        </div>

        {/* Button Section */}
        <div className="header-button w-[25%] hidden lg:flex justify-end">
          <Button text="Get In Touch" href="/contact" />
        </div>
      </div>

      {/* Dropdown Menu for Smaller Screens */}
      {isMenuOpen && (
        <div className="bg-customGray flex flex-col gap-3 p-5 mt-2 rounded-md shadow-lg md:hidden">
          <Link href={"/"}>
            <p className="text-white">Home</p>
          </Link>
          <Link href={"/"}>
            <p className="text-white">About</p>
          </Link>
          <Link href={"/"}>
            <p className="text-white">Services</p>
          </Link>
          <Link href={"/"}>
            <p className="text-white">Projects</p>
          </Link>
          <Button text="Get In Touch" href="/about" />
        </div>
      )}
    </div>
  );
};

export default Header;
