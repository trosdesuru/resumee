import React, { useState } from 'react'
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

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

                <div className="relative flex items-start">
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

                    <div className="flex flex-col space-y-4 mt-4">
                        <div className="flex items-center space-x-2">
                            <FaEnvelope />
                            <p className='text-sm font-jetbrains font-thin'>eduardhernandezventos@gmail.com</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaPhone />
                            <p className='text-sm font-jetbrains font-thin'>+34 683 584 981</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaMapMarkerAlt />
                            <p className='text-sm font-jetbrains font-thin'>Barcelona, España</p>
                        </div>

                        <div className="flex space-x-4 mt-4">
                            <a href="https://www.linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="hover:text-[#FFBA52]" size={20} />
                            </a>
                            <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="hover:text-[#FFBA52]" size={20} />
                            </a>
                            <a href="https://twitter.com/tuusuario" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="hover:text-[#FFBA52]" size={20} />
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
