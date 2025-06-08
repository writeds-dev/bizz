import { FiArrowUpRight, FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const servicesData = [
  {
    category: "Logo & Identity",
    description: "Create visually appealing web, mobile, and SaaS product designs",
    tags: ["Logo Design", "Brand Guide", "Business Card"],
  },
  {
    category: "Clothing & Merchandise",
    description: "Stylish clothing and merchandise solutions for branding",
    tags: ["T-shirt", "Clothing or apparel", "Jersey"],
  },
  {
    category: "Packaging & Label",
    description: "Innovative packaging and labeling for your products",
    tags: ["Product packaging", "Food Packaging", "Retail Packaging"],
  },
  {
    category: "Book & Magazine",
    description: "Creative designs for books and magazines",
    tags: ["Book cover", "Interior book design", "eBook Cover"],
  },
  {
    category: "Business & Advertising",
    description: "Effective advertising to boost your business visibility",
    tags: ["Advertisement Design", "Newspaper Ad", "Flyer/Pamphlet"],
  },
  {
    category: "Web & App Design",
    description: "Modern websites and apps for an enhanced user experience",
    tags: ["Website", "Website ReDesign", "Blog"],
  },
  {
    category: "Art & Illustration",
    description: "Unique illustrations and graphics tailored for you",
    tags: ["Illustration or graphics", "Business Illustration", "Website Illustration"],
  },
];

const creativeProcessSteps = [
  {
    number: "01.",
    title: "RESEARCH",
    description: "Create visually appealing web, mobile, and SaaS product designs",
  },
  {
    number: "02.",
    title: "IDEATE",
    description: "Create visually appealing web, mobile, and SaaS product designs",
  },
  {
    number: "03.",
    title: "CREATE",
    description: "Create visually appealing web, mobile, and SaaS product designs",
  },
];

// Animation variants
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeUpDelayVariant = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay } },
});

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function SolutionsSection() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/contact");
  };

  return (
    <>
      {/* Section: Header */}
      <motion.section
        className="relative bg-black min-h-[100vh] flex flex-col md:flex-row items-center px-6 md:px-20 py-16 text-white overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <motion.div
          className="absolute top-6 left-6 md:left-20 text-gray-400 text-xs sm:text-sm md:text-base tracking-wide select-none"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <span>Let’s Know</span>
          <br />
          <span className="font-semibold text-white">Services!</span>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto w-full text-center mt-20 md:text-left md:mt-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight md:leading-[1.1] max-w-full md:max-w-5xl mx-auto md:mx-0">
            SOLUTIONS{" "}
            <span className="italic text-[#8DD017]">for every</span> <br />
            SERVICE NEED
          </h1>
        </motion.div>

        <motion.button
          onClick={handleSubmit}
          aria-label="Go to contact"
          className="absolute top-10 right-6 md:right-20 text-yellow-400 text-3xl sm:text-4xl cursor-pointer select-none animate-pulse focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
          type="button"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiArrowUpRight />
        </motion.button>
      </motion.section>

      {/* Section: Our Services Cards */}
      <motion.section
        className="bg-black text-white py-20 px-6 md:px-20 max-w-full mx-auto select-none"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariant}
      >
        <motion.div
          className="max-w-4xl mx-auto mb-16 text-center px-4 sm:px-0"
          variants={fadeUpVariant}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
            OUR <span className="italic text-lime-400">services</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We believe in the power of design to transform businesses. Our team of talented designers, strategists, and creative thinkers work collaboratively to bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
          {servicesData.map(({ category, description, tags }, idx) => (
            <motion.div
              key={category}
              className="group relative border border-gray-700 rounded-3xl p-6 sm:p-8 cursor-pointer hover:shadow-lg hover:shadow-lime-500 transition-shadow duration-300 flex flex-col min-w-0"
              variants={fadeUpDelayVariant(idx * 0.15)}
            >
              {/* Icon accent */}
              <div className="absolute -top-6 left-6 sm:left-8 w-10 h-10 sm:w-12 sm:h-12 bg-lime-400 rounded-full flex items-center justify-center shadow-lg shadow-lime-600/50 text-black font-bold text-lg sm:text-xl">
                {category.charAt(0)}
              </div>

              {/* Category */}
              <h3 className="text-white text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 pl-14 sm:pl-16 tracking-wide truncate">
                {category}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-6 sm:mb-8 pl-14 sm:pl-16 leading-relaxed flex-grow text-sm sm:text-base break-words">
                {description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 sm:gap-3 pl-14 sm:pl-16">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] sm:text-xs border border-lime-400 rounded-full px-3 py-1 text-lime-400 group-hover:bg-lime-400 group-hover:text-black transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Selected Projects Section */}
      <motion.section
        className="bg-black min-h-[60vh] sm:min-h-[80vh] md:min-h-screen flex flex-col justify-center items-center text-center relative text-white px-4 sm:px-6 md:px-0 max-w-full overflow-x-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUpVariant}
      >
        <div className="uppercase font-extrabold text-[70px] sm:text-[90px] md:text-[120px] leading-[1] flex flex-wrap justify-center gap-2">
          <span className="inline-block align-middle text-[60px] sm:text-[90px] md:text-[110px]">©</span>
          <span>SELECTED</span>
        </div>
        <div className="uppercase font-extrabold text-[70px] sm:text-[90px] md:text-[120px] leading-[1] text-gray-600">
          PROJECTS
        </div>

        {/* Bottom left */}
        <div className="absolute bottom-4 left-4 text-white text-xs sm:text-sm select-text">
          2020/25
        </div>

        {/* Bottom right */}
        <div className="absolute bottom-4 right-4 text-white text-xs sm:text-sm select-text">
          (04)
        </div>
      </motion.section>

      {/* Creative Process Section */}
      <motion.section
        className="bg-black text-white max-w-full mx-auto px-4 sm:px-6 md:px-20 py-20 md:py-24 select-none"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariant}
      >
        {/* Header */}
        <motion.div
          className="md:flex md:justify-between md:items-center mb-16 md:mb-20 flex-col md:flex-row gap-6 md:gap-0 max-w-7xl mx-auto"
          variants={fadeUpVariant}
        >
          <div className="max-w-full md:max-w-md">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              CREATIVE{" "}
              <span className="italic bg-gradient-to-r from-lime-400 to-green-600 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
          </div>

          <p className="max-w-full md:max-w-lg text-gray-400 leading-relaxed text-center md:text-left text-base sm:text-lg">
            Let's break the mold. We're not afraid to challenge the status quo.
            Our team thrives on creating unique and memorable designs that make a statement.
          </p>
        </motion.div>

        {/* Process Cards */}
        <div className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-20 relative flex-wrap max-w-7xl mx-auto">
          {creativeProcessSteps.map(({ number, title, description }, idx) => (
            <motion.div
              key={number}
              variants={fadeUpDelayVariant(idx * 0.15)}
              className="relative flex-1 min-w-[280px] bg-[#1E1E1E] p-8 sm:p-12 rounded-3xl shadow-lg hover:shadow-[0_0_25px_rgba(132,204,22,0.9)] transition-shadow duration-500"
            >
              <h3 className="text-gradient font-semibold mb-4 sm:mb-6 text-xl sm:text-2xl flex items-center gap-2 sm:gap-3">
                <span className="text-lime-400 font-mono text-lg sm:text-xl">{number}</span>
                {title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg break-words">{description}</p>

              {/* Arrow between cards on desktop */}
              {idx < creativeProcessSteps.length - 1 && (
                <div
                  className="hidden md:flex absolute top-1/2 transform -translate-y-1/2 right-[-45px] items-center"
                  aria-hidden="true"
                >
                  <svg
                    className="w-10 h-10 text-lime-400 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <style>{`
          .text-gradient {
            background: linear-gradient(90deg, #84cc16, #4d7c0f);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}</style>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="relative bg-black min-h-screen flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-20 py-16 md:py-24 text-white select-none overflow-hidden max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        {/* Left Text */}
        <div className="md:w-1/2 max-w-full mb-12 md:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Our <br />
            <span className="text-white">
              mult disciplinary team brings together diverse talents allowing
            </span>
            <br />
            <span className="text-gray-600 text-base sm:text-lg md:text-base">
              approach projects with a holistic perspective that fuses creativity and
              functionality
            </span>
          </h1>

          {/* Scroll Down */}
          <div className="mt-12 sm:mt-16 flex items-center gap-3 cursor-pointer group max-w-max">
            <FiChevronDown className="w-10 h-16 border-2 border-gray-500 rounded-3xl flex items-start justify-center relative animate-bounce text-gray-500 text-2xl sm:text-3xl mt-1 sm:mt-2 group-hover:text-lime-400 transition-colors" />
            <div className="text-gray-500 text-xs sm:text-sm select-none">
              <p>Scroll Down</p>
              <p className="font-semibold text-white">For More</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end w-full max-w-[480px]">
          <img
            src="https://res.cloudinary.com/dcqfpnls6/image/upload/v1748761234/3d-rendering-abstract-black-white-background_ulelcn.jpg"
            alt="Team working"
            className="rounded-xl max-w-full w-full object-cover shadow-lg"
          />
        </div>
      </motion.section>

      {/* Collaborate Section */}
      <motion.section
        className="relative bg-black min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center px-4 sm:px-6 md:px-20 py-16 md:py-24 text-white select-none overflow-hidden max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        {/* Main Text */}
        <h1 className="text-center max-w-full mx-auto text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold leading-tight md:leading-[1.1] px-2">
          <span className="block">LET’S</span>
          <span className="block italic text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[8rem] text-gradient mt-2">
            Collaborate.
          </span>
        </h1>

        {/* Arrow icon top-right */}
        <div
          className="absolute top-10 right-6 md:right-20 text-yellow-400 text-3xl sm:text-4xl cursor-pointer select-none animate-pulse"
          aria-label="Arrow icon"
        >
          <FiArrowUpRight />
        </div>

        <style>{`
          .text-gradient {
            background: linear-gradient(90deg, #facc15, #a3e635);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}</style>
      </motion.section>
    </>
  );
}
