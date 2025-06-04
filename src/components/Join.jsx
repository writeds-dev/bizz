import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import FAQSection from "../Pages/Faq";

const accordions = [
  {
    id: 1,
    title: "Business Innovation",
    content:
      "At b4bizz, we fuel your business growth by delivering cutting-edge innovation tailored to your goals. We help you rethink strategies, adopt new technologies, and create unique value propositions that set you apart from competitors.",
  },
  {
    id: 2,
    title: "Search Engine Optimization",
    content:
      "Boost your online visibility with b4bizz’s expert SEO services. We optimize your website with the latest techniques to improve rankings, increase organic traffic, and attract quality leads. From keyword research to technical SEO, our data-driven approach ensures your business reaches the right audience effectively and consistently.",
  },
  {
    id: 3,
    title: "Thinking Differently",
    content:
      "At b4bizz, we don’t just follow trends—we break the mold. Our team embraces bold thinking and fresh perspectives to craft strategies that stand out in a crowded marketplace.",
  },
  {
    id: 4,
    title: "Design to Development",
    content:
      "At b4bizz, we bridge creativity and technology to deliver exceptional digital experiences. From visionary design concepts to flawless development execution, our integrated approach ensures your ideas come to life with precision and impact.",
  },
];

const awards = [
  {
    id: 1,
    title: "Behance Awards",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/888/888859.png",
    bgColor: "bg-[#d0f000]",
  },
  {
    id: 2,
    title: "Design Awards",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/7157/7157762.png",
    bgColor: "bg-[#d0f000]",
  },
  {
    id: 3,
    title: "Coding Awards",
    iconUrl: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    bgColor: "bg-[#d0f000]",
  },
];

