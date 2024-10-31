import React from 'react'

const BottomBar = () => {
  return (
    <div className="status-bar bg-gray-900 p-2 border-t border-gray-700 flex justify-between">
      <div className="status-item text-white">Ln 1, Col 1</div>
      <div className="status-item text-white">Type: JavaScript</div>
      <div className="status-item text-white">Git: master</div>
    </div>
  )
}

export default BottomBar
