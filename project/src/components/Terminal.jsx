import React, { useState } from 'react'

import { VscChevronDown } from 'react-icons/vsc'

const Terminal = () => {
  console.debug('terminal -> call')

  const [commands, setCommands] = useState([])
  const [input, setInput] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (input) {
      setCommands((prev) => [...prev, { command: input, output: `Ejecutando: ${input}` }])
      setInput('')
    }
  }

  return (
    <div className="w-full border-t border-border h-48 hidden sm:flex flex-col text-textSecondary">
      <div className="flex items-center justify-between text-gray-400 px-4 py-2">
        <div className="flex items-center space-x-5">
          <p className="font-sans text-[12px] font-normal hover:text-white cursor-pointer" >PROBLEMS</p>
          <p className="font-sans text-[12px] font-normal hover:text-white cursor-pointer" >OUTPUT</p>
          <p className="font-sans text-[12px] font-normal hover:text-white cursor-pointer" >DEBUG CONSOLE</p>
          <p className="font-sans text-[12px] font-normal border-b border-bleu text-white cursor-pointer">TERMINAL</p>
          <p className="font-sans text-[12px] font-normal hover:text-white cursor-pointer" >DEBUG CONSOLE</p>
        </div>
        <div className="flex space-x-2"></div>
      </div>
      <div>
        <div className='p-3'>
          <p className='font-robotomono text-xs'>
            <span className='font-bold text-cyan-500'>[vite] </span> 
            <span className='text-green-500'>hmr update </span>
            <span className='font-normal text-stone-500'>/src/components/Terminal.jsx, /src/index.css </span> 
            <span className='text-yellow-400'>(x31)</span></p>
        </div>
      </div>
    </div>
  )
}

export default Terminal