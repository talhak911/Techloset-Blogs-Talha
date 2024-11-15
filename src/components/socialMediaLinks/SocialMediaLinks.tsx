"use client"
import { useState } from "react";
import { SocialMediaIconType } from "@/types/types";
import Link from "next/link";

function SocialMediaLinks({Icon,link,bgAfter}:SocialMediaIconType) {
  const [isHovered, setIsHovered] = useState(false);
  return (
       <Link
      href={link}
      className="size-[35px] group relative overflow-hidden  rounded-full bg-white transform flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      target="_blank"
    >
      <span
        className={`absolute inset-0 bg-${bgAfter} transition-transform duration-500 ease-out ${
          isHovered ? "transform scale-y-100" : "transform scale-y-0"
        } origin-bottom`}
      ></span>

      <div
        className={`relative z-10 text-orangeMain group-hover:text-white ${
          isHovered ? "animate-flip-forward" : "animate-flip-back"
        }`}
      >
       {Icon}
      </div>
    </Link>
  );
}

export default SocialMediaLinks;
