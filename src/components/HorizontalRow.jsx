import React from 'react';
import PlaylistCard from './PlaylistCard';

function HorizontalRow({ title, items }) {
  return (
    <section>
      <div className="flex items-center justify-between px-2 md:px-0">
        {title && <h3 className="text-base md:text-lg font-semibold">{title}</h3>}
        {/* Optional see all link */}
      </div>

      {/* Mobile: horizontal scroll, Desktop: grid */}
      <div
        className="
mt-3 flex gap-3 overflow-x-auto px-2 pb-2
        "
      >
        {items.map((p) => (
          <PlaylistCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}

export default HorizontalRow;
