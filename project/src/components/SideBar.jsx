import React, { useState } from 'react'
import { FaBriefcase, FaCode, FaGraduationCap, FaTools } from 'react-icons/fa'

const Sidebar = ({ openSection }) => {
    const [width, setWidth] = useState(200)
    const [isDragging, setIsDragging] = useState(false)

    const handleMouseDown = (event) => {
        setIsDragging(true)
        const startX = event.clientX

        const doDrag = (event) => {
            const newWidth = Math.max(200, Math.min(500, width + (event.clientX - startX)))
            console.log('Dragging:', newWidth)
            setWidth(newWidth)
        }

        const stopDrag = () => {
            setIsDragging(false)
            document.removeEventListener('mousemove', doDrag)
            document.removeEventListener('mouseup', stopDrag)
        }

        document.addEventListener('mousemove', doDrag)
        document.addEventListener('mouseup', stopDrag)
    }

    return (
        <div style={{ width }} className="flex flex-col bg-background text-textPrimary mt-10 h-full border-r border-l border-border">
            <div
                className={`w-1 cursor-ew-resize ${isDragging ? 'bg-blue-500' : 'bg-red-300'} transition-colors duration-200`}
                onMouseDown={handleMouseDown}
            />
            <h2 className="text-md font-semibold p-4">Eduard Hernández</h2>
            <ul className="flex flex-col">
                <li onClick={() => openSection('Experiencia')} className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white cursor-pointer">
                    <FaBriefcase className="mr-2" /> Experiencia
                </li>
                <li onClick={() => openSection('Habilidades')} className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white cursor-pointer">
                    <FaCode className="mr-2" /> Habilidad
                </li>
                <li onClick={() => openSection('Proyectos')} className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white cursor-pointer">
                    <FaTools className="mr-2" /> Proyectos
                </li>
                <li onClick={() => openSection('Educación')} className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white cursor-pointer">
                    <FaGraduationCap className="mr-2" /> Educación
                </li>
            </ul>
        </div>
    )
}

export default Sidebar