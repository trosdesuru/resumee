import React from 'react'

function MainScreen({ activeTab }) {
    console.debug('editor panel -> call')

    return (
        <div className="flex-1 p-4 overflow-y-auto overflow-x-hidden bg-gray">
            {activeTab ? (
                <div className="text-white mb-4">
                    <h2 className="text-2xl font-semibold">{activeTab}</h2>
                    <p>Contenido de {activeTab}</p>
                </div>
            ) : (
                <p className="font-firaCode text-textPrimary text-sm mt-10">No hay secciones abiertas.</p>
            )}
        </div>
    )
}

export default MainScreen
