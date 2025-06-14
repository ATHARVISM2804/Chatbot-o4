import React from "react";

const Topbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-3 border-b border-[#2a2b2d] bg-[#1e1f20]">
      <div className="flex items-center gap-4 text-sm">
        <span className="text-gray-300 cursor-pointer">&larr;</span>
        <span className="text-white font-medium">Name chat</span>
        <span className="bg-[#004d1a] text-green-400 text-xs px-2 py-1 rounded-full">
          Chat GPT 5.0
        </span>
      </div>
      <div className="flex gap-4 text-white">
        <span>🔖</span>
        <span>📤</span>
      </div>
    </div>
  );
};

export default Topbar;
