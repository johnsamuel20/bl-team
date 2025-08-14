import React from 'react'

function IconButton({ children, aria, onClick, href }) {
  const base = (
    <button
      aria-label={aria}
      onClick={onClick}
      className="min-w-[44px] min-h-[44px] rounded-lg flex items-center justify-center border border-gray-200 bg-white/60 backdrop-blur-sm shadow-sm"
    >
      {children}
    </button>
  );
  if (href) return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={aria}>
      {base}
    </a>
  );
  return base;
}

export default IconButton