export default function Join() {
  const [openId, setOpenId] = useState(1);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-black text-white max-w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-20 space-y-20">
      {/* Hero Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        {/* Left Image */}
        <div className="md:col-span-5 rounded-xl overflow-hidden shadow-xl max-w-full mx-auto md:mx-0">
          <img
            src="https://res.cloudinary.com/dcqfpnls6/image/upload/v1748667119/3d-rendering-abstract-black-white_qaeu1u.jpg"
            alt="Why choose us"
            className="w-full h-auto object-cover rounded-xl max-w-full"
            loading="lazy"
          />
        </div>

        {/* Right Content */}
        <div className="md:col-span-7 flex flex-col gap-12">
          <div>
            <span className="inline-block px-5 py-1 rounded-full bg-gray-900 text-sm font-semibold tracking-wide uppercase mb-6">
              Why B4Bizz
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight max-w-xl mb-8 break-words">
              Unlock Your Growth
            </h2>
          </div>

          {/* Accordion */}
          <div className="space-y-6 max-w-xl">
            {accordions.map(({ id, title, content }) => {
              const isOpen = openId === id;
              return (
                <div key={id} className="border-b border-gray-700 pb-5">
                  <button
                    onClick={() => toggleAccordion(id)}
                    aria-expanded={isOpen}
                    aria-controls={`accordion-content-${id}`}
                    className="flex items-center justify-between w-full text-left font-semibold text-lg sm:text-xl focus:outline-none focus:ring-2 focus:ring-lime-400"
                  >
                    <span>{title}</span>
                    {isOpen ? (
                      <FiMinus className="w-6 h-6" aria-hidden="true" />
                    ) : (
                      <FiPlus className="w-6 h-6" aria-hidden="true" />
                    )}
                  </button>
                  {isOpen && (
                    <p
                      id={`accordion-content-${id}`}
                      className="mt-4 text-gray-400 leading-relaxed text-base sm:text-lg"
                    >
                      {content}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Awards */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl mx-auto sm:mx-0 px-4">
            {awards.map(({ id, title, iconUrl, bgColor }) => (
              <div
                key={id}
                className={`${bgColor} flex flex-col items-center justify-center p-10 rounded-3xl shadow-lg text-black cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-lime-400`}
                aria-label={`${title}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") toggleAccordion(id);
                }}
              >
                <img
                  src={iconUrl}
                  alt={`${title} icon`}
                  className="w-16 h-16 mb-6"
                  loading="lazy"
                />
                <h3 className="font-semibold text-2xl text-center">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
     <section className="bg-gradient-to-tr from-gray-900 via-black to-gray-900 rounded-3xl p-10 md:p-16 text-white max-w-7xl mx-auto space-y-14">
  {/* Header */}
  <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mb-8">
    {/* Icon */}
    <div className="w-24 h-24 opacity-90 flex-shrink-0 relative">
      <svg
        width="96"
        height="96"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto"
        aria-hidden="true"
      >
        <circle cx="40" cy="40" r="14" fill="#111" />
        {[...Array(6)].map((_, i) => {
          const angle = (i * 360) / 6;
          const rad = (angle * Math.PI) / 180;
          const x1 = 40 + Math.cos(rad) * 22;
          const y1 = 40 + Math.sin(rad) * 22;
          const x2 = 40 + Math.cos(rad) * 38;
          const y2 = 40 + Math.sin(rad) * 38;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#2c2c2c"
              strokeWidth="6"
              strokeLinecap="round"
              className="transition-colors duration-300 group-hover:stroke-lime-400"
            />
          );
        })}
      </svg>
      {/* Glow circle */}
      <div className="absolute inset-0 rounded-full shadow-[0_0_20px_8px_rgba(132,204,22,0.4)] pointer-events-none"></div>
    </div>

    {/* Title */}
    <h2 className="text-4xl md:text-5xl font-light leading-tight max-w-3xl">
      Our <span className="font-extrabold text-lime-400">process</span> of Creating Dreams to Reality
    </h2>
  </div>

  {/* Description */}
  <p className="max-w-3xl text-gray-300 text-base sm:text-lg leading-relaxed mx-auto tracking-wide">
    At B4Bizz, every project begins with a deep understanding of your business objectives. Our process is designed to deliver measurable results through strategic execution and continuous optimization. We begin with in-depth discovery and research, then implement high-performing campaigns across SEO, email marketing, social media, and paid channels—ensuring alignment with your brand and audience.
  </p>

  {/* Steps Grid */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
    {/* Step 1 */}
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg shadow-lime-900/60 hover:shadow-lime-500/80 transition-shadow duration-500 group cursor-default">
      <div className="text-lime-400 font-semibold mb-5 flex items-center gap-4">
        <div className="grid grid-cols-2 gap-1">
          <span className="w-5 h-5 rounded-full border-2 border-lime-400 animate-pulse" />
          <span className="w-5 h-5 rounded-full border-2 border-lime-400 animate-pulse delay-100" />
          <span className="w-5 h-5 rounded-full border-2 border-lime-400 animate-pulse delay-200" />
          <span className="w-5 h-5 rounded-full border-2 border-lime-400 animate-pulse delay-300" />
        </div>
        <span className="tracking-wide uppercase text-sm">Step</span>
        <span className="text-lime-400 font-bold text-xl">01</span>
      </div>
      <h3 className="text-white font-bold text-2xl mb-4">Discovery Phase</h3>
      <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xs">
        We conduct a comprehensive consultation to understand your brand, goals, competitors, and target audience. This phase sets the foundation for a strong strategy.
      </p>
    </div>

    {/* Step 2 */}
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg shadow-lime-900/60 hover:shadow-lime-500/80 transition-shadow duration-500 group cursor-default">
      <div className="text-lime-400 font-semibold mb-5 flex items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="w-10 h-10 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 17h16M4 7h16M4 12h16"
          />
        </svg>
        <span className="tracking-wide uppercase text-sm">Step</span>
        <span className="text-lime-400 font-bold text-xl">02</span>
      </div>
      <h3 className="text-white font-bold text-2xl mb-4">Implementation</h3>
      <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xs">
        We execute targeted digital campaigns across relevant platforms, aligning with your brand tone and business objectives. Every touchpoint is optimized for performance and reach.
      </p>
    </div>

    {/* Step 3 Image */}
    <div className="rounded-2xl overflow-hidden shadow-lg shadow-lime-800/50 max-w-full w-full hover:scale-[1.02] transition-transform duration-500 cursor-pointer">
      <img
        src="https://res.cloudinary.com/dcqfpnls6/image/upload/v1748761414/background-with-black-shape-texture-3d-illustration-3d-rendering_1_qhecvt.jpg"
        alt="Discovery phase team"
        className="w-full h-full object-cover rounded-2xl"
        loading="lazy"
      />
    </div>

    {/* Step 4 Image */}
    <div className="rounded-2xl overflow-hidden shadow-lg shadow-lime-800/50 max-w-full w-full hover:scale-[1.02] transition-transform duration-500 cursor-pointer">
      <img
        src="https://res.cloudinary.com/dcqfpnls6/image/upload/v1748761415/3d-rendering-abstract-black-white_2_qhmwsr.jpg"
        alt="Implementation phase team"
        className="w-full h-full object-cover rounded-2xl"
        loading="lazy"
      />
    </div>
  </div>
</section>


      <FAQSection />
    </section>
  );
}
