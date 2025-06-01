import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import FAQSection from "../Pages/Faq";

const accordions = [
  {
    id: 1,
    title: "Business Innovation",
    content:
      "At b4bizz, we fuel your business growth by delivering cutting-edge innovation tailored to your goals. We help you rethink strategies, adopt new technologies, and create unique value propositions that set you apart from competitors.",
    open: true,
  },
  {
    id: 2,
    title: "Search Engine Optimization",
    content:
      "Boost your online visibility with b4bizz’s expert SEO services. We optimize your website with the latest techniques to improve rankings, increase organic traffic, and attract quality leads. From keyword research to technical SEO, our data-driven approach ensures your business reaches the right audience effectively and consistently.",
    open: false,
  },
  {
    id: 3,
    title: "Thinking Differently",
    content:
      "At b4bizz, we don’t just follow trends—we break the mold. Our team embraces bold thinking and fresh perspectives to craft strategies that stand out in a crowded marketplace.",
    open: false,
  },
  {
    id: 4,
    title: "Design to Development",
    content:
      "At b4bizz, we bridge creativity and technology to deliver exceptional digital experiences. From visionary design concepts to flawless development execution, our integrated approach ensures your ideas come to life with precision and impact.",
    open: false,
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

const processSteps = [
  {
    title: "Research",
    icon: (
      <svg
        className="w-8 h-8 mb-4 mx-auto stroke-current text-gray-400"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12L19 12" />
        <path d="M12 5L12 19" />
      </svg>
    ),
    description:
      "B4BIZ specializes in providing tailored solutions across various domains, including business consultancy, branding, marketing, sales, human resources, and more.",
  },
  {
    title: "Concept",
    icon: (
      <svg
        className="w-8 h-8 mb-4 mx-auto stroke-current text-gray-400"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 6L16 6L16 18L8 18Z" />
        <circle cx="12" cy="12" r="1" />
      </svg>
    ),
    description:
      "Terminators on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position.",
  },
  {
    title: "Implement",
    icon: (
      <svg
        className="w-8 h-8 mb-4 mx-auto stroke-current text-gray-400"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 12L20 12" />
        <path d="M12 4L12 20" />
      </svg>
    ),
    description:
      "At B4BIZ, we are remarkably precise in estimating and planning, drawing on past experiences to deliver effective solutions.",
  },
  {
    title: "Handover",
    icon: (
      <svg
        className="w-8 h-8 mb-4 mx-auto stroke-current text-gray-400"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="6" />
        <path d="M8 12H16" />
        <path d="M12 8V16" />
      </svg>
    ),
    description:
      "The project handover marks the formal transition of responsibilities from the project team to the client or operations team.",
  },
];

export default function Join() {
  const [openId, setOpenId] = useState(1);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      className="bg-black text-white max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-16 overflow-x-hidden"
      style={{ boxSizing: "border-box" }}
    >
      {/* Left Image */}
      <div className="md:col-span-5 rounded-xl overflow-hidden shadow-lg max-w-full mx-auto md:mx-0">
        <img
          src="https://res.cloudinary.com/dcqfpnls6/image/upload/v1748667119/3d-rendering-abstract-black-white_qaeu1u.jpg"
          alt="why choose us"
          className="w-full h-auto object-cover rounded-xl max-w-full"
          style={{ display: "block" }}
        />
      </div>

      {/* Right Content */}
      <div className="md:col-span-7 flex flex-col gap-10 max-w-full min-w-0">
        <div>
          <span className="inline-block px-4 py-1 rounded-full bg-gray-800 text-sm font-semibold tracking-wide uppercase mb-5">
            Why B4Bizz
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight max-w-xl mb-8 break-words min-w-0">
            Unlock Your Growth
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-6 max-w-xl min-w-0">
          {accordions.map(({ id, title, content }) => (
            <div key={id} className="border-b border-gray-700 pb-5">
              <button
                className="flex items-center justify-between w-full text-left font-semibold text-lg md:text-xl"
                onClick={() => toggleAccordion(id)}
                aria-expanded={openId === id}
                aria-controls={`accordion-content-${id}`}
              >
                <span>{title}</span>
                {openId === id ? (
                  <FiMinus className="w-6 h-6" />
                ) : (
                  <FiPlus className="w-6 h-6" />
                )}
              </button>
              {openId === id && (
                <p
                  id={`accordion-content-${id}`}
                  className="mt-4 text-gray-400 leading-relaxed text-base md:text-lg break-words"
                >
                  {content}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Awards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl mx-auto min-w-0 px-4">
  {awards.map(({ id, title, iconUrl, bgColor }) => (
    <div
      key={id}
      className={`${bgColor} flex flex-col items-center justify-center p-10 rounded-2xl shadow-xl text-white cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-indigo-500`}
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
        className="w-14 h-14 mb-6"
        loading="lazy"
      />
      <h3 className="font-semibold text-xl md:text-2xl text-center">{title}</h3>
    </div>
  ))}
</div>

      </div>

      {/* Process Section */}
     <section className="bg-black text-white px-6 py-12 max-w-7xl mx-auto">
  {/* Section Header */}
  <div className="flex items-center mb-12">
    <div className="mr-6">
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-80"
      >
        <circle cx="40" cy="40" r="12" fill="#111" />
        {[...Array(6)].map((_, i) => {
          const angle = (i * 360) / 6;
          const rad = (angle * Math.PI) / 180;
          const x1 = 40 + Math.cos(rad) * 20;
          const y1 = 40 + Math.sin(rad) * 20;
          const x2 = 40 + Math.cos(rad) * 35;
          const y2 = 40 + Math.sin(rad) * 35;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#222"
              strokeWidth="6"
              strokeLinecap="round"
            />
          );
        })}
      </svg>
    </div>
    <h2 className="text-4xl font-light leading-tight">
      Our{" "}
      <span className="font-extrabold text-lime-400">process</span> of Creating Dreams to Reality
    </h2>
  </div>

  {/* Description */}
  <p className="max-w-3xl mb-14 text-sm sm:text-base">
    At B4Bizz, every project begins with a deep understanding of your business objectives. Our process is designed to deliver measurable results through strategic execution and continuous optimization. We begin with in-depth discovery and research, then implement high-performing campaigns across SEO, email marketing, social media, and paid channels—ensuring alignment with your brand and audience.
  </p>

  {/* Steps Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
    {/* Step 01 Card */}
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl p-6 flex flex-col justify-between max-w-md w-full">
      <div className="mb-4 flex items-center space-x-2 text-lime-400 font-semibold">
        <div className="grid grid-cols-2 gap-2 mr-3">
          <span className="w-4 h-4 rounded-full border-2 border-lime-400" />
          <span className="w-4 h-4 rounded-full border-2 border-lime-400" />
          <span className="w-4 h-4 rounded-full border-2 border-lime-400" />
          <span className="w-4 h-4 rounded-full border-2 border-lime-400" />
        </div>
        <span>STEP</span>
        <span className="text-lime-400 font-bold">01</span>
      </div>
      <div>
        <h3 className="text-white font-bold text-lg mb-2">Discovery Phase</h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          We conduct a comprehensive consultation to understand your brand, goals, competitors, and target audience. This phase sets the foundation for a strong strategy.
        </p>
      </div>
    </div>

    {/* Step 01 Image */}
    <div className="rounded-xl overflow-hidden max-w-md w-full">
      <img
        src="https://res.cloudinary.com/dcqfpnls6/image/upload/v1748761414/background-with-black-shape-texture-3d-illustration-3d-rendering_1_qhecvt.jpg"
        alt="Discovery phase team"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Step 02 Image */}
    <div className="rounded-xl overflow-hidden max-w-md w-full">
      <img
        src="https://res.cloudinary.com/dcqfpnls6/image/upload/v1748761415/3d-rendering-abstract-black-white_2_qhmwsr.jpg"
        alt="Implementation phase team"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Step 02 Card */}
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl p-6 flex flex-col justify-between max-w-md w-full">
      <div className="mb-4 flex items-center space-x-2 text-lime-400 font-semibold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 mr-3"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 17h16M4 7h16M4 12h16" />
        </svg>
        <span>STEP</span>
        <span className="text-lime-400 font-bold">02</span>
      </div>
      <div>
        <h3 className="text-white font-bold text-lg mb-2">Implementation</h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          We execute targeted digital campaigns across relevant platforms, aligning with your brand tone and business objectives. Every touchpoint is optimized for performance and reach.
        </p>
      </div>
    </div>
  </div>
</section>

 <FAQSection/>

    </section>
  );
}
