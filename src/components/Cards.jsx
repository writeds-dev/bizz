import  { useState } from "react";

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

  return (
    <section
      className="bg-black text-white py-20 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto rounded-xl space-y-20 overflow-x-hidden box-border"
    >
      {/* Top Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 items-center max-w-full box-border">
        {/* Left Image */}
        <div className="relative rounded-xl overflow-hidden shadow-2xl max-w-full w-full sm:max-w-md mx-auto lg:mx-0 transform transition-transform duration-500 hover:scale-105 box-border">
          <img
            src="https://res.cloudinary.com/dcqfpnls6/image/upload/v1748661312/two-abstract-circle-shapes-black-background-monochrome-illustration-3d-render_vtpive.jpg"
            alt="Creative sphere"
            className="w-full h-auto object-cover rounded-xl max-w-full"
          />
        </div>

        {/* Right Content */}
        <div className="lg:col-span-2 space-y-10 max-w-full box-border">
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-5 mb-8">
            <svg
              className="w-10 h-10 stroke-current text-white flex-shrink-0"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2l7 7-7 7-7-7 7-7z" />
              <path d="M19 15v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-4" />
            </svg>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight flex-1 max-w-full break-words"
            >
              Best Creative & Digital Agency
            </h2>
          </div>
          <p
            className="text-gray-400 max-w-full sm:max-w-xl leading-relaxed text-base sm:text-lg break-words"
          >
            At B4bizz, we specialize in crafting innovative digital solutions that
            drive brand growth and engagement. Our expert team blends creativity,
            technology, and strategy to deliver tailored marketing, design, and
            content services.
          </p>

          {/* Services */}
          <div className="flex flex-col sm:flex-row gap-8 mt-12 max-w-full box-border">
            {services.map(({ id, title }, idx) => {
              const isActive = activeService === id;
              return (
                <button
                  key={id}
                  onClick={() => setActiveService(id)}
                  className={`relative flex-1 p-6 sm:p-8 rounded-2xl cursor-pointer transition-colors duration-300
                  ${
                    isActive
                      ? "bg-lime-400 text-black shadow-xl"
                      : "border border-gray-700 text-gray-300 hover:border-lime-400 hover:text-white"
                  } focus:outline-none`}
                  aria-pressed={isActive}
                  style={{ minWidth: 0 }}
                >
                  <div className="flex items-center mb-5">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center mr-5 text-sm font-bold ${
                        isActive ? "bg-black text-lime-400" : "bg-gray-800 text-gray-400"
                      }`}
                    >
                      {id < 10 ? `0${id}` : id}
                    </div>
                    <h3 className="font-semibold text-xl sm:text-2xl truncate max-w-full">
                      {title}
                    </h3>
                  </div>

                  {isActive && (
                    <svg
                      className="absolute top-5 right-5 w-6 h-6 text-black"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>

          {/* Explore More Button */}
          <button
            className="
              mt-10
              bg-gradient-to-r from-green-400 to-teal-500
              text-white
              font-semibold
              uppercase
              px-10
              py-4
              rounded-full
              shadow-2xl
              hover:from-teal-500 hover:to-green-400
              hover:scale-105
              transition
              duration-300
              ease-in-out
              focus:outline-none
              focus:ring-4
              focus:ring-teal-300
              max-w-full
              truncate
            "
          >
            Explore More
          </button>
        </div>
      </div>

      {/* Bottom Slide Section */}
      <section className="bg-gray-900 rounded-3xl flex flex-col md:flex-row gap-12 px-6 md:px-12 py-16 max-w-full overflow-hidden box-border">
        {/* Left Text & Navigation */}
        <div className="md:w-1/3 flex flex-col justify-between h-full max-w-full min-w-0 box-border">
          <div>
            <button
              className="border border-white rounded-full px-6 py-2 text-sm uppercase mb-6 tracking-wide hover:bg-white hover:text-black transition"
              aria-label="Recent Work"
            >
              Recent Work
            </button>
            <p
              className="text-gray-300 mb-10 leading-relaxed text-base sm:text-lg break-words max-w-full"
            >
              {slides[current].description}
            </p>
            <h3
              className="font-semibold text-2xl max-w-full truncate"
            >
              {slides[current].highlight}
            </h3>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center justify-between mt-10 text-base max-w-full">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="p-3 border border-gray-600 rounded-full hover:bg-gray-700 transition"
            >
              &#8592;
            </button>

            <div className="text-center select-none px-6">
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
        <div className="md:w-2/3 relative flex items-center justify-center max-w-full md:max-w-none min-w-0 box-border">
          <img
            src={slides[current].imageUrl}
            alt={slides[current].title}
            className="rounded-3xl object-cover w-full max-h-[450px] shadow-2xl max-w-full"
          />
          <h2
            className="absolute right-6 text-5xl sm:text-6xl md:text-7xl font-extrabold text-white drop-shadow-xl uppercase leading-tight pointer-events-none select-none max-w-[calc(100% - 3rem)] overflow-hidden truncate"
            style={{ whiteSpace: "normal", wordBreak: "break-word" }}
          >
            {slides[current].title}
          </h2>
        </div>
      </section>
    </section>
  );
}
