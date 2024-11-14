"use client";
import Image from "next/image";
import { useRef } from "react";

const NAV_LINKS = [
  { label: "Cases", link: "/" },
  { label: "Services", link: "/" },
  { label: "About", link: "/" },
  { label: "Career", link: "/" },
  { label: "Blog", link: "/" },
  { label: "Contact", link: "/" },
];

function Header() {
  const menuRef = useRef<HTMLButtonElement>(null);

  function toggleMenu() {
    if (menuRef.current) {
      menuRef?.current?.classList?.toggle("group-open");
    }
  }

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex h-[80px] items-center justify-between bg-[#00004f] px-[30px] py-[15px] text-white md:px-[80px] md:py-[15px]">
      <div className="relative h-[48px] w-[180px] md:h-[59px] md:w-[220px]">
        <Image src={"/assets/images/logo.webp"} fill alt="logo" />
      </div>
      <ul className="font-poppins hidden items-center gap-[20px] text-xs font-medium text-white md:inline-flex lg:text-[15px]">
        {NAV_LINKS.map((item, index) => (
          <li key={index}>{item.label}</li>
        ))}
        <li className="group ml-[20px] flex h-[40px] w-[150px] items-center justify-center gap-1 rounded-lg bg-white text-black transition hover:bg-[#d73e0f] hover:text-white">
          <span className="pr-1"> Hire Us</span>
          <span className="animate-pulseCustom h-[8px] w-[8px] rounded-full bg-[#d73e0f] group-hover:bg-white"></span>
          <span className="animate-pulse-delay-1 h-[8px] w-[8px] rounded-full bg-[#d73e0f] group-hover:bg-white"></span>
          <span className="animate-pulse-delay-2 h-[8px] w-[8px] rounded-full bg-[#d73e0f] group-hover:bg-white"></span>
        </li>
      </ul>
      <button
        ref={menuRef}
        className="relative flex h-10 w-10 flex-col items-center justify-center space-y-1.5 md:hidden"
        onClick={toggleMenu}
      >
        <span className="block h-0.5 w-8 transform bg-white transition duration-300 ease-in-out group-open:translate-y-2 group-open:rotate-45"></span>
        <span className="block h-0.5 w-8 transform bg-white transition duration-300 ease-in-out group-open:opacity-0"></span>
        <span className="block h-0.5 w-8 transform bg-white transition duration-300 ease-in-out group-open:-translate-y-2 group-open:-rotate-45"></span>
      </button>
    </nav>
  );
}

export default Header;
