/* eslint-disable no-unused-vars */
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink } from 'react-icons/fi';

function Modal({ openItem, onClose  }) {
const handleOpenLink = () => {
  if (!openItem) return;

  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
  const isAndroid = /android/i.test(userAgent);

  if (isAndroid && openItem.hrefAndroid) {
    window.open(openItem.hrefAndroid, "_blank");
  } else if (isIOS && openItem.hrefIOS) {
    window.open(openItem.hrefIOS, "_blank");
  } else if (openItem.hrefAndroid) {
    // Desktop or unknown device → go to Android link
    window.open(openItem.hrefAndroid, "_blank");
  }
};

  return (
    <AnimatePresence>
      {openItem && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.button
            onClick={onClose}
            className="absolute inset-0 bg-black/40"
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
                <p className="mt-1 text-sm text-gray-500">{openItem.text}</p>
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
                  <button
                    onClick={handleOpenLink}
                    className="inline-flex items-center gap-2 px-3 py-2 bg-[#F59E0B] text-white rounded-lg"
                  >
                    Open Link <FiExternalLink />
                  </button>
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

export default Modal;
