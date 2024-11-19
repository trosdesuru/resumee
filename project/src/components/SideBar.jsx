import React, { useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import ProfileCard from './ProfileCard'

import { FaHtml5, FaReact } from 'react-icons/fa'
import { RiInformation2Line } from "react-icons/ri"
import { DiJavascript1 } from "react-icons/di"
import { VscGithub } from 'react-icons/vsc'

const Sidebar = ({ openSection }) => {
    console.debug('side bar -> call')

    const [width, setWidth] = useState(192)
    const [isDragging, setIsDragging] = useState('')
    const [isProfileCardOpen, setIsProfileCardOpen] = useState(false)
    const [position, setPosition] = useState({ x: 100, y: 100 })

    const handleMouseDown = (event) => {
        event.preventDefault()

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

    const toggleProfileCard = () => {
        if (window.innerWidth >= 640 || isProfileCardOpen)
            setIsProfileCardOpen(!isProfileCardOpen)
    }

    const updateProfileCardPosition = (newPosition) => {
        if (newPosition) {
            setPosition(newPosition)
        } else {
            setIsProfileCardOpen(false)
        }
    }

    return (
        <div style={{ width }} className="sm:flex flex-col bg-background text-textPrimary mt-10 h-screen border-r border-l border-border">
            <div className="flex flex-col h-full w-full">

                <div className='flex flex-row items-center pl-4 pt-4 pb-4 cursor-pointer hover:bg-gray hover:line'
                    onClick={toggleProfileCard}>
                    <RiInformation2Line className="mr-2 text-blue-400" />
                    <Analytics />
                    <h2 className="text-sm font-doppioOne">Eduard Hernández</h2>
                </div>

                <div className="w-full border-t border-gray"></div>

                <ul className="flex flex-col font-doppioOne text-sm">
                    <li className="relative flex items-center px-4 py-2 hover:bg-gray cursor-pointer hover:line"
                        onClick={() => openSection('experience')}>
                        <DiJavascript1 className="mr-2 text-yellowHover" size={20} /> Experiencia
                        <Analytics />
                    </li>

                    <li className="relative flex items-center px-4 py-2 hover:bg-gray cursor-pointer hover:line"
                        onClick={() => openSection('skills')}>
                        <FaReact className="mr-2 text-bleu" size={20} /> Habilidad
                        <Analytics />
                    </li>

                    <li className="relative flex items-center px-4 py-2 hover:bg-gray cursor-pointer hover:line"
                        onClick={() => openSection('projects')}>
                        <VscGithub className="mr-2 text-textPrimary" size={20} /> Proyectos
                        <Analytics />
                    </li>

                    <li className="relative flex items-center px-4 py-2 hover:bg-gray cursor-pointer hover:line"
                        onClick={() => openSection('education')}>
                        <div className="relative flex items-center">
                            <div className="relative flex items-center justify-center mr-2">
                                <p className="absolute flex items-center inset-0.7 justify-center w-3.5 h-3.5 bg-white rounded-full"></p>
                                <FaHtml5 className="text-orange-500 relative" size={22} />
                                <Analytics />
                            </div>
                        </div>
                        Formación
                    </li>
                </ul>
            </div>

            <div
                className={`h-full w-1 cursor-ew-resize ${isDragging ? 'bg-blue-500' : 'hover:bg-bleu'} transition-colors duration-200`}
                onMouseDown={handleMouseDown}

            />

            {isProfileCardOpen && <ProfileCard position={position} onClose={updateProfileCardPosition} />}
            <Analytics />
        </div >
    )
}

export default Sidebar
