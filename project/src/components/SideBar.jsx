import React, { useState } from 'react'
import { FaBriefcase, FaCode, FaGraduationCap, FaHtml5, FaTools, FaReact } from 'react-icons/fa'
import { RiInformation2Line } from "react-icons/ri"
import { DiJavascript1 } from "react-icons/di"
import { VscGithub } from 'react-icons/vsc'

const Sidebar = ({ openSection }) => {
    console.debug('side bar -> call')

    const [width, setWidth] = useState(192)
    const [isDragging, setIsDragging] = useState('')

    const handleMouseDown = (event) => {
        setIsDragging(true)
        const startX = event.clientX

        const doDrag = (event) => {
            const newWidth = Math.max(192, Math.min(500, width + (event.clientX - startX)))
            console.debug('actual width:', newWidth)

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
        <div style={{ width }} className="flex relative bg-background text-textPrimary mt-10 h-full border-r border-l border-border">
            <div className="flex flex-col h-full w-full">

                <div className='flex flex-row items-center pl-4 pt-4 pb-4'>
                    <RiInformation2Line className="mr-2 text-bleu" />
                    <h2 className="text-sm font-doppioOne">Eduard Hernández</h2>
                </div>

                <div className="w-full border-t border-gray"></div>

                <ul className="flex flex-col font-doppioOne text-sm">
                    <li onClick={() => openSection('Experiencia')} className="relative flex items-center px-4 py-2 hover:bg-gray cursor-pointer hover:line">
                        {/* <FaBriefcase className="mr-2 text-bleu" /> Experiencia */}
                        <DiJavascript1 size={18} className="mr-2 text-yellowHover" /> Experiencia
                    </li>
                    <li onClick={() => openSection('Habilidades')} className="relative flex items-center px-4 py-2 hover:bg-gray cursor-pointer hover:line">
                        {/* <FaCode className="mr-2 text-bleu" /> Habilidad */}
                        <FaReact size={18} className="mr-2 text-bleu" /> Habilidad
                    </li>
                    <li onClick={() => openSection('Proyectos')} className="relative flex items-center px-4 py-2 hover:bg-gray cursor-pointer hover:line">
                        {/* <FaTools className="mr-2 text-bleu" /> Proyectos */}
                        <VscGithub size={18} className="mr-2 text-textPrimary" /> Proyectos
                    </li>
                    <li onClick={() => openSection('Educación')} className="relative flex items-center px-4 py-2 hover:bg-gray cursor-pointer hover:line">
                        {/* <FaGraduationCap className="mr-2 text-bleu" /> Educación */}
                        <div className="relative flex items-center">
                            <div className="relative flex items-center justify-center mr-2">
                                <span className="absolute inset-0.7 flex items-center justify-center w-3 h-3 bg-white rounded-full"></span>
                                <FaHtml5 size={18} className="text-orange-500 relative z-10" />
                            </div>
                        </div>
                        Educación
                    </li>
                </ul>
            </div>

            <div
                className={`absolute top-0 right-0 h-full w-1 cursor-ew-resize ${isDragging ? 'bg-blue-500' : 'hover:bg-bleu'} transition-colors duration-200`}
                onMouseDown={handleMouseDown}
            />
        </div>
    )
}

export default Sidebar
