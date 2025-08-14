import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
function Card({ item, onOpen }) {
  return (
<motion.button
  layout
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  whileTap={{ scale: 0.98 }}
  className="w-full md:w-60 p-3 rounded-2xl shadow-sm text-left text-white"
  style={{
    backgroundColor: `${item.color}E6`, // 'E6' makes it ~90% opacity
    border: `1px solid ${item.color}`
  }}
  onClick={() => onOpen(item)}
  aria-label={`Open ${item.title}`}
>
  <div className="text-sm font-medium">{item.title}</div>
  <div className="mt-2 text-xs opacity-80">
    {item.type === 'link' ? 'Open link' : 'Preview'}
  </div>
</motion.button>
  );
}

export default Card
