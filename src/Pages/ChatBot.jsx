import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMessageCircle, FiX } from "react-icons/fi";

// Chatbot Configuration with expanded website-related intents
const chatbotConfig = {
  welcomeMessage: "Hi! How can I help you today?",
  fallbackMessage: "Sorry, I didn't understand that. Can you rephrase?",
  randomFallbacks: [
    "I'm not sure I understand. Could you clarify?",
    "Hmm, I don't have an answer for that. Try asking something else?",
    "Interesting question! I'll get back to you on that.",
    "Can you please provide more details?",
    "That's outside my knowledge base, but I'm here to help with other questions!",
  ],
  intents: [
    {
      keywords: ["hello", "hi", "hey"],
      response: "Hello! What can I do for you today?",
    },
    {
      keywords: ["pricing", "cost", "price", "how much"],
      response: "Our pricing depends on the project scope. Can you share more details?",
    },
    {
      keywords: ["services", "offer", "what do you do", "services offered"],
      response:
        "We offer creative digital services including social media, content writing, video production, motion graphics, and web development.",
    },
    {
      keywords: ["contact", "email", "phone", "reach you", "get in touch"],
      response: "You can contact us at contact@b4bizz.com or call us at +1234567890.",
    },
    {
      keywords: ["website", "site", "webpage", "web development", "web design"],
      response:
        "We build fast, responsive, and user-friendly websites tailored to your business needs using the latest technologies.",
    },
    {
      keywords: ["responsive", "mobile friendly", "mobile responsive"],
      response:
        "All our websites are fully responsive and optimized for mobile devices to ensure great user experience on any screen size.",
    },
    {
      keywords: ["seo", "search engine optimization", "rank", "google ranking"],
      response:
        "We provide SEO-friendly website development to help improve your site’s visibility and ranking on search engines.",
    },
    {
      keywords: ["ecommerce", "online store", "shopping cart", "payment gateway"],
      response:
        "We develop robust e-commerce platforms with secure payment gateways and easy-to-use shopping carts to boost your online sales.",
    },
    {
      keywords: ["cms", "content management system", "wordpress", "manage content"],
      response:
        "We offer CMS integration like WordPress to help you easily manage and update your website content without technical skills.",
    },
    {
      keywords: ["hosting", "server", "domain", "website hosting"],
      response:
        "We assist with website hosting and domain registration to make sure your site is always accessible and fast.",
    },
    {
      keywords: ["maintenance", "update", "support", "fix", "bug"],
      response:
        "We provide website maintenance and support services to keep your site secure, updated, and running smoothly.",
    },
    {
      keywords: ["custom website", "tailored website", "bespoke site"],
      response:
        "We create custom websites tailored specifically to your brand identity and business goals.",
    },
    {
      keywords: ["loading speed", "fast website", "performance"],
      response:
        "We optimize websites for fast loading speed and great performance to enhance user experience and SEO.",
    },
    {
      keywords: ["security", "secure website", "ssl", "data protection"],
      response:
        "We implement security best practices including SSL certificates to protect your website and users' data.",
    },
    {
      keywords: ["portfolio", "examples", "projects", "case studies"],
      response:
        "Check out our portfolio on our website to see examples of websites and projects we've delivered.",
    },
    {
      keywords: ["technology", "tech stack", "tools", "framework"],
      response:
        "We use modern technologies like React, Next.js, Node.js, and more to build scalable and maintainable websites.",
    },
  ],
};

// ChatBot Component
function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: chatbotConfig.welcomeMessage, fromBot: true },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Scroll chat to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Simple bot reply simulation based on intent matching
  function getBotResponse(userMessage) {
    const msgLower = userMessage.toLowerCase();
    for (const intent of chatbotConfig.intents) {
      if (intent.keywords.some((kw) => msgLower.includes(kw))) {
        return intent.response;
      }
    }
    // Return a random fallback message instead of fixed fallbackMessage
    const randomFallbacks = chatbotConfig.randomFallbacks;
    const randomIndex = Math.floor(Math.random() * randomFallbacks.length);
    return randomFallbacks[randomIndex];
  }

  // Send a message
  function handleSend() {
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages((prev) => [...prev, { id: Date.now(), text: userMsg, fromBot: false }]);
    setInput("");

    // Simulate bot response with delay
    setTimeout(() => {
      const response = getBotResponse(userMsg);
      setMessages((prev) => [...prev, { id: Date.now() + 1, text: response, fromBot: true }]);
    }, 1000);
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        aria-label={isOpen ? "Close chat" : "Open chat"}
        onClick={() => setIsOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-lime-400 shadow-lg flex items-center justify-center text-black hover:bg-lime-500 transition focus:outline-none focus:ring-4 focus:ring-lime-300"
      >
        {isOpen ? <FiX size={24} /> : <FiMessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-20 right-6 z-50 w-80 max-w-full bg-black bg-opacity-90 rounded-xl shadow-xl flex flex-col"
          style={{ height: "400px" }}
        >
          <header className="flex justify-between items-center p-4 border-b border-lime-400">
            <h2 className="text-lime-400 font-bold text-lg">Chat with Us</h2>
            <button
              aria-label="Close chat"
              onClick={() => setIsOpen(false)}
              className="text-lime-400 hover:text-lime-500 focus:outline-none"
            >
              <FiX size={20} />
            </button>
          </header>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map(({ id, text, fromBot }) => (
              <div
                key={id}
                className={`max-w-[80%] px-3 py-2 rounded-lg ${
                  fromBot ? "bg-lime-400 text-black self-start" : "bg-gray-800 text-white self-end"
                }`}
              >
                {text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-4 border-t border-lime-400 flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 rounded-lg px-3 py-2 bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400"
              autoComplete="off"
              aria-label="Message input"
            />
            <button
              type="submit"
              className="text-lime-400 hover:text-lime-500 focus:outline-none"
              aria-label="Send message"
            >
              <FiSend size={24} />
            </button>
          </form>
        </motion.div>
      )}
    </>
  );
}

export default ChatBot;
