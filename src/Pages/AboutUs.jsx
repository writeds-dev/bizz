import React from "react";
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const accentColor = "#A3E635";

  const steps = [
    {
      number: "01",
      title: "Project Brief",
      description:
        "Clearly define project. We visualize entire user experience interaction goals.",
    },
    {
      number: "02",
      title: "Mapping",
      description:
        "Defining a clear roadmap by identifying objectives, challenges and opportunities.",
    },
    {
      number: "03",
      title: "Execution",
      description:
        "Transforming strategies into action with precision ensuring seamless progress quality.",
    },
    {
      number: "04",
      title: "Launch",
      description:
        "Delivering a powerful debut showcasing the final product or service with confidence.",
    },
  ];

  const expertiseList = [
    "Brand Strategy",
    "Digital Marketing",
    "Web Design",
    "UI/UX Design",
  ];

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/contact");
  };

  return (
    <>
      {/* First Section */}
      <section className="relative min-h-screen bg-black flex flex-col justify-center items-center px-6 sm:px-10 md:px-16 py-20 text-center md:text-left overflow-hidden text-white">
        {/* Radial Glow behind content */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-32 left-1/2 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, ${accentColor}80, transparent)`,
              transform: "translateX(-50%)",
            }}
          />
        </div>

        <div className="relative max-w-5xl space-y-8">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white animate-fade-in-up">
            Deliver
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(90deg, ${accentColor}, #7cbf00)`,
              }}
            >
              ing
            </span>{" "}
            <br />
            <span className="block">Creative </span>
            <span
              className="italic text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(90deg, ${accentColor}, #7cbf00)`,
              }}
            >
              strategy
            </span>
          </h1>

          {/* Labels */}
          <div className="flex justify-center md:justify-start gap-3 md:gap-6 flex-wrap">
            <TagLabel bgColor={accentColor} textColor="text-black" text="Agency" />
            <TagLabel bgColor="#FFFFFF" textColor="text-black" text="Expert" />
            <TagLabel bgColor="#D9F99D" textColor="text-black" text="Innovative" />
          </div>

          {/* Subtext */}
          <p className="text-white text-sm sm:text-base md:text-lg max-w-3xl mx-auto md:mx-0 leading-relaxed animate-fade-in-up delay-200">
            Transforming Ideas into Reality. Crafting the Digital Future, One Design
            at a Time. Shaping Tomorrow, Today. Designing Digital Futures with
            Innovation and Precision.
          </p>
        </div>

        {/* Custom animations */}
        <style>{`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-up {
            animation: fadeInUp 1s ease forwards;
          }
          .delay-200 {
            animation-delay: 0.2s;
          }
        `}</style>
      </section>

      {/* Second Section */}
      <section className="bg-black flex flex-col md:flex-row items-center md:items-start px-6 sm:px-10 md:px-20 py-16 md:py-20 gap-12 md:gap-20">
        {/* Left image */}
        <div className="w-full md:w-1/3 rounded-xl overflow-hidden shadow-lg flex-shrink-0">
          <img
            src="https://res.cloudinary.com/dcqfpnls6/image/upload/v1748791863/abstract-modern-minimalist-composition-background_1_q3oguf.png"
            alt="Team working"
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>

        {/* Right content */}
        <div className="w-full md:w-2/3 text-white max-w-4xl">
          <p className="text-sm text-gray-400 mb-4 md:mb-6">About Our B4bizz</p>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold leading-relaxed mb-10">
            B4Bizz is more than just a design agency — we’re your partner in driving
            innovative and sustainable business growth through exceptional design
            solutions. At B4Bizz, our mission is to create stunning, strategic designs
            that align perfectly with the goals and values of your business and
            customers.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 justify-center md:justify-start">
            <Stat number="20" suffix="+" label="Our Successful Projects" />
            <Stat number="02" suffix="+" label="Design Specialized Experts" />
            <Stat number="96" suffix="%" label="Awards Winning Agency" />
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="bg-black py-20 px-6 sm:px-10 md:px-20 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mb-16 gap-8 md:gap-0">
          {/* Title */}
          <div className="max-w-full md:max-w-lg text-center md:text-left">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 leading-tight tracking-tight"
            >
              Our Ideas{" "}
              <span
                className="italic bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg, #A3E635, #7cbf00)",
                }}
              >
                and values
              </span>
            </h2>
            <div
              className="w-16 sm:w-20 h-1 rounded-full mt-1 mx-auto md:mx-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(163,230,53,0.7), rgba(124,191,0,0.8))",
              }}
            />
          </div>

          {/* Contact Button */}
          <button
            onClick={handleSubmit}
            className="flex items-center gap-3 bg-[#A3E635] hover:bg-[#7cbf00] text-black font-semibold rounded-full py-3 px-7 shadow-lg transition-transform transform hover:scale-105 whitespace-nowrap max-w-max mx-auto md:mx-0"
            aria-label="Contact Now"
          >
            <span className="text-xl">&raquo;</span>
            Contact Now
          </button>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {steps.map(({ number, title, description }) => (
            <div
              key={number}
              className="bg-neutral-900 rounded-2xl p-6 sm:p-8 flex flex-col shadow-xl hover:shadow-[0_0_30px_rgba(163,230,53,0.9)] transition-shadow duration-300 cursor-pointer group"
            >
              <div
                className="text-[#A3E635] text-2xl font-bold mb-5 tracking-wider"
                aria-label={`Step ${number}`}
              >
                {number}
              </div>
              <h3 className="text-white font-extrabold text-lg sm:text-xl mb-4 group-hover:text-[#A3E635] transition-colors duration-300">
                {title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed flex-grow break-words">
                {description}
              </p>
              {/* Animated underline on hover */}
              <div className="mt-6 h-1 w-12 bg-[#A3E635] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* Fourth Section */}
      <section className="bg-black min-h-screen px-6 sm:px-10 md:px-20 py-20 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left Image */}
          <div className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-lg flex-shrink-0">
            <img
              src="https://res.cloudinary.com/dcqfpnls6/image/upload/v1748761256/3d-rendering-latern-still-life_tteppt.jpg"
              alt="Team working"
              className="w-full h-auto object-cover rounded-3xl"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 max-w-lg">
            <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
              <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight max-w-md">
                Explore our{" "}
                <span
                  className="italic bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #A3E635, #7cbf00)",
                  }}
                >
                  expertise
                </span>
              </h2>

              <button
                onClick={handleSubmit}
                className="flex items-center gap-3 bg-[#A3E635] hover:bg-[#7cbf00] text-black font-semibold rounded-full py-3 px-6 shadow-lg transition-transform transform hover:scale-105 whitespace-nowrap max-w-max"
                aria-label="Explore all"
              >
                <span className="text-xl">&raquo;</span>
                Explore all
              </button>
            </div>

            <p className="text-gray-300 mb-10 leading-relaxed">
              Our Best Design Solution Agency for you. I was thoroughly impressed by
              the professionalism demonstrated throughout the project. The team
              showed a deep understanding.
            </p>

            <ul className="space-y-4 max-w-md">
              {expertiseList.map((item, idx) => (
                <li
                  key={idx}
                  className="bg-neutral-900 rounded-xl p-4 cursor-pointer hover:bg-[#A3E635]/20 transition-colors flex items-center gap-4"
                >
                  <span className="text-[#A3E635] font-mono w-8 text-lg">{`0${idx + 1}.`}</span>
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ number, suffix, label }) {
  return (
    <div className="min-w-[140px] sm:min-w-[160px]">
      <div className="text-4xl sm:text-5xl font-extrabold text-white flex items-baseline">
        {number}
        <span className="text-[#A3E635] text-3xl ml-1">{suffix}</span>
      </div>
      <p className="text-gray-400 mt-1 text-sm sm:text-base">{label}</p>
    </div>
  );
}

function TagLabel({ bgColor, textColor, text }) {
  return (
    <div
      className={`inline-flex items-center px-4 py-2 rounded-full shadow-lg cursor-pointer select-none transition-transform transform hover:scale-105 font-semibold ${textColor}`}
      style={{ backgroundColor: bgColor }}
      role="button"
      tabIndex={0}
    >
      <span>{text}</span>
      <ArrowIcon className="ml-2 w-4 h-4" />
    </div>
  );
}

function ArrowIcon({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
