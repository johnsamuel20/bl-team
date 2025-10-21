/* eslint-disable no-unused-vars */
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiGlobe } from "react-icons/fi";
import { FaGooglePlay, FaApple } from "react-icons/fa";

function isPlayStore(url = "") {
  return /play\.google\.com\/store/i.test(url);
}
function isAppStore(url = "") {
  return /apps\.apple\.com/i.test(url);
}
function isWebsite(url = "") {
  if (!url) return false;
  return !isPlayStore(url) && !isAppStore(url);
}

// Prefer a single website link if both are websites.
// If both are websites but different, we’ll just use hrefAndroid.
function pickWebsiteLink(android, ios) {
  if (isWebsite(android) && isWebsite(ios)) return android || ios;
  if (isWebsite(android)) return android;
  if (isWebsite(ios)) return ios;
  return null;
}

function Modal({ openItem, onClose }) {
  if (!openItem) return null;

  const { hrefAndroid, hrefIOS } = openItem;

  const playLink = isPlayStore(hrefAndroid) ? hrefAndroid : null;
  const appStoreLink = isAppStore(hrefIOS) ? hrefIOS : null;
  const websiteLink = pickWebsiteLink(hrefAndroid, hrefIOS);

  // If none of the above, we still won’t render disabled buttons.
  const hasAnyLink = Boolean(playLink || appStoreLink || websiteLink);

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
          <button
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

            <div className="p-4 border-t ">
              {hasAnyLink ? (
                <div className="flex flex-wrap justify-between gap-3">
                  {/* Google Play */}
                  {playLink && (
                    <a
                      href={playLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition font-medium bg-[#10B981] text-white hover:bg-[#0d9469]"
                    >
                      <FaGooglePlay className="text-lg" />
                      <span>Google Play</span>
                    </a>
                  )}

                  {/* App Store */}
                  {appStoreLink && (
                    <a
                      href={appStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition font-medium bg-black text-white hover:bg-gray-800"
                    >
                      <FaApple className="text-lg" />
                      <span>App&nbsp;Store</span>
                    </a>
                  )}

                  {/* Website */}
                  {websiteLink && (
                    <a
                      href={websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition font-medium bg-[#F59E0B] text-white hover:bg-[#ae6f03]"
                    >
                      <FiGlobe className="text-lg" />
                      <span>Visit Website</span>
                    </a>
                  )}
                </div>
              ) : (
                <p className="text-sm text-gray-500">No link available.</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
