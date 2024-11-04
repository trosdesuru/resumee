import React from 'react'

const TechsMessage = ({ onNext }) => {
    return (
        <div className="overlay-dark flex items-start justify-start">
            <div
                className="tooltip-container"
                style={{
                    top: '420px',
                    left: '60px',
                }}
            >
                <p className="text-sm font-jetbrains font-light text-white">
                    Aquí aparecen las tecnologías usadas en este proyecto.
                </p>
                <button className="bg-bleu text-white px-3 py-1 mt-8 rounded-md font-robotomono text-[14px] font-regular"
                    onClick={onNext}>
                    Entendido
                </button>
                <div className="tooltip-arrow mt-10"></div>
            </div>
        </div>
    )
}

export default TechsMessage;
