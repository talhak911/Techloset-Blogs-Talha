"use client";
import { useState } from "react";
import { SocialMediaIconType } from "@/types/types";
import Link from "next/link";

function SocialMediaLinks({
  Icon,
  link,
  bgAfter,
  bgBefore,
  iconColorBefore,
}: SocialMediaIconType) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      href={link}
      className={`group relative size-[35px] overflow-hidden rounded-full bg-${bgBefore} flex transform items-center justify-center`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      target="_blank"
    >
      <span
        className={`absolute inset-0 bg-${bgAfter} transition-transform duration-500 ease-out ${
          isHovered ? "scale-y-100 transform" : "scale-y-0 transform"
        } origin-bottom`}
      ></span>

      <div
        className={`relative z-10 text-${iconColorBefore} group-hover:text-white ${
          isHovered ? "animate-flip-forward" : "animate-flip-back"
        }`}
      >
        {Icon}
      </div>
    </Link>
  );
}

export default SocialMediaLinks;
