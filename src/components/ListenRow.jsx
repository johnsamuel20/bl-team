import React from "react";

function ListenRow({ items }) {
  return (
    <div className="mt-6 px-0 pb-8">
      {/* Title */}
      <div className="text-sm font-semibold mb-4 text-gray-700 tracking-wide">
        Streaming Platforms
      </div>
      {/* Horizontal Scroll Row */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide justify-center">
        {items.map((s) => (
          <a
            key={s.id}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center text-xs flex-shrink-0 transition-transform hover:scale-105"
          >
            {/* Icon container */}
            <div className="w-14 h-14 rounded-xl flex items-center justify-center border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:border-blue-400 overflow-hidden transition-all duration-200">
              <img
                src={s.icon}
                alt={s.title}
                className="w-9 h-9 object-contain"
              />
            </div>

            {/* Label */}
            <div className="mt-2 max-w-[70px] text-center text-gray-600 group-hover:text-blue-500 truncate">
              {s.title}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ListenRow;
