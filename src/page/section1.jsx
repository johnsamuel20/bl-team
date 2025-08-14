import React from 'react';
import Card from "../components/Card"
import {section1Cards} from "../data/content";

function section1({handleOpen}) {
  return (
        <section className="mt-6">
          <h2 className="text-base font-semibold px-1">Explore</h2>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {section1Cards.map((s) => (
              <Card key={s.id} item={s} onOpen={handleOpen} />
            ))}
          </div>
        </section>
  )
}

export default section1
