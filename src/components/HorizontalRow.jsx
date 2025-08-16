import React from "react";
import PlaylistCard from "./PlaylistCard";

function HorizontalRow({ title, items }) {
  return (
    <section className="relative">
      {/* Header */}
      <div className="flex items-center justify-between px-2 md:px-0">
        {title && <h3 className="text-base md:text-lg font-semibold">{title}</h3>}
      </div>

      {/* Wrapper must be relative */}
      <div className="relative mt-3">
        {/* Scrollable Row */}
        <div
          className="
            flex gap-3 overflow-x-auto pb-2 pl-0
            scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200
          "
        >
          {items.map((p) => (
            <PlaylistCard key={p.id} p={p} />
          ))}
        </div>

        {/* Right Fade — stays fixed at container edge */}
        <div className="pointer-events-none absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}

export default HorizontalRow;
