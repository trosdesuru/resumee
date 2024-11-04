import React from 'react'

const ProfileMessage = ({ onClose }) => {
    return (
        <div className="overlay-dark flex items-start justify-start">
            <div
                className="tooltip-container"
                style={{
                    top: '60px',
                    left: '200px',
                }}
            >
                <p className="text-sm font-jetbrains font-light text-white">
                    Aquí podrás ver mi tarjeta de contacto e información laboral.
                </p>
                <button className="bg-bleu text-white px-3 py-1 mt-8 rounded-md font-robotomono text-[14px] font-semibold"
                    onClick={onClose}>
                    go!
                </button>
                <div className="tooltip-arrow mt-10"></div>
            </div>
        </div>
    )
}

export default ProfileMessage
