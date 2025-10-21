import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { FaMusic } from "react-icons/fa"; // default music icon

function getYouTubeThumbnail(url) {
  const regExp = /(?:youtube\.com\/.*v=|youtu\.be\/)([^&?/]+)/;
  const match = url.match(regExp);
  return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : null;
}

export default function SocialMediaGrid({ items }) {
  const [openId, setOpenId] = useState(null);

  const toggleOpen = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const gridItemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.04, duration: 0.2, ease: "easeOut" },
    }),
  };

  return (
<<<<<<< HEAD
    <div className="flex flex-col gap-4 w-full ">
=======
    <div className="flex flex-col gap-4 w-full px-0 pb-4 md:ml-0">
>>>>>>> 186fd89ce55c60e81a033a87fdf236ded0cb07c9
      <div className="text-sm font-bold text-gray-700 tracking-wide">
        Social Media Platforms
      </div>

      {items.map(({ id, title, icon: Icon, color, pages }) => (
        <motion.div
          key={id}
          className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
          // simple card hover: light lift + shadow
          whileHover={{ y: -3, boxShadow: "0 10px 24px rgba(0,0,0,0.10)" }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {/* Main Social Card Header */}
          <button
            onClick={() => toggleOpen(id)}
            className="w-full flex items-center justify-between p-4 cursor-pointer transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            aria-expanded={openId === id}
            aria-controls={`${id}-panel`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full text-white ${color}`}
              >
                <Icon className="text-lg" />
              </div>
              <span className="font-semibold text-md">{title}</span>
            </div>

            {/* Dropdown Icon with Rotation */}
            <motion.div
              animate={{ rotate: openId === id ? 180 : 0 }}
              transition={{ duration: 0.25 }}
            >
              <FiChevronDown className="text-gray-500 text-xl" />
            </motion.div>
          </button>

          {/* Animated Grid */}
          <AnimatePresence>
            {openId === id && (
              <motion.div
                id={`${id}-panel`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="overflow-hidden bg-gray-50 p-3"
              >
                {id === "youtube" ? (
                  // 📌 YouTube special layout (2 per row, proportional height)
                  <div className="grid grid-cols-2 gap-4">
                    {pages.map((page, index) => {
                      const thumb = getYouTubeThumbnail(page.videoLink);
                      const CardIcon = page.cardIcon || FaMusic;
                      return (
                        <motion.a
                          key={page.videoLink}
                          href={page.pageLink}
                          target="_blank"
                          rel="noreferrer"
                          className="relative rounded-xl overflow-hidden shadow-lg transition-all duration-200 ease-out cursor-pointer"
                          variants={gridItemVariants}
                          initial="hidden"
                          animate="visible"
                          custom={index}
                          // simple hover: lift + shadow (no scale)
                          whileHover={{
                            y: -3,
                            boxShadow: "0 12px 26px rgba(0,0,0,0.12)",
                          }}
                          whileTap={{ scale: 0.97 }}
                        >
                          {/* Background Image from video link (proportional height) */}
                          <div className="relative aspect-[4/3] md:aspect-video w-full">
                            <img
                              src={thumb || "/fallback.jpg"}
                              alt={page.name}
                              className="w-full h-full object-cover"
                            />

                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                            {/* Music/Icon top-right */}
                            <div className="absolute top-2 right-2">
                              <CardIcon className="text-white text-lg drop-shadow-md" />
                            </div>

                            {/* Logo + Title bottom-left */}
                            <div className="absolute bottom-2 left-2 flex items-center gap-2">
                              <img
                                src={page.logo}
                                alt={page.name}
                                className="w-7 h-7 rounded-full border border-white"
                              />
                              <span className="text-white font-semibold text-xs">
                                {page.name}
                              </span>
                            </div>
                          </div>
                        </motion.a>
                      );
                    })}
                  </div>
                ) : (
                  // 📌 Default grid for FB, IG, TikTok
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {pages.map((page, index) => (
                      <motion.a
                        key={page.href}
                        href={page.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col items-center bg-white rounded-lg shadow p-2 transition-all duration-200 ease-out cursor-pointer"
                        variants={gridItemVariants}
                        initial="hidden"
                        animate="visible"
                        custom={index}
                        // simple hover: lift + shadow (no scale)
                        whileHover={{
                          y: -3,
                          boxShadow: "0 10px 22px rgba(0,0,0,0.10)",
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <img
                          src={page.logo}
                          alt={page.name}
                          className="w-14 h-14 rounded-full object-cover border border-gray-300 mb-1"
                        />
                        <span className="text-xs text-center">{page.name}</span>
                      </motion.a>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
