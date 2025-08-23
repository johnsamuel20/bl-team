import React from "react";

function WebPlatforms({ items }) {
  return (
    <div className="mt-6 px-0 pb-8 w-full">
      {/* Title */}
      <div className="text-sm font-bold mb-4 text-gray-700 tracking-wide">
        Web Platforms
      </div>

      {/* Row that stretches from left to right */}
      <div className="flex w-full justify-between">
        {items.map((s) => (
          <a
            key={s.id}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center text-sm transition-transform hover:scale-105"
          >
            {/* Icon container with dynamic background */}
            <div
              className="w-20 h-20 md:w-24 md:h-24 rounded-xl flex items-center justify-center border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-400 overflow-hidden transition-all duration-200"
              style={{ backgroundColor: s.color || "#ffffff" }} // ✅ dynamic color
            >
              <img
                src={s.icon}
                alt={s.title}
                className="w-14 h-14 md:w-16 md:h-16 object-contain"
              />
            </div>

            {/* Label (allow 2 lines) */}
            <div className="mt-2 text-center text-gray-600 group-hover:text-blue-500 leading-tight max-w-[80px]">
              {s.title}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default WebPlatforms;
