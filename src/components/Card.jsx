/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";

function Card({ item, onOpen, className = "" }) {
  // Random start position far off screen
  const randomX = Math.random() * 1200 - 600;
  const randomY = Math.random() * 1200 - 600;

  return (
    <motion.button
      layout
      initial={{
        opacity: 0,
        x: randomX,
        y: randomY,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileTap={{ scale: 0.96 }}
      className={`w-full h-15 flex items-center justify-start gap-2 px-2 rounded-2xl shadow-sm overflow-hidden ${className}`}
      style={{
        backgroundColor: item.color,
      }}
      onClick={() => onOpen(item)}
      aria-label={`Open ${item.title}`}
    >
      <img
        src={item.logo}
        alt={item.title}
        className="w-10 h-10 object-contain flex-shrink-0"
      />

      {/* Text box */}
      <div className="flex flex-col justify-start">
  {item.subtitle && (
    <span className="text-[10px] md:text-xs font-normal text-gray-400 text-left">
      {item.subtitle}
    </span>
  )}
  <span className="text-xs md:text-sm font-bold whitespace-pre-line text-left ">
    {typeof item.title === "string" ? item.title : item.title.main}
  </span>
      </div>
    </motion.button>
  );
}

export default Card;
