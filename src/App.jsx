import React, { useState } from "react";
import HeaderSection from "./page/header";
import Section1 from "./page/section1";
import Section2 from "./page/section2";
import Section3 from "./page/section3";
import Modal from "./components/Modal";
import FadeInSection from "./components/FadeIn";

export default function App() {
  const [openItem, setOpenItem] = useState(null);

  function handleOpen(item) {
    setOpenItem(item);
  }
  function handleClose() {
    setOpenItem(null);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#febf96] to-white text-[#002E5D] antialiased">
      <div className="max-w-md md:max-w-4xl lg:max-w-6xl mx-auto px-4 md:px-8 lg:px-12 pt-6 pb-24 md:pt-10 lg:pt-16">
        <HeaderSection />

        <FadeInSection>
          <Section1 handleOpen={handleOpen} />
        </FadeInSection>
        <FadeInSection delay={0.2}>
          <div className="mt-6 md:mt-10">
            <Section3 />
          </div>
        </FadeInSection>

        {/* <FadeInSection delay={0.1}>
          <div className="mt-6 md:mt-10">
            <Section2 />
          </div>
        </FadeInSection> */}
      </div>

      <Modal openItem={openItem} onClose={handleClose} />
    </div>
  );
}
