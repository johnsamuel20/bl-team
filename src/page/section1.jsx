import React from "react";
import Card from "../components/Card";
import { section1Cards } from "../data/content";

function Section1({ handleOpen }) {
  return (
    <section className="mt-6 w-full">
      <h2 className="text-base md:text-lg font-semibold px-1">Applications</h2>
      <div
        className="
          mt-3 
          grid 
          grid-cols-6 
          gap-3 
          md:grid-cols-4 
          lg:grid-cols-6
          w-full
          
        "
      >
        {/* Row 1 */}
        <Card item={section1Cards[0]} onOpen={handleOpen} className="col-span-2 " />
        <Card item={section1Cards[1]} onOpen={handleOpen} className="col-span-2"/>
        <Card item={section1Cards[2]} onOpen={handleOpen} className="col-span-2"/>

        {/* Row 2 */}
        <Card item={section1Cards[3]} onOpen={handleOpen} className="col-span-3" />
        <Card item={section1Cards[4]} onOpen={handleOpen} className="col-span-3"/>

        {/* Row 3 */}
        <Card
          item={section1Cards[5]}
          onOpen={handleOpen}
          className="col-span-3"
        />
        <Card
          item={section1Cards[6]}
          onOpen={handleOpen}
          className="col-span-3"
        />
      </div>
    </section>
  );
}

export default Section1;
