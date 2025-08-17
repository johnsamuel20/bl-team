import React, { useRef, useState, useEffect } from "react";
import PlaylistCard from "./PlaylistCard";

function HorizontalRow({ title, items }) {
  const scrollRef = useRef(null);
  const [showRightFade, setShowRightFade] = useState(false);

  // Function to check scroll position
  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    // If scrollLeft + clientWidth < scrollWidth → not at end
    setShowRightFade(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  // Run on mount and whenever window resizes
  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

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
          ref={scrollRef}
          onScroll={checkScroll}
          className="
            flex gap-3 overflow-x-auto pb-2 pl-0
            scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200
          "
        >
          {items.map((p) => (
            <PlaylistCard key={p.id} p={p} />
          ))}
        </div>

        {/* Right Fade (only show if not at end) */}
        {showRightFade && (
          <div className="pointer-events-none absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white to-transparent" />
        )}
      </div>
    </section>
  );
}

export default HorizontalRow;
