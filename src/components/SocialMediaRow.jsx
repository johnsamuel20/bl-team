import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

// Data for main platforms + sub-pages with logos

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
    <div className="flex flex-col gap-4 w-full md:max-w-2xl p-4 md:ml-0">
      <div className="text-sm font-semibold mb-4 text-gray-700 tracking-wide">
        Follow
      </div>

      {items.map(({ id, title, icon: Icon, color, pages }) => (
        <motion.div
          key={id}
          className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
          whileTap={{ scale: 0.97 }}
        >
          {/* Main Social Card */}
          <button
            onClick={() => toggleOpen(id)}
            className="w-full flex items-center justify-between p-4"
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full text-white ${color}`}
              >
                <Icon className="text-lg" />
              </div>
              <span className="font-semibold text-lg">{title}</span>
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
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="overflow-hidden bg-gray-50 p-3"
              >
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {pages.map((page, index) => (
                    <motion.a
                      key={page.href}
                      href={page.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-col items-center bg-white rounded-lg shadow p-2 hover:shadow-lg transition"
                      variants={gridItemVariants}
                      initial="hidden"
                      animate="visible"
                      custom={index}
                      whileHover={{ scale: 1.05 }}
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
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
