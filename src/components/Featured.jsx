import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

// Utility: respects reduced motion
const usePrefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

const CARD_WORD_VARIANTS = {
  initial: { y: "100%" },
  enter: (i) => ({
    y: "0%",
    transition: { ease: [0.22, 1, 0.36, 1], delay: i * 0.06 },
  }),
  exit: (i) => ({
    y: "100%",
    transition: { ease: [0.22, 1, 0.36, 1], delay: i * 0.03 },
  }),
};

const cardsData = [
  {
    eyebrow: "Web Design Agency",
    word: "DESIGN",
    align: "left", // controls where the floating word sits
    img: "https://res.cloudinary.com/dcqfpnls6/image/upload/v1749000166/refreshing-soda-bottle-blue-liquid-wave-generated-by-ai_uy3veg.jpg",
    alt: "Featured web design showcase",
  },
  {
    eyebrow: "Web Development Agency",
    word: "DEV",
    align: "right",
    img: "https://res.cloudinary.com/dcqfpnls6/image/upload/v1749000165/abstract-architectural-white-interior-from-array-concrete-cubes-with-large-windows-3d_o9i9dv.jpg",
    alt: "Featured web development interior abstraction",
  },
];

function FeaturedCard({ eyebrow, word, align = "left", img, alt }) {
  const controls = useAnimation();
  const prefersReduced = usePrefersReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-10% 0px -10% 0px", amount: 0.4 });

  useEffect(() => {
    if (prefersReduced) return;
    if (inView) controls.start("enter");
  }, [inView, controls, prefersReduced]);

  const handleHoverStart = () => !prefersReduced && controls.start("enter");
  const handleHoverEnd = () => !prefersReduced && controls.start("exit");

  const isLeft = align === "left";

  return (
    <motion.div
      ref={ref}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onFocus={handleHoverStart}
      onBlur={handleHoverEnd}
      role="button"
      tabIndex={0}
      className="group relative cursor-pointer w-full h-full outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 rounded-xl"
      aria-label={`${eyebrow} – view project`}
    >
      {/* Eyebrow */}
      <h2 className="mb-3 flex gap-2 items-center tracking-wide text-[clamp(0.95rem,0.85rem+0.5vw,1.25rem)]">
        <span className="w-2 h-2 bg-zinc-50 rounded-full flex-shrink-0" />
        {eyebrow}
      </h2>

      {/* Floating word */}
      <div
        className={[
          "pointer-events-none select-none absolute z-10 text-[#CDEA68] font-extrabold leading-none tracking-tight",
          "text-[clamp(2.5rem,6vw,7rem)]",
          "flex overflow-hidden whitespace-nowrap",
          isLeft
            ? "left-1/2 sm:left-full -translate-x-1/2"
            : "right-1/2 sm:right-full translate-x-1/2",
          "top-1/2 -translate-y-1/2",
        ].join(" ")}
        aria-hidden="true"
      >
        {word.split("").map((ch, i) => (
          <motion.span
            key={`${ch}-${i}`}
            className="inline-block"
            variants={CARD_WORD_VARIANTS}
            initial="initial"
            animate={controls}
            custom={i}
          >
            {ch}
          </motion.span>
        ))}
      </div>

      {/* Card */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden shadow-[0_20px_60px_-25px_rgba(0,0,0,0.6)] ring-1 ring-white/5 bg-zinc-900/40">
        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <motion.img
          src={img}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover"
          whileHover={{ scale: prefersReduced ? 1 : 1.04 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Label chip */}
        <div className="absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-xs text-zinc-200">
          Featured
        </div>
      </div>
    </motion.div>
  );
}

export default function Featured() {
  return (
    <section
      className="
        relative
        mx-auto max-w-7xl
        px-4 sm:px-6 lg:px-8
        pt-8 sm:pt-16
      "
      aria-labelledby="featured-title"
    >
      {/* Decorative glows */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-16 -right-24 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl" />

      {/* Header */}
      <div className="w-full border-b border-zinc-700/70 pb-5">
        <h1
          id="featured-title"
          className="text-[clamp(1.8rem,1.2rem+3vw,3.25rem)] font-extrabold tracking-tight"
        >
          Featured Projects
        </h1>
      </div>

      {/* Cards */}
      <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {cardsData.map((c, i) => (
          <FeaturedCard key={i} {...c} />
        ))}
      </div>

      {/* CTA */}
      <a
        href="#projects"
        className="
          mx-auto mb-6 md:mb-8
          flex items-center gap-2
          w-fit
          rounded-full
          bg-[#004D43] text-zinc-100
          px-8 sm:px-10 py-3
          text-[clamp(0.9rem,0.85rem+0.3vw,1rem)]
          uppercase tracking-wider font-semibold
          transition hover:bg-[#006655] active:scale-[0.98]
          focus:outline-none focus:ring-2 focus:ring-emerald-400/70
        "
        aria-label="See all projects"
      >
        See all Projects
        <FaArrowUpLong className="rotate-45 translate-y-[2px]" aria-hidden="true" />
      </a>
    </section>
  );
}
