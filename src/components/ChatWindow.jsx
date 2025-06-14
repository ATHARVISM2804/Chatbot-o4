// src/components/ChatWindow.jsx
import React, { useEffect, useRef } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";

const ChatWindow = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 40,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const cardVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 0 20px rgba(0, 255, 150, 0.3)",
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <div className="flex-1 flex flex-col justify-center items-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#1f1f21] p-8 rounded-2xl shadow-xl w-full max-w-3xl"
      >
        <img src="/logo.png" alt="ChatGPT" className="w-6 h-6 mx-auto mb-4" />
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold mb-2"
        >
          How can I help you today?
        </motion.h1>
        <p className="text-gray-400 text-sm mb-6">
          This code will display a prompt asking the user for their name, and then it will display a greeting message with the name entered by the user.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[
            { label: "Saved Prompt Templates" },
            { label: "Media Type Selection" },
            { label: "Multilingual Support" },
          ].map((item, i) => (
            <motion.div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              whileHover="hover"
              variants={cardVariants}
              className="bg-[#2b2b2e] p-4 rounded-xl text-sm text-left cursor-pointer"
            >
              <div className="text-green-400 mb-1">{item.label}</div>
              <div className="text-gray-400 text-xs">
                Users select and reuse prompt templates for faster responses.
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-4 text-sm mb-4 text-gray-400"
        >
          {["All", "Text", "Image", "Video", "Music", "Analytics"].map((tab, i) => (
            <motion.span
              whileHover={{ color: "#ffffff", scale: 1.05 }}
              key={i}
              className={`cursor-pointer ${tab === "All" ? "text-green-400" : ""}`}
            >
              {tab}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="relative w-full"
        >
          <input
            placeholder="Type your prompt here..."
            className="w-full bg-[#141414] text-white px-4 py-3 rounded-full outline-none pr-12"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 hover:bg-green-600 text-black p-2 rounded-full"
          >
            <Send size={16} />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ChatWindow;

