import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll } from 'motion/react';
import { useRef } from 'react';

const services = [
  {
    title: 'Web Development',
    description:
      'We specialize in building robust, scalable websites that provide seamless user experiences. Our team uses the latest technologies to ensure that your website is fast, secure, and responsive across all devices. Whether you need a corporate website, a custom-built solution, or an e-commerce platform, we have the expertise to bring your vision to life.',
    src: '/public/d-1.jpg',
    link: '',
    color: '#5196fd',
  },
  {
    title: 'E-commerce Development',
    description:
      'We build scalable, high-performance e-commerce platforms that enable businesses to sell products and services online. From shopping carts and payment gateways to product management and customer analytics, we provide end-to-end solutions for your online store. Our focus is on delivering a smooth, secure, and optimized shopping experience for your customers.',
    src: '/public/d-2.jpg',
    link: '',
    color: '#8f89ff',
  },
  {
    title: 'Mobile App Design & Development',
    description:
      'We create seamless, user-friendly mobile applications for iOS and Android. Whether you\'re looking for a native app, cross-platform solution, or a PWA (Progressive Web App), our mobile developers ensure that your app is intuitive, fast, and bug-free. Our designs prioritize the user experience, and our development team ensures your app is functional and scalable.',
    src: '/public/d-3.jpg',
    link: '',
    color: '#13006c',
  },
  {
    title: 'UI/UX Design',
    description:
      'We create visually stunning and highly functional user interfaces (UI) combined with seamless user experiences (UX). Our team focuses on user-centric designs that are easy to navigate, aesthetically pleasing, and optimized for conversion. From wireframes to interactive prototypes, we ensure that your design not only looks good but also meets your users’ needs.',
    src: '/public/d-4.jpg',
    link: 'https://images.unsplash.com/photo-1605106702842-01a887a31122?q=80&w=500&auto=format&fit=crop',
    color: '#fd521a',
  },
  {
    title: 'Branding & Identity',
    description:
      'We help businesses build strong, memorable brands. From logo design and typography to color schemes and brand messaging, we craft a unique identity that resonates with your target audience. Whether you’re starting from scratch or rebranding an existing business, our team ensures that your brand’s identity is consistent, impactful, and aligned with your business goals.',
    src: '/public/d-5.jpg',
    link: 'https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?w=500&auto=format&fit=crop&q=60',
    color: '#8f89ff',
  },
  {
    title: 'Digital Marketing',
    description:
      'Our digital marketing services help you reach and engage with your target audience effectively. From SEO (Search Engine Optimization) and content marketing to PPC (Pay-Per-Click) advertising and social media campaigns, we develop data-driven strategies to grow your online presence, boost brand awareness, and drive conversions.',
    src: '/public/d-6.jpg',
    link: 'https://images.unsplash.com/photo-1605106901227-991bd663255c?w=500&auto=format&fit=crop',
    color: '#ed649e',
  },
];

export default function SebAgency() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <ReactLenis root>
      <main className="bg-black text-white" ref={container}>
        {/* Hero Section */}
        <section className="h-[80vh] bg-cover bg-center relative" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1605106702842-01a887a31122?q=80&w=500&auto=format&fit=crop")' }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="flex items-center justify-center h-full z-10 text-center px-4">
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Seb Agency: Building Digital Experiences that Matter
            </h1>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-slate-950">
          <h2 className="text-4xl sm:text-5xl font-semibold text-center text-white mb-12">
            Our Services
          </h2>
          {services.map((service, i) => {
            const targetScale = 1 - (services.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={service?.link}
                src={service?.src}
                title={service?.title}
                color={service?.color}
                description={service?.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>

        {/* Footer Section */}
        <footer className="bg-black py-12">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Ready to Create Something Amazing?
            </h1>
            <p className="text-gray-300 mt-4">
              Contact us today to get started with your next digital project.
            </p>
            <a
              href="mailto:info@sebagency.com"
              className="inline-block bg-lime-400 text-black py-3 px-6 rounded-lg mt-6 text-lg font-semibold transition-all hover:bg-lime-500"
            >
              Get in Touch
            </a>
          </div>
        </footer>
      </main>
    </ReactLenis>
  );
}

// Card Component (for services)
const Card = ({ i, title, description, src, url, color, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-auto flex items-center justify-center py-10">
      <motion.div
        style={{
          backgroundColor: color,
          scale,
        }}
        className="flex flex-col relative h-auto w-[80%] md:w-[70%] xl:w-[60%] mx-auto rounded-md p-8 shadow-lg bg-gradient-to-t from-black to-gray-900"
      >
        <h2 className="text-2xl text-center font-semibold mb-4">{title}</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-[50%] text-sm md:text-base text-gray-300">{description}</div>
          <div className="md:w-[50%] flex justify-center items-center">
            <motion.div
              className="w-full h-full rounded-lg overflow-hidden"
              style={{ scale: imageScale }}
            >
              <img src={src} alt={title} className="object-cover w-full h-full" />
            </motion.div>
          </div>
        </div>
        <div className="text-center mt-6">
          <a
            href={url}
            target="_blank"
            className="underline text-lime-400 hover:text-lime-500"
          >
            See More
          </a>
        </div>
      </motion.div>
    </div>
  );
};
