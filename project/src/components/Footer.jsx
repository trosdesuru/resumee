import React from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight, MdOutlineCellTower } from "react-icons/md"
import { IoSyncOutline, IoWarningOutline } from "react-icons/io5"
import { IoIosGitBranch } from "react-icons/io"
import { HiMiniSignal } from "react-icons/hi2"
import { GoXCircle } from "react-icons/go"
const Footer = () => {
  console.debug('bottom bar -> call')

  return (
    <div className="fixed bottom-0 w-full h-6 justify-between bg-background border-t border-border hidden sm:flex z-20">
      <div className='flex flex-row space-x-2'>
        <div className="flex flex-row w-8 items-center text-white bg-bleu">
          <MdOutlineKeyboardArrowRight size={26} className='absolute pr-1.5 pt-1' />
          <MdOutlineKeyboardArrowLeft size={26} className='absolute pl-1.5 pb-1' />
        </div>
        <div className="flex flex-row items-center font-doppioOne text-xs font-light text-white">
          <IoIosGitBranch size={16} />
          develop*
        </div>
        <div className="flex flex-row items-center text-white">
          <IoSyncOutline size={14} />
        </div>
        <div className="flex flex-row items-center gap-1 text-white">
          <GoXCircle size={13} />
          <p className='font-sans text-xs'> 0</p>
          <IoWarningOutline size={13} />
          <p className='font-sans text-xs'> 0</p>
          <div className='flex flex-row mx-3 gap-1'>
            <MdOutlineCellTower size={13} />
            <p className='font-sans text-xs'> 0</p>
          </div>
          <p className='font-sans text-xs'> Git graph</p>
        </div>
      </div>

      <div className='flex flex-row gap-2 mr-2'>
        <div className="flex flex-row right-0 items-center font-doppioOne text-xs font-light text-white max-[675px]:hidden">
          Ln 38, Col 21
        </div>
        <div className="flex flex-row items-center gap-1 text-white">
          <p className='font-sans text-xs'> Spaces:2</p>
          <p className='font-sans text-xs'>UTF-8</p>
          <div className='flex flex-row mx-3 gap-1'>
            <p className='font-sans text-xs'> {' { '} {' } '} Javascript JSX</p>
          </div>
          <HiMiniSignal size={16}/>
          <p className='font-sans text-xs'>Go Live</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
