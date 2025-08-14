import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink } from 'react-icons/fi';

function Modal({ openItem, onClose }) {
  return (
<AnimatePresence>
  {openItem && (
    <motion.div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop first so it's behind the popup */}
      <motion.button
        onClick={onClose}
        className="absolute inset-0 bg-black/40" // dim the background
        aria-hidden
      />

      {/* Popup */}
      <motion.div
        layoutId={openItem.id}
        className="relative w-full sm:max-w-md bg-white rounded-2xl shadow-xl overflow-hidden"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        exit={{ y: 50 }}
      >
        <div className="p-4 flex items-start justify-between">
          <div>
            <h4 className="text-lg font-semibold">{openItem.title}</h4>
            <p className="mt-1 text-sm text-gray-500">Preview / open link</p>
          </div>
          <button
            aria-label="Close preview"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <FiX />
          </button>
        </div>

        <div className="p-4 border-t">
          {openItem.type === "link" ? (
            <div>
              <a
                href={openItem.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 bg-[#F59E0B] text-white rounded-lg"
              >
                Open Link <FiExternalLink />
              </a>
            </div>
          ) : (
            <div className="text-sm text-gray-700">
              Article / Video preview placeholder
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

  );
}

export default Modal
