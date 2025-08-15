/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";

function Card({ item, onOpen }) {
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
        duration: 1.5, // nice and slow
        ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier
      }}
      whileTap={{ scale: 0.96 }}
      className="w-full aspect-square flex items-center justify-center rounded-2xl shadow-sm overflow-hidden"
      style={{
        backgroundColor: item.color,
      }}
      onClick={() => onOpen(item)}
      aria-label={`Open ${item.title}`}
    >
      <img
        src={item.logo}
        alt={item.title}
        className="w-3/4 h-3/4 object-contain"
      />
    </motion.button>
  );
}

export default Card;
