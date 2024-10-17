import React from 'react'
import Div from './library/Div'

export default function MainArea({ activeSection }) {

    return (
        <Div className="flex-grow p-8">
            <h1 className="text-2xl font-bold">{activeSection}</h1>
            <p className="mt-4">Aquí irá el contenido de la sección: {activeSection}</p>
        </Div>
    )
}
