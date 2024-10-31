import { useState } from 'react'

function Terminal() {
    const [input, setInput] = useState('')
    const [output, setOutput] = useState('')
    
    const handleInputChange = (event) => setInput(event.target.value)
    const handleCommand = () => {
        let result = `Comando no reconocido: ${input}`
        if (input.toLowerCase() === 'help') {
            result = 'Comandos disponibles: help, clear'
        } else if (input.toLowerCase() === 'clear') {
            setOutput([])
            setInput([])
            return
        }
        setOutput([...output, `> ${input}`, result])
        setInput('')
    }
    return (
        <div className="bg-tab p-2 h-32 text-sm border-t border-border text-textSecondary">
            <div>
                {/* {output.map((line, index) => (
                    <div key={index}>{line}</div>
                ))} */}
                <input
                    className="w-full bg-tab text-textPrimary"
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={(event) => event.key === 'Enter' && handleCommand()}
                    placeholder="Type a command..."
                />
            </div>
        </div>
    )
}

export default Terminal