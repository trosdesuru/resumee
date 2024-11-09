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
    <div className=" w-full text-textSecondary border-t border-vs_test h-48 font-mono hidden sm:flex flex-col">
      <div className="flex items-center justify-between bg-gray-800 text-gray-400 px-4 py-2 border-b border-border">
        <div className="flex items-center space-x-2">
          <VscChevronDown className="text-sm" />
          <h2 className="text-xs">TERMINAL</h2>
          <p className="text-xs text-editor">BASH</p>
        </div>
        <div className="flex space-x-2"></div>
      </div>

      <form onSubmit={handleSubmit} className="flex items-center space-x-2 p-3 mb-10 border-t border-gray-700">
        <p className="text-green-500 font-bold">➜</p>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          className="flex-1 bg-transparent focus:outline-none text-white px-2 py-1 placeholder-gray-500"
          placeholder={`VITE ${input} v5.4.10  ready in 637 ms`}
        />
      </form>
    </div>
  )
}

export default Terminal