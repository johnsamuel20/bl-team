import React, { useState } from 'react';
import HeaderSection from "./page/header" 
import Section1 from "./page/section1" 
import Section2 from "./page/section2" 
import Section3 from "./page/section3" 
import Modal from "./components/Modal" 


export default function App() {
  const [openItem, setOpenItem] = useState(null);

  function handleOpen(item) {
    // If item's type is link, we open modal to allow opening externally or directly navigate
    setOpenItem(item);
  }
  function handleClose() { setOpenItem(null); }

  return (
<div className="min-h-screen bg-gradient-to-b from-[#FFF8E7] to-white text-[#002E5D] antialiased">
  <div className="max-w-md mx-auto px-4 pt-6 pb-24">
    <HeaderSection />

    {/* Section 1: grid cards */}
    <Section1 handleOpen={handleOpen} />

    {/* Section 2: Song Channels / Program Channels */}
    <Section2 />

    {/* Section 3: Social & streaming */}
    <Section3 />
  </div>

  <Modal openItem={openItem} onClose={handleClose} />
</div>

  );
}
