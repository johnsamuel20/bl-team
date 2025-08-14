import React from 'react'
import PlaylistCard from './PlaylistCard';


function HorizontalRow({ title, items }) {
  return (
    <section className="mt-6">
      <div className="flex items-center justify-between px-2">
        <h3 className="text-base font-semibold">{title}</h3>
        {/* <a className="text-xs text-blue-600" href="#">See all</a> */}
      </div>
      <div className="mt-3 flex gap-3 overflow-x-auto px-2 pb-2">
        {items.map((p) => (
          <PlaylistCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}

export default HorizontalRow
