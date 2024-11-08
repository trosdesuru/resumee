import React from 'react'

// import Searchbar from './SearchBar'

import { BiDockLeft, BiDockBottom, BiDockRight, BiColumns } from 'react-icons/bi'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Header = () => {
  console.debug('editor bar -> call')

  return (
    <div className='fixed flex top-0 w-full items-center h-10 justify-between bg-background border-b border-border z-10'>

      <div className='flex items-center space-x-2 ml-2'>
        <button alt="button" className='size-3 bg-red-500 rounded-full hover:bg-red-700 transition-all'></button>
        <button alt="button" className='size-3 bg-yellow-400 rounded-full hover:bg-yellow-600 transition-all'></button>
        <button alt="button" className='size-3 bg-green-500 rounded-full hover:bg-green-700 transition-all'></button>
      </div>

      {/* <div className='flex-1'><SearchBar /></div> */}

      <div className="hidden sm:flex flex-1 mx-4 justify-center items-center gap-4">
        <div className='hidden sm:flex flex-row gap-2 text-textPrimary cursor-pointer'>
          <FaArrowLeft className='hover:text-white' size={13}/>
          <FaArrowRight className='hover:text-white' size={13}/>
        </div>
        <input className="w-2/4 text-textPrimary text-sm px-3 py-1 rounded-md bg-gray"
          type="text"
          placeholder="currículum de Eduard Hernández..." />
      </div>

      <div className='flex items-center space-x-2 mr-4'>
        <button alt="button" className='text-textPrimary hover:text-white transition-all'><BiDockLeft size={20} /></button>
        <button alt="button" className='text-textPrimary hover:text-white transition-all'><BiDockBottom size={20} /></button>
        <button alt="button" className='text-textPrimary hover:text-white transition-all'><BiDockRight size={20} /></button>
        <button alt="button" className='text-textPrimary hover:text-white transition-all'><BiColumns size={20} /></button>
      </div>
    </div>
  )
}

export default Header

// TODO add arrows on the left side from SearchBar