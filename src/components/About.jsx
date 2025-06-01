import React, { useEffect, useRef, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function About() {
  const containerRef = useRef(null);
  const linesRef = useRef([]);
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    if (!linesRef.current.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = linesRef.current.indexOf(entry.target);
          if (entry.isIntersecting) {
            setVisibleLines((prev) => {
              if (!prev.includes(index)) return [...prev, index];
              return prev;
            });
          } else {
            setVisibleLines((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      { threshold: 0.3 }
    );

    linesRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      linesRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const introTextLines = [
    "b4bizz is a full-service digital agency dedicated to empowering businesses",
    "with innovative solutions tailored to their unique needs.",
    "From cutting-edge marketing strategies and SEO optimization to creative content creation and brand development,",
    "we provide end-to-end services that drive growth and elevate your brand’s presence.",
  ];

  return (
    <section
      ref={containerRef}
      data-scroll
      data-scroll-section
      data-scroll-speed="0.01"
      className="w-full bg-[#1d1f1e] rounded-t-3xl py-12 sm:py-16 md:py-20 lg:py-24 overflow-x-hidden box-border"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 max-w-7xl box-border">
        {/* Intro Text */}
        <div
          className="mb-10 sm:mb-12 md:mb-16 border-t border-b border-zinc-700 pb-6 sm:pb-8 md:pb-10 max-w-full"
          style={{ overflowWrap: "break-word", boxSizing: "border-box" }}
        >
          {introTextLines.map((line, i) => (
            <h2
              key={i}
              ref={(el) => (linesRef.current[i] = el)}
              className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-relaxed sm:leading-snug md:leading-snug lg:leading-snug max-w-full break-words box-border transition-all duration-700 ease-out transform ${
                visibleLines.includes(i)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ wordBreak: "break-word", boxSizing: "border-box" }}
            >
              {line}
            </h2>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12">
          {/* Left Text Section */}
          <div className="md:w-1/2 text-center md:text-left px-0 sm:px-0 min-w-0 box-border">
            <h3 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white mb-5 sm:mb-6 md:mb-8">
              Our approach:
            </h3>
            <p className="text-zinc-300 text-base sm:text-lg md:text-xl leading-relaxed tracking-wide max-w-full sm:max-w-xl mx-auto md:mx-0 break-words box-border">
              At b4bizz, we believe every business is unique, so our approach is
              tailored to your specific goals and challenges. We start by deeply
              understanding your brand, audience, and market landscape.
            </p>
            <button
              className="mt-6 sm:mt-8 inline-flex items-center gap-3 bg-[#004D43] text-zinc-100 px-6 sm:px-8 py-3 rounded-full uppercase tracking-wider font-semibold text-sm sm:text-base hover:bg-[#006655] transition"
              aria-label="Read more about our approach"
            >
              Read more
              <FaArrowUpLong className="rotate-45 origin-center translate-y-[2px]" />
            </button>
          </div>

          {/* Right Video Section */}
          <div className="md:w-1/2 mt-6 md:mt-0 rounded-xl overflow-hidden shadow-lg px-0 sm:px-0 min-w-0 box-border">
            <video
              src="https://res.cloudinary.com/dcqfpnls6/video/upload/v1748660341/zv4ueq9q5zaruzj6qnfb.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto aspect-video object-cover max-w-full"
              aria-label="About b4bizz video"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
