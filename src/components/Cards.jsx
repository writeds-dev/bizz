import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

/* --- Data (yours, kept) --- */
const services = [
  { id: 1, title: "Social Media", highlighted: true },
  { id: 2, title: "Content Writing", highlighted: false },
  { id: 3, title: "Video Production", highlighted: false },
];

const slides = [
  {
    title: "Motion Graphics",
    description:
      "At b4bizz, our motion graphics bring your brand story to life through captivating animation and dynamic visuals. We craft engaging videos that communicate your message clearly and creatively whether for social media, presentations, or advertisements. Combining design, storytelling, and cutting-edge animation techniques, our motion graphics help you capture attention, simplify complex ideas, and leave a lasting impression on your audience.",
    highlight: "Experience the perfect blend of creativity and functionality",
    imageUrl:
      "https://res.cloudinary.com/dcqfpnls6/image/upload/v1748663386/3d-rendering-abstract-black-white-geometric-background_rh6s3r.jpg",
  },
  {
    title: "Web Development",
    description:
      "At b4bizz, we build fast, responsive, and user-friendly websites tailored to your business needs. Whether it’s a sleek landing page, a dynamic e-commerce platform, or a complex web application, our expert developers use the latest technologies to create seamless digital experiences that drive engagement and conversions. From front-end design to back-end functionality, we ensure your website is optimized for performance, accessibility, and scalability.",
    highlight: "Built to perform, designed to impress",
    imageUrl:
      "https://res.cloudinary.com/dcqfpnls6/image/upload/v1748663382/3d-print-surrealistic-green-bird-frame-playful-character-design_sq73za.jpg",
  },
];

