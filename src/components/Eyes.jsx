import React, { useEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { gsap } from "gsap";

export default function BlogNewsSection() {
  const sectionRef = useRef(null);
  const smallTextRef = useRef(null);
  const headingRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate small left text fade-in from left
      gsap.fromTo(
        smallTextRef.current,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );

      // Animate heading lines fade-in + move up staggered
      gsap.fromTo(
        headingRef.current.querySelectorAll("span"),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          delay: 0.5,
        }
      );

      // Arrow pulse scale + opacity animation infinite
      gsap.to(arrowRef.current, {
        scale: 1.15,
        opacity: 0.7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 1.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black min-h-[100vh] flex items-center justify-center px-6 md:px-20 py-20 text-white overflow-hidden select-none"
      aria-label="Blog news highlight section"
    >
      {/* SVG Gooey Filter Definition */}
      <svg
        aria-hidden="true"
        focusable="false"
        className="absolute w-0 h-0"
      >
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 30 -15
            "
            result="gooey"
          />
          <feBlend in="SourceGraphic" in2="gooey" />
        </filter>
      </svg>

      {/* Animated Background with Gooey filter */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 overflow-hidden"
        style={{ filter: "url(#gooey)" }}
      >
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#A3E635] rounded-full opacity-20 filter blur-3xl animate-blob" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-yellow-400 rounded-full opacity-15 filter blur-2xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-lime-500 rounded-full opacity-25 filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Left small text */}
      <div
        ref={smallTextRef}
        className="absolute top-6 left-6 md:left-20 text-gray-500 text-sm md:text-base tracking-wide font-light pointer-events-none select-text"
      >
        <span>Let’s Know</span>
        <br />
        <span className="font-semibold text-white">What to Build</span>
      </div>

      {/* Main heading */}
      <h1
        ref={headingRef}
        className="text-center max-w-6xl mx-auto font-extrabold leading-tight md:leading-[1.1]"
      >
        <span className="block text-7xl md:text-[8rem]">Dream</span>
        <span className="block italic text-[6rem] md:text-[8rem] text-[#A3E635]">
          COMES
        </span>
        <span className="block text-7xl md:text-[8rem]">To Reality</span>
      </h1>

      {/* Arrow icon top-right */}
      <button
        ref={arrowRef}
        type="button"
        aria-label="Arrow icon"
        className="absolute top-10 right-6 md:right-20 text-yellow-400 text-5xl cursor-pointer focus:outline-none focus:ring-4 focus:ring-yellow-400 rounded"
      >
        <FiArrowUpRight />
      </button>

    </section>
  );
}
