import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

function getYouTubeId(url) {
  const regExp = /(?:youtu\.be\/|v=)([^&?/]+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

function PlaylistCard({ p }) {
  const [openEmbed, setOpenEmbed] = useState(false);

  const videoId = getYouTubeId(p.playlistHref);

  return (
    <>
      {/* Playlist Card */}
      <motion.div
        className="flex-shrink-0 w-44 h-44 rounded-xl overflow-hidden relative 
            border border-gray-200 shadow-lg cursor-pointer group"
        whileHover={{ rotate: 0 }}
        onClick={() => setOpenEmbed(true)}
      >
        {/* Background image layer */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-140"
          style={{
            backgroundImage: `url(https://i.ytimg.com/vi/${videoId}/hqdefault.jpg)`,
            filter: "brightness(60%)" 
          }}
        />

        {/* Logo overlay */}
        <div className="absolute left-3 top-3 bg-white p-1 rounded-lg shadow">
          <img
            src={p.logo}
            alt={`${p.title} logo`}
            className="w-10 h-10 object-contain"
          />
        </div>

        {/* Title gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 p-3 
                  bg-gradient-to-t from-black/60 to-transparent 
                  text-white text-sm font-semibold 
                  group-hover:from-black/80 transition-colors"
        >
          {p.title}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center 
                 shadow-lg transition-transform duration-300 group-hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="w-6 h-6 text-[#F59E0B]"
            >
              <path d="M6.79 5.093a.5.5 0 0 0-.79.407v5a.5.5 0 0 0 .79.407l4.5-2.5a.5.5 0 0 0 0-.814l-4.5-2.5z" />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Modal with YouTube embed */}
      <AnimatePresence>
        {openEmbed && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl overflow-hidden shadow-lg w-full max-w-2xl relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              {/* Close button */}
              <button
                onClick={() => setOpenEmbed(false)}
                className="absolute top-2 right-2 p-2 rounded-full bg-white shadow hover:bg-gray-100"
              >
                <FiX size={20} />
              </button>

              {/* YouTube Playlist Embed */}
              <iframe
                width="100%"
                height="400"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={p.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default PlaylistCard;
