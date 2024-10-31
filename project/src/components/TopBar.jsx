import React from 'react'

const TopBar = () => {
  return (
    <div className="top-bar bg-gray-900 p-2 flex items-center justify-between border-b border-gray-700">
      <div className="title text-white">Currículum Vitae</div>
      <div className="controls flex space-x-2">
        <button className="bg-gray-800 p-1 rounded">_</button>
        <button className="bg-gray-800 p-1 rounded">□</button>
        <button className="bg-gray-800 p-1 rounded">X</button>
      </div>
    </div>
  )
}

export default TopBar
