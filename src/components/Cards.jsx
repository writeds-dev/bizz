import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const navigate = useNavigate();

  const gotoForm = () => {
    navigate("/contact");
  };

  return (
    <section className="bg-black text-white py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-20 max-w-full mx-auto rounded-2xl space-y-16 sm:space-y-20 overflow-x-hidden">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 sm:gap-14 max-w-full">
        {/* Left Image */}
        <div className="flex-shrink-0 w-full max-w-md rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.04] max-w-full">
          <img
            src="https://res.cloudinary.com/dcqfpnls6/image/upload/v1748661312/two-abstract-circle-shapes-black-background-monochrome-illustration-3d-render_vtpive.jpg"
            alt="Creative sphere"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col gap-6 sm:gap-8 min-w-0 max-w-full">
          <div className="flex items-center gap-3 sm:gap-4">
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12 stroke-current text-lime-400 flex-shrink-0"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              role="img"
            >
              <path d="M12 2l7 7-7 7-7-7 7-7z" />
              <path d="M19 15v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-4" />
            </svg>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Best Creative & Digital Agency
            </h2>
          </div>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
            At B4bizz, we specialize in crafting innovative digital solutions that
            drive brand growth and engagement. Our expert team blends creativity,
            technology, and strategy to deliver tailored marketing, design, and
            content services.
          </p>

          {/* Services Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 max-w-full">
            {services.map(({ id, title }) => {
              const isActive = activeService === id;
              return (
                <button
                  key={id}
                  onClick={() => setActiveService(id)}
                  aria-pressed={isActive}
                  className={`relative flex-1 p-5 sm:p-6 rounded-3xl cursor-pointer text-center transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-lime-400
                    ${
                      isActive
                        ? "bg-lime-400 text-black shadow-lg"
                        : "border border-gray-700 text-gray-300 hover:border-lime-400 hover:text-white"
                    }`}
                  style={{ minWidth: 0 }}
                >
                  <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-lg font-bold
                        ${
                          isActive ? "bg-black text-lime-400" : "bg-gray-800 text-gray-400"
                        }`}
                    >
                      {id < 10 ? `0${id}` : id}
                    </div>
                    <h3 className="font-semibold text-lg px-3 truncate max-w-full">{title}</h3>
                  </div>
                  {isActive && (
                    <svg
                      className="absolute top-4 right-4 w-5 h-5 sm:w-6 sm:h-6 text-black"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      role="img"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>

          {/* Explore More */}
          <button
            onClick={gotoForm}
            className="mt-8 sm:mt-10 self-start bg-gradient-to-r from-lime-400 to-teal-500 hover:from-teal-500 hover:to-lime-400 text-black font-semibold uppercase px-10 sm:px-12 py-3 sm:py-4 rounded-full shadow-xl transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-400 w-full sm:w-auto"
            aria-label="Explore More"
          >
            Explore More
          </button>
        </div>
      </div>

      {/* Bottom Carousel Section */}
      <section className="bg-gray-900 rounded-3xl flex flex-col md:flex-row gap-8 md:gap-10 px-4 sm:px-6 md:px-12 py-12 md:py-16 overflow-hidden max-w-full">
        {/* Left Content */}
        <div className="md:w-1/3 flex flex-col justify-between max-w-full min-w-0">
          <div>
            <button
              className="border border-white rounded-full px-6 sm:px-8 py-1.5 sm:py-2 text-xs sm:text-sm uppercase mb-6 sm:mb-8 tracking-wide hover:bg-white hover:text-black transition w-full md:w-auto"
              aria-label="Recent Work"
            >
              Recent Work
            </button>
            <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base md:text-lg max-w-full break-words whitespace-normal">
              {slides[current].description}
            </p>
            <h3 className="font-semibold text-xl sm:text-2xl max-w-full whitespace-normal">
              {slides[current].highlight}
            </h3>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 md:mt-12 text-sm sm:text-base max-w-full">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="p-3 border border-gray-600 rounded-full hover:bg-gray-700 transition"
            >
              &#8592;
            </button>
            <div className="text-center select-none px-6 font-mono tracking-wide">
              <span>{current + 1}</span>
              <span className="mx-2">/</span>
              <span>{slides.length}</span>
            </div>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="p-3 border border-gray-600 rounded-full hover:bg-gray-700 transition"
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* Right Image & Title */}
        <div className="md:w-2/3 relative flex items-center justify-center max-w-full min-w-0 overflow-hidden">
          <img
            src={slides[current].imageUrl}
            alt={slides[current].title}
            className="rounded-3xl object-cover w-full max-h-[320px] sm:max-h-[400px] md:max-h-[480px] shadow-2xl"
          />
          <h2
            className="absolute inset-x-6 sm:inset-x-8 bottom-6 sm:bottom-8 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-xl uppercase leading-tight pointer-events-none select-none max-w-[90%] mx-auto whitespace-normal break-words"
            aria-hidden="true"
          >
            {slides[current].title}
          </h2>
        </div>
      </section>
    </section>
  );
}
