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
        <div style={{ width }} className="flex p-2 bg-gray-800">
            <div className="flex-1">
                <h2 className="text-xl font-bold mb-4 text-textPrimary">Eduard Hernández</h2>
                <ul>
                    <li onClick={() => openSection('Experiencia')} className="flex items-center p-2 hover:bg-tab hover:text-textPrimary rounded cursor-pointer">
                        <FaBriefcase className="mr-2" /> Experiencia
                    </li>
                    <li onClick={() => openSection('Habilidades')} className="flex items-center p-2 hover:bg-tab hover:text-textPrimary rounded cursor-pointer">
                        <FaCode className="mr-2" /> Habilidades
                    </li>
                    <li onClick={() => openSection('Proyectos')} className="flex items-center p-2 hover:bg-tab hover:text-textPrimary rounded cursor-pointer">
                        <FaTools className="mr-2" /> Proyectos
                    </li>
                    <li onClick={() => openSection('Educación')} className="flex items-center p-2 hover:bg-tab hover:text-textPrimary rounded cursor-pointer">
                        <FaGraduationCap className="mr-2" /> Educación
                    </li>
                </ul>
            </div>
            <div
                className="resize-handle"
                onMouseDown={handleMouseDown}
                style={{
                    cursor: 'ew-resize',
                    width: '5px',
                    borderColor: 'white',
                    backgroundColor: 'white'
                }}
            />
        </div>
    )
}

export default Sidebar
