import React, { useState } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { VscChevronDown } from 'react-icons/vsc'

const Terminal = () => {
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
    <div className="w-full bg-gray-900 text-gray-300 border-t border-gray-600 h-48 font-mono flex flex-col">
      <div className="flex items-center justify-between bg-gray-800 text-gray-400 px-4 py-2 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <VscChevronDown className="text-sm" />
          <span className="text-xs">Terminal</span>
          <span className="text-xs text-gray-500">bash</span>
        </div>
        <div className="flex space-x-2"></div>
      </div>

      <div className="flex-1 p-3 overflow-y-auto space-y-2">
        {commands.map((cmd, index) => (
          <div key={index} className="leading-tight">
            <div className="flex items-center">
              <span className="text-green-500 font-bold">➜</span>
              <span className="ml-2">{cmd.command}</span>
            </div>
            <div className="text-gray-400 ml-6">{cmd.output}</div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex items-center space-x-2 p-3 border-t border-gray-700">
        <span className="text-green-500 font-bold">➜</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent focus:outline-none text-white px-2 py-1 placeholder-gray-500"
          placeholder="Type a command..."
        />
      </form>
    </div>
  )
}

export default Terminal