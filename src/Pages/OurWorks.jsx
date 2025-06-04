import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export default function OurWorks() {
  return (
    <>
      <section className="bg-black text-white min-h-screen flex flex-col md:flex-row items-center px-6 md:px-20 py-16 md:py-24 select-none">
        {/* Left text block */}
        <motion.div
          className="md:w-1/2 max-w-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            <span className="italic font-serif">Excellence?</span>{" "}
            <span className="text-lime-400 bg-clip-text bg-gradient-to-r from-gray-500 to-gray-400">
              We set <br /> the standard.
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-lg leading-relaxed">
            Your brand has a story worth telling — we help you tell it right.
          </p>
        </motion.div>

        {/* Right image */}
        <motion.div
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="https://res.cloudinary.com/dcqfpnls6/image/upload/v1748761234/view-3d-modern-sphere-with-desert-landscape_qm7zpw.jpg"
            alt="Geometric purple shape"
            className="max-w-full h-auto rounded-xl shadow-2xl"
            style={{ maxHeight: "420px" }}
          />
        </motion.div>
      </section>

      <section className="relative bg-black text-white overflow-hidden py-32 px-6 sm:px-12 flex flex-col items-center justify-center text-center max-w-full mx-auto">
        {/* Background grid */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-10 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-gray-700"></div>
          ))}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="border-b border-gray-700 col-span-12 row-start-auto"
              style={{ gridRowStart: i + 1 }}
            ></div>
          ))}
        </div>

        {/* Abstract black glossy shape (left) */}
        <div
          className="absolute left-0 top-1/4 w-48 h-48 rounded-full bg-gradient-to-tr from-gray-900 to-black opacity-70 blur-3xl"
          style={{ clipPath: "ellipse(60% 50% at 30% 40%)" }}
        ></div>

        {/* Main Text */}
        <div className="relative z-10 max-w-5xl">
          <p className="uppercase text-sm tracking-widest mb-6">Upload Soon....</p>

          <h1 className="text-white font-extrabold text-[6vw] sm:text-8xl leading-tight sm:leading-[1] mb-12">
            LET'S WORK <br /> TOGETHER
          </h1>

          {/* Centered Circle Button */}
          <button
            aria-label="Get In Touch"
            className="relative z-20 inline-flex items-center justify-center w-40 h-40 rounded-full bg-lime-400 text-black font-bold text-lg shadow-lg hover:bg-lime-500 transition-colors"
          >
            <FiArrowUpRight className="mr-2" size={24} />
            Get In Touch
          </button>
        </div>
      </section>
    </>
  );
}
