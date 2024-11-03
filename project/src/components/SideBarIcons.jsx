import React from 'react'

import { VscSourceControl, VscDebugAlt, VscExtensions, VscLiveShare, VscGithub } from 'react-icons/vsc'
import { AiOutlineFile, AiOutlineSearch, AiOutlineCode } from 'react-icons/ai'
import { FaDocker, FaHtml5, FaReact, FaFigma, FaNodeJs } from 'react-icons/fa'
import { SiVitess, SiVisualstudiocode, SiVim } from "react-icons/si"
import { RiTailwindCssFill } from "react-icons/ri"
import { IoLogoJavascript } from "react-icons/io"
import { DiCss3 } from "react-icons/di"

const SidebarIcons = () => {
  console.debug('side bar icons -> call')

  return (
    <div className="sidebar-icons flex flex-col p-3 mt-10 space-y-4 h-full">
      <div className="flex flex-col items-center space-y-4">
        <AiOutlineFile className="text-textPrimary text-2xl cursor-pointer hover:text-blue-400 transition duration-200" />
        <AiOutlineSearch className="text-textPrimary text-2xl cursor-pointer hover:text-blue-400 transition duration-200" />
        <AiOutlineCode className="text-textPrimary text-2xl cursor-pointer hover:text-blue-400 transition duration-200" />
        <VscSourceControl className="text-textPrimary text-2xl cursor-pointer hover:text-blue-400 transition duration-200" />
        <VscDebugAlt className="text-textPrimary text-2xl cursor-pointer hover:text-blue-400 transition duration-200" />
        <VscExtensions className="text-textPrimary text-2xl cursor-pointer hover:text-blue-400 transition duration-200" />
      </div>

      <div className="border-t border-textPrimary my-4"></div>

      <div className="flex flex-col items-center space-y-4">
        <VscLiveShare className="text-textPrimary text-2xl cursor-pointer hover:text-blue-400 transition duration-200" />
        <VscGithub className="text-textPrimary text-2xl cursor-pointer hover:text-blue-400 transition duration-200" />
        <FaDocker className="text-textPrimary text-2xl cursor-pointer hover:text-blue-400 transition duration-200" />
      </div>
      <div className="border-t border-textPrimary my-4"></div>
      <div className="flex flex-col items-center space-y-4">
        <FaHtml5 className="text-textPrimary text-2xl cursor-pointer hover:text-blue-400 transition duration-200" />
        <DiCss3 className="text-textPrimary text-2xl cursor-pointer hover:text-blue-400 transition duration-200" />
        <RiTailwindCssFill className="text-textPrimary text-2xl cursor-pointer hover:text-blue-400 transition duration-200"/>
        <IoLogoJavascript className="text-textPrimary text-2xl cursor-pointer hover:text-blue-400 transition duration-200" />
        <FaNodeJs className="text-textPrimary text-2xl cursor-pointer hover:text-blue-400 transition duration-200" />
        <SiVitess className="text-textPrimary text-2xl cursor-pointer hover:text-blue-400 transition duration-200" />
        <FaReact className="text-textPrimary text-2xl cursor-pointer hover:text-blue-400 transition duration-200" />
        <FaFigma className="text-textPrimary text-2xl cursor-pointer hover:text-blue-400 transition duration-200" />
        <SiVisualstudiocode className="text-textPrimary text-2xl cursor-pointer hover:text-blue-400 transition duration-200" />
        <SiVim className="text-textPrimary text-2xl cursor-pointer hover:text-blue-400 transition duration-200" />
      </div>
    </div>
  )
}

export default SidebarIcons
