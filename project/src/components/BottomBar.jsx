import React from 'react'

const BottomBar = () => {
  return (
    <div className="fixed bottom-0 w-full bg-gray-900 p-2 border-t border-gray-700 flex justify-between z-10">
      <div className="status-item text-white">Ln 1, Col 1</div>
      <div className="status-item text-white">Type: JavaScript</div>
      <div className="status-item text-white">Git: master</div>
    </div>
  )
}

export default BottomBar
