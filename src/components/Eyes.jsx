import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

export default function BlogNewsSection() {
  return (
    <section className="relative bg-black min-h-[100vh] flex items-center justify-center px-6 md:px-20 py-20 text-white overflow-hidden select-none">
      {/* Left small text */}
      <div className="absolute top-6 left-6 md:left-20 text-gray-500 text-sm md:text-base tracking-wide font-light">
        <span>Let’s Know</span>
        <br />
        <span className="font-semibold text-white">What to Build</span>
      </div>

      {/* Main heading */}
      <h1 className="text-center max-w-6xl mx-auto font-extrabold leading-tight md:leading-[1.1]">
        <span className="block text-7xl md:text-[8rem]">Dream</span>
        <span className="block italic text-[6rem] md:text-[8rem] text-yellow-400">COMES</span>
        <span className="block text-7xl md:text-[8rem]">To Reality</span>
      </h1>

      {/* Arrow icon top-right */}
      <div className="absolute top-10 right-6 md:right-20 text-yellow-400 text-5xl cursor-pointer select-none animate-pulse" aria-label="Arrow icon">
        <FiArrowUpRight />
      </div>
    </section>
  );
}
