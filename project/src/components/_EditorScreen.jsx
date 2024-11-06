import React from 'react'

import { SiVisualstudiocode } from "react-icons/si"

function EditorScreen({ activeTab, experience }) {
    console.debug('editor screen -> call')

    return (
        <div className="flex-1 p-4 overflow-y-auto overflow-x-hidden bg-gray flex items-center justify-center">
            {activeTab === 'experiencia' && experience ? (
                <div className="text-textPrimary mb-4">
                    <h2 className="text-2xl font-semibold">{activeTab}</h2>
                    <p>Contenido de {activeTab}</p>
                </div>
            ) : (
                <SiVisualstudiocode className="text-editor text-[30vw]" />
            )}
        </div>
    )
}

export default EditorScreen
