"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedContent = ({ title }: { title: string }) => {
  const svgContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const svgContainer = svgContainerRef.current;

    if (!svgContainer) return;

    const baseFontSize = window.innerWidth > 768 ? 50 : 40;
    const lineHeight = 1.2;
    const letterSpacing = 5;
    const padding = 20;
    const maxCharsPerLine = window.innerWidth > 768 ? 20 : 15;
    const words = title.split(" ");
    const lines: string[] = [];
    let currentLine = "";

    for (const word of words) {
      if ((currentLine + word).length > maxCharsPerLine) {
        lines.push(currentLine.trim());
        currentLine = word + " ";
      } else {
        currentLine += word + " ";
      }
    }
    if (currentLine) lines.push(currentLine.trim());

    const svgWidth = window.innerWidth * 0.9;
    const svgHeight = lines.length * baseFontSize * lineHeight + padding * 2;

    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", `0 0 ${svgWidth} ${svgHeight}`);
    svg.setAttribute("class", "w-[90vw] h-fit block mx-auto");
    svg.style.maxWidth = "100%";

    lines.forEach((line, index) => {
      const text = document.createElementNS(svgNS, "text");
      text.setAttribute("x", "50%");
      text.setAttribute(
        "y",
        `${padding + (index + 1) * baseFontSize * lineHeight}`,
      );
      text.setAttribute("text-anchor", "middle");
      text.setAttribute("dominant-baseline", "middle");
      text.style.fontSize = `${baseFontSize}px`;
      text.style.stroke = "white";
      text.style.fill = "none";
      text.style.strokeWidth = "2px";
      text.style.letterSpacing = `${letterSpacing}px`;
      text.textContent = line;

      svg.appendChild(text);

      gsap.fromTo(
        text,
        { strokeDasharray: 2000, strokeDashoffset: 2000 },
        {
          strokeDashoffset: 0,
          duration: 3,
          delay: index * 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.to(text, { fill: "#00004f", duration: 1 });
          },
        },
      );
    });

    svgContainer.appendChild(svg);

    return () => {
      if (svgContainer) svgContainer.innerHTML = ""; // Clear SVG
    };
  }, [title]);

  return (
    <div className="flex items-center justify-center">
      <div ref={svgContainerRef} className="text-center text-white" />
    </div>
  );
};

export default AnimatedContent;
