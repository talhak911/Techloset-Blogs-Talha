"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function AnimatedContent() {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        repeat: -1,
        defaults: { ease: "power2.inOut" },
      });
      tl.to(container.current, {
        keyframes: [
          {
            filter: "brightness(2)",
            opacity: 1,
            duration: 0.5,
            ease: "power2.in",
          },
          {
            filter: "brightness(1)",
            opacity: 0.7,
            duration: 1,
          },
        ],
      });
    },
    { scope: container },
  );
  return (
    <h1
      className="latest__posts group relative text-2xl font-medium opacity-40 md:text-4xl"
      ref={container}
    >
      <span className="absolute -bottom-1 right-0 w-5/12 transform border-b-2 border-orangeMain duration-500 ease-in group-hover:w-full" />
      Latest Posts
    </h1>
  );
}

export default AnimatedContent;
