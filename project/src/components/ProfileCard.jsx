import React, { useState } from 'react'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

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
        <div
            className="fixed"
            style={{
                left: position.x,
                top: position.y,
                width: '300px',
                background: '#2c2c2c',
                borderRadius: '8px',
                boxShadow: '0 4px 10px rgba(255, 165, 0, 0.5)',
                zIndex: 1000,
            }}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <div
                className="flex items-center bg-gray-800 text-white p-2 cursor-move"
                onMouseDown={handleMouseDown}
            >
                <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer" onClick={handleClose} />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer" />
                    <div className="w-3 h-3 bg-green-500 rounded-full cursor-pointer" />
                </div>
                <h2 className="text-lg font-semibold ml-2">Tu Nombre</h2>
            </div>
            
            <div className="p-4 text-white">
                <img
                    src="URL_DE_TU_FOTO"
                    alt="Tu nombre"
                    className="w-16 h-16 rounded-full mb-4"
                />
                <h3 className="font-semibold">Puestos Laborales</h3>
                <ul>
                    <li>Diseñador Web</li>
                    <li>Diseño UX</li>
                    <li>Full Stack</li>
                </ul>
                <h4 className="mt-2 font-semibold">Información de Contacto</h4>
                <p>Email: tuemail@example.com</p>
                <p>Teléfono: +123456789</p>
                <div className="flex space-x-2 mt-2">
                    <a href="https://www.linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://twitter.com/tuusuario" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={24} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
