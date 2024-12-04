"use client"
import { SOCIAL_ICONS } from "@/constants/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import SocialMediaLinks from "../socialMediaLinks/SocialMediaLinks";
import React from "react";

function AnimatedContent() {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "power2.inOut" },
      });

      tl.to(
        ".signal-line",
        {
          keyframes: [
            { backgroundPosition: "0% 0%" },
            {
              backgroundPosition: "100% 100%",
              stagger: { from: "start", each: 0.3 },
              duration: 1,
            },
          ],
        },
        "-=1.4",
      );
    },
    { scope: container },
  );

  return (
    <div className="mt-[23px] flex items-center gap-2" ref={container}>
      {SOCIAL_ICONS.map((item, index) => (
        <React.Fragment key={index}>
          <SocialMediaLinks
            key={index}
            Icon={item.Icon}
            bgAfter={item.bgAfter}
            link={item.link}
            bgBefore="white"
            iconColorBefore="orangeMain"
          />
         {index !==SOCIAL_ICONS.length-1 && <div className="signal-line rotate-180 bg-gradient-to-t" />}
        </React.Fragment>
      ))}
    </div>
  );
}

export default AnimatedContent;
