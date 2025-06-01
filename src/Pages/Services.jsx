
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

const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      ease: "easeOut",
      duration: 0.6,
    },
  }),
};
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
      {/* Section: Header with big title and arrow */}
     <motion.section
      className="relative bg-black min-h-[100vh] flex items-center px-6 md:px-20 py-16 text-white overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <div className="absolute top-6 left-6 md:left-20 text-gray-400 text-sm md:text-base tracking-wide select-none">
        <span>Let’s Know</span>
        <br />
        <span className="font-semibold text-white">Services!</span>
      </div>

      <div className="max-w-6xl mx-auto w-full text-center md:text-left">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold leading-tight md:leading-[1.1] max-w-5xl mx-auto md:mx-0">
          SOLUTIONS{" "}
          <span className="italic text-[#8DD017]">for every</span> <br />
          SERVICE NEED
        </h1>
      </div>

      <div
        className="absolute top-10 right-6 md:right-20 text-yellow-400 text-4xl cursor-pointer select-none animate-pulse"
        aria-label="Arrow icon"
      >
        <FiArrowUpRight onClick={handleSubmit} />
      </div>
    </motion.section>

      {/* Section: Our Services Cards */}
      <section className="bg-black text-white py-20 px-6 md:px-20 max-w-7xl mx-auto select-none">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-5xl font-extrabold tracking-tight mb-3">
            OUR <span className="italic text-lime-400">services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We believe in the power of design to transform businesses. Our team of talented designers, strategists, and creative thinkers work collaboratively to bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {servicesData.map(({ category, description, tags }) => (
            <div
              key={category}
              className="group relative border border-gray-700 rounded-3xl p-8 cursor-pointer hover:shadow-lg hover:shadow-lime-500 transition-shadow duration-300 flex flex-col"
            >
              {/* Icon accent */}
              <div className="absolute -top-6 left-8 w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center shadow-lg shadow-lime-600/50 text-black font-bold text-lg">
                {category.charAt(0)}
              </div>

              {/* Category */}
              <h3 className="text-white text-2xl font-semibold mb-4 pl-16 tracking-wide">
                {category}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-8 pl-16 leading-relaxed flex-grow">
                {description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 pl-16">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs border border-lime-400 rounded-full px-4 py-1 text-lime-400 group-hover:bg-lime-400 group-hover:text-black transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Creative Process */}
      <section className="bg-black text-white max-w-7xl mx-auto px-6 py-24 md:px-20 select-none">
        {/* Header */}
        <div className="md:flex md:justify-between md:items-center mb-20 flex-col md:flex-row gap-8 md:gap-0">
          <div className="max-w-md">
            <h2 className="text-6xl font-extrabold tracking-tight leading-tight">
              CREATIVE{" "}
              <span className="italic bg-gradient-to-r from-lime-400 to-green-600 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-gray-400 leading-relaxed text-center md:text-left text-lg md:text-base">
            Let's break the mold. We're not afraid to challenge the status quo.
            Our team thrives on creating unique and memorable designs that make a statement.
          </p>
        </div>

        {/* Process Cards */}
        <div className="flex flex-col md:flex-row md:justify-between gap-20 relative">
          {creativeProcessSteps.map(({ number, title, description }, idx) => (
            <motion.div
              key={number}
              custom={idx}
              variants={fadeInVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative flex-1 bg-[#1E1E1E] p-12 rounded-3xl shadow-lg hover:shadow-[0_0_25px_rgba(132,204,22,0.9)] transition-shadow duration-500"
            >
              <h3 className="text-gradient font-semibold mb-6 text-2xl flex items-center gap-3">
                <span className="text-lime-400 font-mono text-xl">{number}</span>
                {title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">{description}</p>

              {/* Arrow between cards on desktop */}
              {idx < creativeProcessSteps.length - 1 && (
                <div
                  className="hidden md:flex absolute top-1/2 transform -translate-y-1/2 right-[-60px] items-center"
                  aria-hidden="true"
                >
                  <svg
                    className="w-12 h-12 text-lime-400 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14m0 0l-6-6m6 6l-6 6"
                    />
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
      </section>

      {/* Section: Team with scroll indicator */}
      <section className="relative bg-black min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-24 text-white select-none overflow-hidden">
        {/* Left Text */}
        <div className="md:w-1/2 max-w-3xl mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Our <br />
            <span className="text-white">
              mult disciplinary team brings together diverse talents allowing
            </span>
            <br />
            <span className="text-gray-600">
              approach projects with a holistic perspective that fuses creativity and
              functionality
            </span>
          </h1>

          {/* Scroll Down */}
          <div className="mt-16 flex items-center gap-4 cursor-pointer group max-w-max">
            <div className="w-12 h-20 border-2 border-gray-500 rounded-3xl flex items-start justify-center relative animate-bounce">
              <FiChevronDown className="text-gray-500 text-3xl mt-2 group-hover:text-lime-400 transition-colors" />
            </div>
            <div className="text-gray-500 text-sm">
              <p>Scroll Down</p>
              <p className="font-semibold text-white">For More</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="https://res.cloudinary.com/dcqfpnls6/image/upload/v1748761234/3d-rendering-abstract-black-white-background_ulelcn.jpg"
            alt="Team working"
            className="rounded-xl max-w-full w-[320px] md:w-[400px] lg:w-[480px] object-cover shadow-lg"
          />
        </div>
      </section>

      {/* Section: Collaborate */}
      <section className="relative bg-black min-h-[60vh] flex items-center justify-center px-6 md:px-20 py-24 text-white select-none overflow-hidden">
        {/* Main Text */}
        <h1 className="text-center max-w-6xl mx-auto text-6xl md:text-8xl font-extrabold leading-tight md:leading-[1.1]">
          <span className="block">LET’S</span>
          <span className="block italic text-[5.5rem] md:text-[8rem] text-gradient mt-2">
            Collaborate.
          </span>
        </h1>

        {/* Arrow icon top-right */}
        <div
          className="absolute top-10 right-6 md:right-20 text-yellow-400 text-4xl cursor-pointer select-none animate-pulse"
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
      </section>
    </>
  );
}
