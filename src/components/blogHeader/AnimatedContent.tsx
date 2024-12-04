
"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedContent = ({ title }: { title: string }) => {
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const svgContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const quoteText = quoteRef.current;
    const svgContainer = svgContainerRef.current;

    if (!quoteText || !svgContainer) return;

    const firstLetter = title.charAt(0);
    const remainingText = title.slice(1);
  
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
  

    svg.setAttribute("viewBox", "0 0 150 150");
    svg.setAttribute("class", "w-[60px] h-[60px]")

    const text = document.createElementNS(svgNS, "text");
    text.setAttribute("x", "10");
    text.setAttribute("y", "100");
    text.setAttribute("class", "font-bold text-[150px] text-transparent");
    text.style.stroke = "white";
    text.style.fill = "none";
    text.style.strokeWidth = "2px";
    text.textContent = firstLetter;

    svg.appendChild(text);
    svgContainer.appendChild(svg);

    gsap.fromTo(
      text,
      { strokeDasharray: 2000, strokeDashoffset: 2000 },
      {
        strokeDashoffset: 0,
        duration: 3,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.to(text, { fill: "#00004f", duration: 1 }); 
        },
      }
    );

    gsap.fromTo(
      quoteText,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 2, ease: "power2.out" }
    );


    quoteText.textContent = remainingText;

    return () => {
      if (svgContainer) svgContainer.innerHTML = ""; 
    };
  }, [title]);

  return (
    <div className="flex items-center justify-cente">
      <div className="text-center text-white">
        <blockquote className="mt-[10px] text-center text-[25px] xsm:text-[30px] md:mt-[30px] md:text-[36px] lg:text-[38px] ">
          <div className="flex items-start justify-center">
            <div ref={svgContainerRef} />
            <p ref={quoteRef} className="inline-block -ml-4"></p>
          </div>
        </blockquote>
      </div>
    </div>
  );
};

export default AnimatedContent;
