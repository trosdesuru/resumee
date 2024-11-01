import React from 'react'
import { BiDockLeft, BiDockBottom, BiDockRight, BiColumns } from 'react-icons/bi'
import SearchBar from './Searchbar'

const TopBar = () => {
  return (
    <div className='fixed top-0 w-full flex items-center h-10 justify-between bg-editor border-b border-border z-10'>

      <div className='flex items-center space-x-2 ml-2'>
        <button className='size-3 bg-red-500 rounded-full hover:bg-red-600 transition-all'></button>
        <button className='size-3 bg-yellow-400 rounded-full hover:bg-yellow-600 transition-all'></button>
        <button className='size-3 bg-green-500 rounded-full hover:bg-green-600 transition-all'></button>
      </div>

      <div className='flex-1 p-4'>
        <SearchBar />
      </div>

      <div className='flex items-center space-x-2 mr-2'>
        <button className='text-gray-400 hover:text-white transition-all'><BiDockLeft size={20} /></button>
        <button className='text-gray-400 hover:text-white transition-all'><BiDockBottom size={20} /></button>
        <button className='text-gray-400 hover:text-white transition-all'><BiDockRight size={20} /></button>
        <button className='text-gray-400 hover:text-white transition-all'><BiColumns size={20} /></button>
      </div>
    </div>
  )
}

export default TopBar
