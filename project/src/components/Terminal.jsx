import React, { useState } from 'react'

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
    <div className="terminal m-0 p-4 border border-gray-700">
      <div className="output">
        {commands.map((cmd, index) => (
          <div key={index}>
            <span className="text-green-400"> {cmd.command}</span>
            <div>{cmd.output}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          className="input border border-gray-500"
          placeholder="Ingrese un comando"
        />
      </form>
    </div>
  )
}

export default Terminal
