/* eslint-disable no-unused-vars */
import React, { useMemo } from "react";
import { motion } from "framer-motion";

const Card = React.memo(function Card({ item, onOpen, className = "" }) {
  const [randomX, randomY] = useMemo(
    () => [Math.random() * 1200 - 600, Math.random() * 1200 - 600],
    []
  );

  return (
    <motion.button
<<<<<<< HEAD
      initial={{
        opacity: 0,
        x: randomX,
        y: randomY,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      whileTap={{ scale: 0.96 }}
      style={{
        backgroundColor: item.color,
        willChange: "transform, opacity",
=======
      layout
      initial={{ opacity: 0, x: randomX, y: randomY, scale: 0.5 }}
      animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      transition={{ duration: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{
        y: -4,
        boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
>>>>>>> 186fd89ce55c60e81a033a87fdf236ded0cb07c9
      }}
      whileTap={{ scale: 0.97 }}
      className={`w-full h-15 flex items-center justify-start gap-2 px-2 rounded-2xl overflow-hidden shadow-sm cursor-pointer transition-all duration-200 ease-out ${className}`}
      style={{ backgroundColor: item.color }}
      onClick={() => onOpen(item)}
      aria-label={`Open ${item.title}`}
      className={`w-full h-15 flex items-center justify-start gap-2 px-2 rounded-2xl shadow-sm overflow-hidden ${className}`}
    >
      <img
        src={item.logo}
        alt={item.title}
        loading="lazy"
        className="w-10 h-10 object-contain flex-shrink-0"
      />

      <div className="flex flex-col justify-start">
        {item.subtitle && (
          <span className="text-[10px] md:text-xs font-normal text-gray-400 text-left">
            {item.subtitle}
          </span>
        )}
        <span className="text-xs md:text-sm font-bold whitespace-pre-line text-left">
          {typeof item.title === "string" ? item.title : item.title.main}
        </span>
      </div>
    </motion.button>
  );
});

export default Card;
