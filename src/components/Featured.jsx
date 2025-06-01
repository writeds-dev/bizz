import { motion, useAnimation } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

function Featured() {
  // Animations controllers for two cards
  const cards = [useAnimation(), useAnimation()];

  // Animate card on hover start
  const handleHoverStart = (index) => {
    cards[index].start({ y: "0" });
  };

  // Animate card on hover end
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="container max-w-7xl mx-auto sm:pt-16 pt-8 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="w-full border-b border-zinc-700 pb-5">
        <h1 className="text-3xl sm:text-5xl font-extrabold">Featured Projects</h1>
      </div>

      {/* Cards Container */}
      <div className="py-8 flex flex-col md:flex-row gap-6 md:gap-10">
        {/* Card 1 */}
        <motion.div
          onHoverStart={() => handleHoverStart(0)}
          onHoverEnd={() => handleHoverEnd(0)}
          className="relative cursor-pointer md:w-1/2 w-full h-full"
        >
          <h1 className="mb-3 flex gap-2 items-center tracking-wide text-base sm:text-lg md:text-xl">
            <span className="w-2 h-2 bg-zinc-50 rounded-full flex-shrink-0"></span>
            Web Design Agency
          </h1>
          <h1 className="absolute text-[#CDEA68] flex overflow-hidden left-1/2 sm:left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-6xl sm:text-8xl font-NueueMontreal leading-none tracking-tighter select-none pointer-events-none">
            {"DESIGN".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[0]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card w-full h-[250px] sm:h-[300px] flex items-center rounded-xl overflow-hidden shadow-lg">
            <img
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              src="https://res.cloudinary.com/dcqfpnls6/image/upload/v1748663976/Screenshot_2025-05-31_092851_trg6uq.png"
              alt="featured web design"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          onHoverStart={() => handleHoverStart(1)}
          onHoverEnd={() => handleHoverEnd(1)}
          className="relative cursor-pointer md:w-1/2 w-full h-full"
        >
          <h1 className="mb-3 flex gap-2 items-center tracking-wide text-base sm:text-lg md:text-xl">
            <span className="w-2 h-2 bg-zinc-50 rounded-full flex-shrink-0"></span>
            Web Development Agency
          </h1>
          <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-1/2 sm:right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-6xl sm:text-8xl font-NueueMontreal leading-none tracking-tighter select-none pointer-events-none">
            {"DEV".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card w-full h-[250px] sm:h-[300px] flex items-center rounded-xl overflow-hidden shadow-lg">
            <img
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              src="https://res.cloudinary.com/dcqfpnls6/image/upload/v1748663976/Screenshot_2025-05-31_092851_trg6uq.png"
              alt="featured web development"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>

      {/* See All Projects Button */}
      <div className="mx-auto rounded-full cursor-pointer mb-5 flex gap-2 justify-center w-fit bg-[#004D43] font-NueueMontreal text-zinc-100 px-8 sm:px-10 py-3 text-sm sm:text-base tracking-wider uppercase hover:bg-[#006655] transition duration-300 select-none">
        See all Projects
        <FaArrowUpLong className="rotate-45 origin-center translate-y-[2px]" />
      </div>
    </div>
  );
}

export default Featured;
