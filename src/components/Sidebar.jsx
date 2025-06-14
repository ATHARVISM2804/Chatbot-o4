import React from "react";
import { Plus, Folder } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-[280px] bg-[#202123] p-4 flex flex-col text-sm border-r border-[#2d2e30]">
      <div className="flex items-center gap-2 text-lg font-semibold mb-6 text-white">
        <img src="/logo.png" alt="Logo" className="w-6 h-6" />
        My Chats
      </div>

      <input
        placeholder="Search"
        className="bg-[#343541] text-white px-3 py-2 rounded mb-4 outline-none placeholder:text-gray-400"
      />

      <div className="text-xs text-gray-400 mb-2">Folders</div>
      {["Work chats", "Life chats", "Projects chats", "Clients chats"].map((folder, i) => (
        <div
          key={i}
          className="bg-[#343541] px-3 py-2 rounded mb-2 flex justify-between items-center text-white"
        >
          <span>{folder}</span>
          <span className="text-gray-500">...</span>
        </div>
      ))}

      <div className="text-xs text-gray-400 mb-2 mt-4">Chats</div>
      {["Plan a 3-day trip", "Ideas for a customer loyalty program", "Help me pick"].map((chat, i) => (
        <div
          key={i}
          className="bg-[#343541] px-3 py-2 rounded mb-2 hover:bg-[#3f414b] transition"
        >
          <div className="font-medium text-sm text-white">{chat}</div>
          <div className="text-xs text-gray-400 truncate">Here are some ideas...</div>
        </div>
      ))}

      <button className="bg-[#10a37f] hover:bg-[#0d8b6a] transition text-white font-semibold px-4 py-2 mt-auto rounded flex items-center justify-center gap-2">
        <Plus size={16} /> New chat
      </button>
    </div>
  );
};

export default Sidebar;
