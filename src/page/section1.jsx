import React from "react";
import Card from "../components/Card";
import { section1Cards } from "../data/content";


function section1({ handleOpen }) {
  return (
    <section className="mt-6 w-full">
      <h2 className="text-base md:text-lg font-semibold px-1">Our Apps</h2>
      <div
        className="
      mt-3 
      grid 
      grid-cols-3 
      gap-3 
      md:grid-cols-4 
      lg:grid-cols-6
      w-full
    "
      >
        {/* Cards */}
        <Card item={section1Cards[0]} onOpen={handleOpen} />
        <Card item={section1Cards[1]} onOpen={handleOpen} />
        <Card item={section1Cards[2]} onOpen={handleOpen} />
        <Card item={section1Cards[3]} onOpen={handleOpen} />
        <Card item={section1Cards[4]} onOpen={handleOpen} />
        <div></div>
        <Card item={section1Cards[5]} onOpen={handleOpen} />
        <Card item={section1Cards[6]} onOpen={handleOpen} />
        <div></div>
      </div>
    </section>
  );
}

export default section1;
