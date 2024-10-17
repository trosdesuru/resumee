import React from 'react'
import Div from './library/Div'

export default function Sidebar() {
    
    return (
        <Div className="h-screen w-16 flex flex-col bg-gray-800 text-white">
            <div className="p-4">Icono 1</div>
            <div className="p-4">Icono 2</div>
            <div className="p-4">Icono 3</div>
        </Div>
    )
}

