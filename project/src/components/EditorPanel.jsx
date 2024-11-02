import React from 'react'

function EditorPanel({ openTabs }) {
    console.debug('editor panel -> call')

    return (
        <div className="flex-1 p-4 overflow-y-auto overflow-x-hidden bg-gray">
            {openTabs.length > 0 ? (
                openTabs.map((tab) => (
                    <div key={tab} className="text-white mb-4">
                        <h2 className="text-2xl font-semibold">{tab}</h2>
                        <p>Contenido de {tab}</p>
                    </div>
                ))
            ) : (
                <p className="font-firaCode text-textPrimary text-sm mt-10">No hay secciones abiertas.</p>
            )}
        </div>
    )
}

export default EditorPanel
