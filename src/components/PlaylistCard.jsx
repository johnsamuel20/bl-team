/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
const apiKey = import.meta.env.VITE_API_KEY; 

const API_KEY = apiKey; 

function getPlaylistId(url) {
  const regExp = /[?&]list=([^&]+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

function PlaylistCard({ p }) {
  const [openEmbed, setOpenEmbed] = useState(false);
  const [videos, setVideos] = useState([]);
  const [playlistImage, setPlaylistImage] = useState(null);
  const playlistId = getPlaylistId(p.playlistHref);

  // Fetch playlist videos when popup opens
  useEffect(() => {
    if (openEmbed && playlistId) {
      fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setVideos(data.items || []);
        })
        .catch((err) => console.error(err));
    }
  }, [openEmbed, playlistId]);

  // Fetch first video thumbnail for background
  useEffect(() => {
    if (playlistId) {
      fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=1&playlistId=${playlistId}&key=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.items && data.items.length > 0) {
            setPlaylistImage(data.items[0].snippet.thumbnails.high.url);
          }
        })
        .catch((err) => console.error(err));
    }
  }, [playlistId]);

  return (
    <>
      {/* Card */}
      <motion.div
        className="flex-shrink-0 w-44 h-44 rounded-xl overflow-hidden relative border border-gray-200 shadow-lg cursor-pointer group bg-cover bg-center "
        style={{
          backgroundImage: `url(${playlistImage || p.logo})`,
          backgroundSize: "178%", // zoomed in
          backgroundPosition: "center",
        }}
        onClick={() => setOpenEmbed(true)}
      >
        <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
        {/* Logo top-left */}
        <div className="absolute top-2 left-2 bg-white/80 rounded-lg p-1 shadow">
          <img
            src={p.logo}
            alt={p.title}
            className="w-10 h-10 object-contain"
          />
        </div>
        

        {/* Gradient & Title bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent text-white text-sm font-semibold">
          {p.title}
        </div>

        {/* Play button center */}
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

      {/* Popup */}
      <AnimatePresence>
        {openEmbed && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl overflow-hidden shadow-lg w-full max-w-5xl h-[80vh] relative flex flex-col"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                onClick={() => setOpenEmbed(false)}
                className="absolute top-2 right-2 p-2 rounded-full bg-white shadow hover:bg-gray-100 z-10"
              >
                <FiX size={20} />
              </button>

              <div className="p-4 overflow-y-auto flex-1">
                {videos.map((v) => {
                  const videoId = v.snippet.resourceId.videoId;
                  return (
                    <div
                      key={videoId}
                      className="flex items-start gap-3 mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
                      onClick={() =>
                        window.open(
                          `https://www.youtube.com/watch?v=${videoId}`,
                          "_blank"
                        )
                      }
                    >
                      <img
                        src={v.snippet.thumbnails.medium.url}
                        alt={v.snippet.title}
                        className="w-40 md:w-48 h-24 md:h-28 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm md:text-base leading-snug line-clamp-2">
                          {v.snippet.title}
                        </div>
                        <div className="text-xs md:text-sm text-gray-500 mt-1">
                          {v.snippet.channelTitle}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default PlaylistCard;
