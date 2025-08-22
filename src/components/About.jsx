import React, { useEffect, useRef, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function About() {
  const containerRef = useRef(null);
  const linesRef = useRef([]);
  const [visibleLines, setVisibleLines] = useState([]);

  // Reset the refs array length on every render to avoid stale elements
  linesRef.current = [];

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      // Fallback if IO isn't supported
      setVisibleLines(Array.from({ length: introTextLines.length }, (_, i) => i));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // Use a Set to avoid duplicates while batching updates
        setVisibleLines((prev) => {
          const next = new Set(prev);
          for (const entry of entries) {
            const index = Number(("")?.dataset?.index);
            if (Number.isNaN(index)) continue;
            if (entry.isIntersecting) next.add(index);
            else next.delete(index);
          }
          return Array.from(next);
        });
      },
      {
        // Slight negative margin so lines animate just before fully visible
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.25,
      }
    );

    linesRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const introTextLines = [
    "b4bizz is a full-service digital agency dedicated to empowering businesses",
    "with innovative solutions tailored to their unique needs.",
    "From cutting-edge marketing strategies and SEO optimization to creative content creation and brand development,",
    "we provide end-to-end services that drive growth and elevate your brand’s presence.",
  ];

  // Helpers
  const addLineRef = (el) => {
    if (el && !linesRef.current.includes(el)) {
      linesRef.current.push(el);
    }
  };

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <section
      ref={containerRef}
      data-scroll
      data-scroll-section
      data-scroll-speed="0.01"
      className="
        relative w-full overflow-hidden
        bg-gradient-to-b from-[#151716] via-[#1b1d1c] to-[#141514]
        rounded-t-3xl
         sm:py-16 md:py-20 lg:py-24
      "
      aria-labelledby="about-title"
    >
      {/* Decorative glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -right-24 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Intro Block */}
        <div
          className="
            mb-10 sm:mb-12 md:mb-16
            border-y border-zinc-800/70
            py-6 sm:py-8 md:py-10
            backdrop-blur-[2px]
          "
          style={{ overflowWrap: "anywhere" }}
        >
          <h2 id="about-title" className="sr-only">
            About b4bizz
          </h2>

          {introTextLines.map((line, i) => {
            const isVisible = visibleLines.includes(i) || prefersReducedMotion;
            return (
              <h3
                key={i}
                data-index={i}
                ref={addLineRef}
                className={`
                  font-semibold text-white
                  leading-[1.35]
                  max-w-[80ch]
                  transition-all duration-700 ease-out will-change-transform
                  motion-safe:transform
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                  text-[clamp(1.1rem,1.3rem+1vw,1.9rem)]
                `}
                style={{
                  wordBreak: "break-word",
                  transitionDelay: isVisible ? `${i * 100}ms` : "0ms",
                }}
              >
                {line}
              </h3>
            );
          })}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-8 md:gap-12 md:grid-cols-2 items-center">
          {/* Left Text Section */}
          <div className="min-w-0">
            <p className="inline-flex items-center gap-2 text-emerald-300/90 text-xs tracking-[0.2em] uppercase">
              <span className="inline-block h-[6px] w-[6px] rounded-full bg-emerald-400/80" />
              Our approach
            </p>

            <h3
              className="
                mt-3
                font-extrabold text-white
                tracking-tight
                text-[clamp(1.6rem,1.2rem+2vw,2.6rem)]
              "
            >
              Strategy-first, results-obsessed.
            </h3>

            <p
              className="
                mt-4 sm:mt-5 md:mt-6
                text-zinc-300/90
                text-[clamp(0.98rem,0.9rem+0.3vw,1.15rem)]
                leading-relaxed
                max-w-[60ch]
              "
            >
              At b4bizz, we believe every business is unique, so our approach is tailored to your
              specific goals and challenges. We start by deeply understanding your brand, audience,
              and market landscape.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#read-more"
                className="
                  inline-flex items-center gap-3
                  rounded-full
                  bg-emerald-700
                  px-6 sm:px-7 py-3
                  text-zinc-100
                  uppercase tracking-wider font-semibold text-[0.9rem]
                  shadow-[0_8px_24px_-10px_rgba(16,185,129,0.55)]
                  transition
                  hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400/70
                  active:scale-[0.98]
                "
                aria-label="Read more about our approach"
              >
                Read more
                <FaArrowUpLong className="rotate-45 translate-y-[1px]" aria-hidden="true" />
              </a>

              <a
                href="#contact"
                className="
                  inline-flex items-center
                  rounded-full border border-emerald-600/60
                  px-5 py-3
                  text-emerald-300
                  font-medium
                  transition hover:bg-emerald-600/10 focus:outline-none focus:ring-2 focus:ring-emerald-400/70
                "
              >
                Talk to an expert
              </a>
            </div>

            {/* Quick bullets */}
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-zinc-300/90 text-sm">
              {[
                "Full-funnel strategy",
                "SEO & content engines",
                "Brand & creative systems",
                "Performance marketing",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-[6px] inline-block h-2 w-2 rounded-full bg-emerald-400/80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Video Section */}
          <div className="min-w-0">
            <div
              className="
                group relative overflow-hidden rounded-2xl
                ring-1 ring-white/5
                shadow-[0_15px_60px_-20px_rgba(0,0,0,0.6)]
                bg-zinc-900/40
              "
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-teal-400/10 opacity-0 group-hover:opacity-100 transition" />
              <video
                src="https://res.cloudinary.com/dcqfpnls6/video/upload/v1748660341/zv4ueq9q5zaruzj6qnfb.mp4"
                className="w-full h-auto aspect-video object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1280' height='720'%3E%3Crect width='100%25' height='100%25' fill='%231a1c1b'/%3E%3C/svg%3E"
                aria-label="About b4bizz video"
              />
              {/* Subtle overlay label */}
              <div className="absolute left-3 top-3 rounded-full bg-black/50 px-3 py-1 text-xs text-zinc-200">
                Showreel
              </div>
            </div>

            {/* Stats / trust row */}
            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              {[
                { k: "120+", v: "Projects" },
                { k: "35+", v: "Industries" },
                { k: "4.9★", v: "Avg. rating" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/5 bg-white/[0.02] py-4"
                >
                  <div className="text-white text-lg font-bold">{s.k}</div>
                  <div className="text-zinc-400 text-xs uppercase tracking-wider">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Read more anchor (optional target) */}
        <div id="read-more" className="sr-only" aria-hidden="true" />
      </div>
    </section>
  );
}

export default About;
