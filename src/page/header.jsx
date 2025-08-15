import React from "react";
import BlLogo from "../assets/social media/BL logo.png";

function HeaderSection() {
  return (
    <header className="flex items-center gap-3 md:gap-6 lg:gap-8">
      {/* Logo */}
      <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-white/90 flex items-center justify-center shadow overflow-hidden">
        <img
          src={BlLogo}
          alt="Better Life Logo"
          className="w-10 h-10 md:w-12 md:h-12 object-contain"
        />
      </div>

      {/* Title + Subtitle */}
      <div>
        <div className="text-sm md:text-lg font-semibold">Better Life Team</div>
        <div className="text-xs md:text-sm text-gray-500">
          Official channels & streaming
        </div>
      </div>

    </header>
  );
}

export default HeaderSection;
