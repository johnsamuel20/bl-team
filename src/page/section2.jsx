import React from 'react'
import { songChannels, programChannels } from "../data/content";
import HorizontalRow from '../components/HorizontalRow';
function section2() {
  return (
        <div className="mt-6 px-1">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold">Song Channels</h3>
            <div className="text-xs text-gray-500">Each has its own playlist</div>
          </div>
          <HorizontalRow title={null} items={songChannels} />

          <div className="mt-4 flex items-center justify-between">
            <h3 className="text-base font-semibold">Program / Video Channels</h3>
            <div className="text-xs text-gray-500">Program & drama</div>
          </div>
          <HorizontalRow title={null} items={programChannels} />
        </div>
  )
}

export default section2
