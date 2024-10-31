import React from 'react'
import { FaBriefcase, FaCode, FaGraduationCap, FaTools } from 'react-icons/fa'

function Sidebar({ openSection }) {
    return (
        <div className="w-40 bg-sidebar p-4 text-textSecondary border-r border-border">
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
    )
}

export default Sidebar
