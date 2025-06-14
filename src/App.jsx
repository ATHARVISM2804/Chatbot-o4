import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import ChatWindow from "./components/ChatWindow";

export default function App() {
  return (
    <div className="flex h-screen w-full bg-gradient-to-br from-[#000] via-[#0a1e11] to-[#000] text-white">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar />
        <ChatWindow />
      </div>
    </div>
  );
}


