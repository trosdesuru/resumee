// src/components/SidebarIcons.jsx
import React from 'react'
import { AiOutlineFile, AiOutlineSearch, AiOutlineCode } from 'react-icons/ai'

const SidebarIcons = () => {
  return (
    <div className="sidebar-icons flex flex-col bg-gray-800 p-2">
      <AiOutlineFile className="text-white text-2xl mb-2" />
      <AiOutlineSearch className="text-white text-2xl mb-2" />
      <AiOutlineCode className="text-white text-2xl mb-2" />
    </div>
  )
}

export default SidebarIcons
