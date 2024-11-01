import React, { useState } from 'react'
import { FaBriefcase, FaCode, FaGraduationCap, FaTools } from 'react-icons/fa'

const Sidebar = ({ openSection }) => {
    const [width, setWidth] = useState(250)

    const handleMouseDown = (event) => {
        const startX = event.clientX

        const doDrag = (event) => {
            const newWidth = width + (event.clientX - startX)
            setWidth(newWidth)
        }

        const stopDrag = () => {
            document.removeEventListener('mousemove', doDrag)
            document.removeEventListener('mouseup', stopDrag)
        }

        document.addEventListener('mousemove', doDrag)
        document.addEventListener('mouseup', stopDrag)
    }

    return (
        <div style={{ width }} className="bg-editor text-textPrimary mt-10 h-full border-r border-l border-border flex flex-col">
            <h2 className="text-xl font-semibold p-4">Eduard Hernández</h2>
            <ul className="flex flex-col">
                <li onClick={() => openSection('Experiencia')} className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white cursor-pointer">
                    <FaBriefcase className="mr-2" /> Experiencia
                </li>
                <li onClick={() => openSection('Habilidades')} className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white cursor-pointer">
                    <FaCode className="mr-2" /> Habilidades
                </li>
                <li onClick={() => openSection('Proyectos')} className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white cursor-pointer">
                    <FaTools className="mr-2" /> Proyectos
                </li>
                <li onClick={() => openSection('Educación')} className="flex items-center px-4 py-2 hover:bg-gray-700 hover:text-white cursor-pointer">
                    <FaGraduationCap className="mr-2" /> Educación
                </li>
            </ul>
            <div
                className="resize-handle w-1 cursor-ew-resize bg-gray-600"
                onMouseDown={handleMouseDown}
            />
        </div>
    )
}

export default Sidebar
