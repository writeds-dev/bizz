import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

function LoadingScreen({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="fixed inset-0 bg-black flex items-center justify-center z-[9999]"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white text-7xl sm:text-9xl font-extrabold select-none"
          >
            be4bizz..
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function HeroSection() {
  const containerRef = useRef(null);
  const canvasBubblesRef = useRef(null);
  const canvasStarsRef = useRef(null);
  const canvasWavesRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = "1234567890"; // Replace with your WhatsApp number
  const whatsappMessage = encodeURIComponent("Hello! I want to start a project.");

  const openWhatsAppChat = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      {!isLoading && (
        <div
          ref={containerRef}
          data-scroll
          data-scroll-section
          data-scroll-speed="-0.3"
          className="max-w-full h-screen relative overflow-hidden select-none bg-black box-border"
          style={{ boxSizing: "border-box" }}
        >
          {/* Canvas layers */}
          <canvas
            ref={canvasWavesRef}
            className="fixed top-0 left-0 w-full h-full -z-30"
            aria-hidden="true"
          />
          <canvas
            ref={canvasBubblesRef}
            className="fixed top-0 left-0 w-full h-full -z-20"
            aria-hidden="true"
          />
          <canvas
            ref={canvasStarsRef}
            className="fixed top-0 left-0 w-full h-full -z-10"
            aria-hidden="true"
          />

          {/* Main Text Section */}
          <div className="textstructure py-[10vh] max-w-full relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 min-w-0">
            {["We Create", "Eye Opening", "Projects"].map((item, index) => (
              <div key={index} className="masker mb-6 last:mb-0 min-w-0">
                <div className="w-full flex flex-wrap sm:flex-nowrap items-center overflow-hidden gap-3 sm:gap-5 justify-center min-w-0">
                  {index === 1 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "40vw" }}
                      transition={{
                        ease: [0.76, 0, 0.24, 1],
                        duration: 1,
                        delay: 1,
                      }}
                      className="w-[40vw] h-[12vh] sm:h-[14vh] sm:w-[7vw] sm:mt-5 rounded-md overflow-hidden flex-shrink-0 min-w-[120px]"
                      aria-label="Decorative video transition"
                      style={{ minWidth: "120px" }}
                    >
                      <video
                        src="https://res.cloudinary.com/dcqfpnls6/video/upload/v1748658167/ie70tcvdb73a2fot4mu8.mov"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  )}
                  <h1
                    className="font-FoundersGroteskCondensed sm:-mb-[1vw] md:text-[10vw] sm:text-[12vw] text-[16vw] uppercase leading-none h-full max-w-full text-white drop-shadow-lg select-text break-words"
                    aria-label={item}
                    style={{ wordBreak: "break-word", whiteSpace: "normal", minWidth: 0 }}
                  >
                    {item}
                  </h1>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Bar Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between border-t-[1px] border-zinc-800 py-5 font-NueueMontreal gap-4 sm:gap-0 relative z-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 min-w-0">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-center sm:text-left min-w-0">
              {[
                "For public and private companies",
                "From the first pitch to IPO",
              ].map((item, index) => (
                <p
                  key={index}
                  className="text-sm sm:text-base font-light leading-none text-gray-300"
                >
                  {item}
                </p>
              ))}
            </div>

            <div className="start flex items-center gap-4 justify-center sm:justify-start min-w-0">
              <button
                className="rounded-full border-[1px] font-NueueMontreal border-zinc-500 px-5 py-2 text-xs sm:text-sm font-light whitespace-nowrap uppercase hover:bg-zinc-800 transition text-gray-300"
                aria-label="Start the Project"
              >
                Start the Project
              </button>

              <div className="flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-zinc-500 text-gray-300">
                <span className="rotate-45">
                  <FaArrowUpLong aria-hidden="true" />
                </span>
              </div>
            </div>
          </div>

          {/* WhatsApp button only */}
          <button
            onClick={openWhatsAppChat}
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition-transform hover:scale-110 z-[9999]"
          >
            <FaWhatsapp size={28} />
          </button>
        </div>
      )}
    </>
  );
}

export default HeroSection;
