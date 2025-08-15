import { motion } from "framer-motion";
import React from "react";

function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay,
      }}
      viewport={{ once: true, amount: 0.2 }} // animate when 20% in view
    >
      {children}
    </motion.div>
  );
}

export default FadeIn
