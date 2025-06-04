import  { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMessageCircle, FiX } from "react-icons/fi";

// Chatbot Configuration
const chatbotConfig = {
  welcomeMessage: "Hi! How can I help you today?",
  fallbackMessage: "Sorry, I didn't understand that. Can you rephrase?",
  intents: [
    {
      keywords: ["hello", "hi", "hey"],
      response: "Hello! What can I do for you today?",
    },
    {
      keywords: ["pricing", "cost", "price"],
      response: "Our pricing depends on the project scope. Can you share more details?",
    },
    {
      keywords: ["services", "offer", "what do you do"],
      response:
        "We offer creative digital services including social media, content writing, video production, motion graphics, and web development.",
    },
    {
      keywords: ["contact", "email", "phone"],
      response: "You can contact us at contact@b4bizz.com or call us at +1234567890.",
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
    return chatbotConfig.fallbackMessage;
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
