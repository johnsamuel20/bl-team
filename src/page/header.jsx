import React from "react";
import BlLogo from "../assets/social media/BL logo.png"
function header() {
  return (
    <header className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-xl bg-white/90 flex items-center justify-center shadow overflow-hidden">
        <img
          src= {BlLogo}
          alt="Better Life Logo"
          className="w-10 h-10 object-contain"
        />
      </div>
      <div>
        <div className="text-sm font-semibold">Better Life Team</div>
        <div className="text-xs text-gray-500">
          Official channels & streaming
        </div>
      </div>
    </header>
  );
}

export default header;
