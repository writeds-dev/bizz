import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const webDevProjects = [
  {
    project: "Corporate Website Redesign",
    productionHouse: "Inhouse Development",
    duration: "Jan 2023 - Mar 2023",
    imageUrl:
      "https://res.cloudinary.com/dtmklzv0k/image/upload/v1749349563/flying-rings-geometric-shapes-background_xxj6vf.jpg",
  },
  {
    project: "E-commerce Platform Launch",
    productionHouse: "Partner Agency",
    duration: "Apr 2023 - Jun 2023",
    imageUrl:
      "https://res.cloudinary.com/dtmklzv0k/image/upload/v1749349562/scene-three-dimensional-geometrical-background_e8dvys.jpg",
  },
];

const projects = [
  {
    project: "Bajewala Night For Star Plus",
    productionHouse: "Keylight Production",
    duration: "3/3 to 10/3/18",
    imageUrl:
      "https://res.cloudinary.com/dtmklzv0k/image/upload/v1749349815/equipment-empty-musical-recording-room_gec7ls.jpg",
  },
  {
    project: "Your Honor 1 (Web Series)",
    productionHouse: "Sphereorigins Multivision Pvt. Ltd",
    duration: "14/2 to 26/2/19",
    imageUrl:
      "https://res.cloudinary.com/dtmklzv0k/image/upload/v1749349817/close-up-man-operating-camera_ofqn1q.jpg",
  },
];

export default function OurWorks() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black text-white min-h-screen flex flex-col md:flex-row items-center px-6 md:px-20 py-16 md:py-24 select-none">
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

      {/* Web Development Section */}
      <section className="bg-gray-800 text-white py-20 px-6 md:px-20 max-w-7xl mx-auto rounded-2xl mb-16 select-none shadow-lg">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-lime-400">
            Web Development
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mt-4 max-w-3xl">
            We build fast, responsive, and user-friendly websites tailored to your business needs. Whether it’s a sleek landing page, dynamic e-commerce platform, or complex web application, our expert developers use cutting-edge technologies to deliver seamless digital experiences that drive engagement and conversions.
          </p>
        </motion.div>

        {/* Web Development Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {webDevProjects.map(
            ({ project, productionHouse, duration, imageUrl }, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 rounded-3xl shadow-xl cursor-pointer overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="relative h-56 overflow-hidden rounded-t-3xl">
                  <img
                    src={imageUrl}
                    alt={project}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-white text-lg font-semibold rounded-t-3xl">
                    View Project
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-lime-400 mb-3">
                    {project}
                  </h3>
                  <p className="text-gray-300 mb-2">
                    <span className="font-semibold text-white">
                      Production House:
                    </span>{" "}
                    {productionHouse}
                  </p>
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">Duration:</span>{" "}
                    {duration}
                  </p>
                </div>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Projects Cards Section */}
      <section className="bg-gray-900 py-20 px-6 md:px-20 max-w-full mx-auto select-none">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-12 text-center">
          Our Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {projects.map(
            ({ project, productionHouse, duration, imageUrl }, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-3xl shadow-xl overflow-hidden cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="relative h-56 overflow-hidden rounded-t-3xl">
                  <img
                    src={imageUrl}
                    alt={project}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-lime-400 mb-3">
                    {project}
                  </h3>
                  <p className="text-gray-300 mb-2">
                    <span className="font-semibold text-white">
                      Production House:
                    </span>{" "}
                    {productionHouse}
                  </p>
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">Duration:</span>{" "}
                    {duration}
                  </p>
                </div>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Final Call to Action Section */}
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