export default function CreativeCardsSection() {
  const [activeService, setActiveService] = useState(1);
  const [current, setCurrent] = useState(0);

  const navigate = useNavigate();
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* --- Carousel helpers --- */
  const total = slides.length;
  const prevSlide = () => setCurrent((p) => (p === 0 ? total - 1 : p - 1));
  const nextSlide = () => setCurrent((p) => (p === total - 1 ? 0 : p + 1));

  // Autoplay (pause on hover, on tab hidden, and for reduced-motion)
  const autoplayRef = useRef(null);
  const hoveringRef = useRef(false);

  useEffect(() => {
    if (prefersReduced) return; // respect OS setting
    const tick = () => !hoveringRef.current && setCurrent((p) => (p === total - 1 ? 0 : p + 1));
    autoplayRef.current = setInterval(tick, 5000);
    const onVis = () => {
      if (document.hidden) {
        clearInterval(autoplayRef.current);
      } else {
        autoplayRef.current = setInterval(tick, 5000);
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      clearInterval(autoplayRef.current);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [total, prefersReduced]);

  // Keyboard navigation
  const carouselRegionRef = useRef(null);
  useEffect(() => {
    const el = carouselRegionRef.current;
    if (!el) return;
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, []);

  // Touch swipe
  const touchStartX = useRef(0);
  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) (dx > 0 ? prevSlide() : nextSlide());
  };

  // Progress bar
  const progress = (current + 1) / total;

  const gotoForm = () => navigate("/contact");

  return (
    <section
      className="
        relative mx-auto max-w-7xl
        rounded-2xl
        bg-gradient-to-b from-[#0b0c0b] via-[#0f1110] to-[#0b0c0b]
        text-white
        py-10 sm:py-14 lg:py-20
        px-4 sm:px-6 md:px-10 lg:px-16
        overflow-hidden
      "
    >
      {/* Decorative glows */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-lime-400/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl" />

      {/* Top: image + content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 sm:gap-14">
        {/* Left image */}
        <div className="w-full max-w-md lg:max-w-lg rounded-2xl overflow-hidden ring-1 ring-white/5 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.6)]">
          <img
            src="https://res.cloudinary.com/dcqfpnls6/image/upload/v1748661312/two-abstract-circle-shapes-black-background-monochrome-illustration-3d-render_vtpive.jpg"
            alt="Monochrome geometric spheres"
            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.04]"
            loading="lazy"
          />
        </div>

        {/* Right text */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 sm:gap-4">
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12 text-lime-400 flex-shrink-0"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 2l7 7-7 7-7-7 7-7z" />
              <path d="M19 15v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-4" />
            </svg>
            <h2 className="text-[clamp(1.8rem,1.2rem+3vw,3.5rem)] font-extrabold tracking-tight leading-tight">
              Best Creative & Digital Agency
            </h2>
          </div>

          <p className="mt-4 text-zinc-300 text-[clamp(0.98rem,0.92rem+0.3vw,1.15rem)] leading-relaxed max-w-2xl">
            At B4bizz, we specialize in crafting innovative digital solutions that drive brand growth
            and engagement. Our expert team blends creativity, technology, and strategy to deliver
            tailored marketing, design, and content services.
          </p>

          {/* Service buttons */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {services.map(({ id, title }) => {
              const isActive = activeService === id;
              return (
                <button
                  key={id}
                  onClick={() => setActiveService(id)}
                  aria-pressed={isActive}
                  className={[
                    "relative rounded-2xl px-5 py-5 sm:py-6 text-left transition-colors duration-300 focus:outline-none",
                    "ring-1 ring-inset",
                    isActive
                      ? "bg-lime-400 text-black ring-lime-300 shadow-[0_12px_40px_-15px_rgba(163,230,53,0.6)]"
                      : "bg-white/0 text-zinc-300 ring-white/10 hover:bg-white/[0.03] hover:text-white",
                  ].join(" ")}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div
                      className={[
                        "w-10 h-10 rounded-full grid place-items-center font-bold",
                        isActive ? "bg-black text-lime-400" : "bg-zinc-900 text-zinc-400",
                      ].join(" ")}
                    >
                      {id < 10 ? `0${id}` : id}
                    </div>
                    <h3 className="font-semibold text-[clamp(1rem,0.95rem+0.3vw,1.15rem)] truncate">
                      {title}
                    </h3>
                  </div>

                  {/* caret when active */}
                  {isActive && (
                    <svg
                      className="absolute top-4 right-4 w-6 h-6 text-black"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>

          {/* CTA */}
          <button
            onClick={gotoForm}
            className="
              mt-8 sm:mt-10
              inline-flex items-center justify-center
              rounded-full
              bg-gradient-to-r from-lime-400 to-teal-500
              hover:from-teal-500 hover:to-lime-400
              px-10 sm:px-12 py-3.5 sm:py-4
              text-black font-semibold uppercase tracking-wide
              shadow-[0_18px_60px_-20px_rgba(20,184,166,0.6)]
              transition active:scale-[0.98]
              focus:outline-none focus:ring-4 focus:ring-teal-400/60
            "
            aria-label="Explore more"
          >
            Explore More
          </button>
        </div>
      </div>

      {/* Bottom: Carousel */}
      <section
        ref={carouselRegionRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Recent work"
        tabIndex={0}
        className="
          mt-12 sm:mt-16
          bg-white/[0.03] ring-1 ring-white/10
          rounded-3xl
          px-4 sm:px-6 md:px-10
          py-10 sm:py-12 md:py-16
          grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10
        "
        onMouseEnter={() => (hoveringRef.current = true)}
        onMouseLeave={() => (hoveringRef.current = false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Left column */}
        <div className="md:col-span-1 flex flex-col min-w-0">
          <div>
            <span className="inline-flex items-center rounded-full border border-white/60 px-4 py-1.5 text-xs sm:text-sm uppercase tracking-wide hover:bg-white hover:text-black transition">
              Recent Work
            </span>

            <p className="mt-6 text-zinc-300 text-[clamp(0.98rem,0.9rem+0.3vw,1.1rem)] leading-relaxed whitespace-pre-wrap">
              {slides[current].description}
            </p>

            <h3 className="mt-5 font-semibold text-[clamp(1.05rem,0.9rem+0.8vw,1.6rem)]">
              {slides[current].highlight}
            </h3>
          </div>

          {/* Controls + progress */}
          <div className="mt-8 md:mt-auto flex items-center justify-between gap-4">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-lime-400/60"
            >
              &#8592;
            </button>

            <div className="flex-1">
              <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-lime-400 to-teal-500"
                  style={{
                    width: `${progress * 100}%`,
                    transition: prefersReduced ? "none" : "width 500ms ease",
                  }}
                  aria-hidden="true"
                />
              </div>
              <div className="mt-2 text-center text-sm tabular-nums select-none">
                {current + 1} / {total}
              </div>
            </div>

            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-lime-400/60"
            >
              &#8594;
            </button>
          </div>

          {/* Dots */}
          <div className="mt-6 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={current === i ? "true" : "false"}
                className={[
                  "h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-lime-400/60",
                  current === i ? "w-6 bg-lime-400" : "w-2.5 bg-white/30 hover:bg-white/50",
                ].join(" ")}
              />
            ))}
          </div>
        </div>

        {/* Right media */}
        <div className="md:col-span-2 relative min-w-0">
          <div className="relative rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-[0_25px_80px_-30px_rgba(0,0,0,0.7)]">
            <img
              src={slides[current].imageUrl}
              alt={slides[current].title}
              className="w-full h-auto object-cover max-h-[320px] sm:max-h-[420px] md:max-h-[520px]"
              loading="lazy"
            />
            <h2
              className="absolute inset-x-5 sm:inset-x-8 bottom-5 sm:bottom-7
                         text-[clamp(1.8rem,1.2rem+3vw,3.5rem)]
                         font-extrabold uppercase leading-tight
                         drop-shadow-[0_6px_24px_rgba(0,0,0,0.8)] pointer-events-none select-none"
              aria-live="polite"
            >
              {slides[current].title}
            </h2>
          </div>
        </div>
      </section>
    </section>
  );
}
