import React from 'react'
import { AiOutlineFile, AiOutlineSearch, AiOutlineCode } from 'react-icons/ai'
import { VscSourceControl, VscDebugAlt, VscExtensions, VscLiveShare, VscGithubAlt } from 'react-icons/vsc'
import { FaDocker } from 'react-icons/fa'

const SidebarIcons = () => {
  return (
    <div className="sidebar-icons flex flex-col p-3 mt-10 space-y-4 h-full bg-background">
      <div className="flex flex-col items-center space-y-4">
        <AiOutlineFile className="text-VSBorder text-2xl cursor-pointer hover:text-blue-400 transition duration-200" />
        <AiOutlineSearch className="text-VSBorder text-2xl cursor-pointer hover:text-blue-400 transition duration-200" />
        <AiOutlineCode className="text-VSBorder text-2xl cursor-pointer hover:text-blue-400 transition duration-200" />
        <VscSourceControl className="text-VSBorder text-2xl cursor-pointer hover:text-blue-400 transition duration-200" />
        <VscDebugAlt className="text-VSBorder text-2xl cursor-pointer hover:text-blue-400 transition duration-200" />
        <VscExtensions className="text-VSBorder text-2xl cursor-pointer hover:text-blue-400 transition duration-200" />
      </div>

      <div className="border-t border-VSBorder my-4"></div>

      <div className="flex flex-col items-center space-y-4">
        <VscLiveShare className="text-VSBorder text-2xl cursor-pointer hover:text-blue-400 transition duration-200" />
        <VscGithubAlt className="text-VSBorder text-2xl cursor-pointer hover:text-blue-400 transition duration-200" />
        <FaDocker className="text-VSBorder text-2xl cursor-pointer hover:text-blue-400 transition duration-200" />
      </div>
      <div className="border-t border-VSBorder my-4"></div>
      <div className="flex flex-col items-center space-y-4">
        {/* TODO Stack Icons I work on it */}
      </div>
    </div>
  )
}

export default SidebarIcons
