import  { useState } from "react";
import { FiPlus, FiMinus, FiArrowUpRight } from "react-icons/fi";

const faqs = [
  {
    question: "What services does your IT company offer?",
    answer: "We provide a comprehensive range of IT services including consulting, cloud solutions, cybersecurity, software development, and support.",
  },
  {
    question: "How do you ensure data security?",
    answer:
      "We implement advanced cybersecurity measures, including encryption, firewalls, and regular system audits, to protect your sensitive data.",
  },
  {
    question: "Do you offer 24/7 support?",
    answer: "Yes, we have a dedicated support team available 24/7 to assist with any issues.",
  },
  {
    question: "Do you provide training for new systems?",
    answer: "Absolutely, we offer customized training programs for all new systems we implement.",
  },
  {
    question: "Can you work with businesses of all sizes?",
    answer: "Yes, our solutions are scalable to meet the needs of small startups to large enterprises.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "We specialize in healthcare, finance, retail, and manufacturing industries.",
  },
  {
    question: "How do your pricing plans work?",
    answer:
      "Our pricing plans are flexible and transparent, designed to fit budgets. We offer detailed proposals after assessing your specific needs.",
  },
  {
    question: "How can I get started?",
    answer: "Simply contact us via the Get In Touch button or the form on our website, and we will guide you through the next steps.",
  },
];

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white max-w-7xl mx-auto px-6 py-16 rounded-lg relative">
      <div className="flex justify-between items-center mb-12">
        <div className="flex items-center space-x-2">
          <span className="text-lime-400 font-extrabold text-xl">*</span>
          <span className="uppercase text-gray-400 tracking-widest text-sm">FAQs</span>
        </div>

        <button className="flex items-center bg-gray-800 px-5 py-2 rounded-full text-white text-sm hover:bg-gray-700 transition">
          See All FAQs
          <FiArrowUpRight className="ml-2 text-lime-400" />
        </button>
      </div>

      <h2 className="text-5xl font-semibold max-w-4xl mb-12">
        Frequently span <span className="text-lime-400 font-extrabold">questions</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, i) => {
          const isExpanded = expandedIndex === i;
          return (
            <div
              key={i}
              className="bg-[#1e1e1e] rounded-lg p-6 cursor-pointer select-none"
              onClick={() => toggleFAQ(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") toggleFAQ(i);
              }}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg">
                  {i + 1}. {faq.question}
                </h3>
                <div
                  className={`w-7 h-7 flex items-center justify-center rounded-full border border-lime-400 text-lime-400 transition-transform ${
                    isExpanded ? "rotate-45" : "rotate-0"
                  }`}
                >
                  {isExpanded ? <FiMinus size={20} /> : <FiPlus size={20} />}
                </div>
              </div>
              {isExpanded && (
                <p className="mt-4 text-gray-300 text-sm leading-relaxed">{faq.answer}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
