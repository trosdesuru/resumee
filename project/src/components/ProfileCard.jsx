import React, { useState } from 'react'

import { IoMailUnreadOutline, IoPhonePortraitOutline } from "react-icons/io5"
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { BiHomeAlt2 } from "react-icons/bi"

const ProfileCard = ({ position, onClose }) => {
    const [dragging, setDragging] = useState(false)
    const [offset, setOffset] = useState({ x: 0, y: 0 })

    const handleMouseDown = (e) => {
        setDragging(true)
        setOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        })
    }

    const handleMouseUp = () => {
        setDragging(false)
    }

    const handleMouseMove = (e) => {
        if (dragging) {
            onClose({
                x: e.clientX - offset.x,
                y: e.clientY - offset.y,
            })
        }
    }

    const handleClose = () => {
        onClose(false)
    }

    return (
        <div className="fixed"
            style={{
                left: position.x,
                top: position.y,
                width: '520px',
                background: '#2B2B2B',
                borderRadius: '8px',
                boxShadow: '0 0px 24px rgba(255, 186, 82, 0.28)',
                zIndex: 1000,
                color: 'white',
            }}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}>

            <div className="flex items-center bg-gray-800 cursor-move rounded-t-lg"
                onMouseDown={handleMouseDown}>
                <div className="bg-cardBar p-2 w-full h-[26px] rounded-tl-lg rounded-tr-lg">
                    <div className="flex space-x-2">
                        <div
                            className="w-3 h-3 rounded-full cursor-pointer bg-red-500"
                            onClick={handleClose} />
                        <div className="w-3 h-3 rounded-full cursor-pointer bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full cursor-pointer bg-green-500" />
                    </div>
                </div>
            </div>

            <div className="p-6">
                <div className="ml-4 mb-6">

                    <h2 className="text-2xl font-jetbrains font-light">Eduard Hernández Ventós</h2>

                    <p className="font-robotomono font-light text-sm text-[#6FFFFF]">
                        UX | UI Designer
                        <span className='text-[#FFBA52] mx-2 font-jetbrains'>|</span>
                        Web Designer
                        <span className='text-[#FFBA52] mx-2 font-jetbrains'>|</span>
                        Full-Stack Developer</p>
                </div>

                <div className="relative flex flex-row justify-between items-start">
                    <div className="size-36 rounded-full bg-[#FFBA52] overflow-hidden mr-6">
                        <img
                            className="w-full h-full object-contain"
                            src="./imgProfile.png"
                            alt="Eduard Hernández Ventós"
                            style={{
                                transform: 'scale(1.5)',
                                marginTop: '42px'
                            }} />
                    </div>

                    <div className="flex flex-col justify-between space-y-3">
                        <div className="flex items-center space-x-2 text-[#ECECEC]">
                            <a href="mailto:eduardhernandezventos@gmail.com" target="_blank" rel="noopener noreferrer">
                                <IoMailUnreadOutline size={21} className="hover:text-[#FFBA52]" />
                            </a>
                            <p className='text-sm font-jetbrains font-thin text-[#ECECEC]'>eduardhernandezventos@gmail.com</p>
                        </div>
                        <div className="flex items-center space-x-2 text-[#ECECEC]">
                            <IoPhonePortraitOutline size={21} />
                            <p className='text-sm font-jetbrains font-thin text-[#ECECEC]'>+34 683 584 981</p>
                        </div>
                        <div className="flex items-center space-x-2 text-[#ECECEC]">
                            <BiHomeAlt2 size={21} />
                            <p className='text-sm font-jetbrains font-thin text-[#ECECEC]'>Barcelona, España</p>
                        </div>

                        <div className="flex space-x-3 pt-2 items-center text-[#ECECEC]">
                            <a className="social-icon hover:bg-white hover:text-[#0077B5] rounded-full p-1"
                                href="https://www.linkedin.com/in/eduard-hernandez-ventos"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin size={24} />
                            </a>

                            <a className="social-icon hover:bg-white hover:text-black rounded-full p-1"
                                href="https://github.com/trosdesuru"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaGithub size={24} />
                            </a>

                            <a className="social-icon hover:bg-[#25D366] hover:text-white rounded-full p-1.5"
                                href="https://wa.me/683584981"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaWhatsapp size={26} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center bg-gray-800 rounded-b-lg">
                <div className="bg-cardBar w-full h-[16px] rounded-bl-lg rounded-br-lg"></div>
            </div>
        </div>
    )
}

export default ProfileCard
