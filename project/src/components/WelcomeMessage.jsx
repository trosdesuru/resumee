import React from 'react'

import { IoIosArrowRoundForward } from "react-icons/io"

const WelcomeMessage = ({ onNext }) => (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
        <div className="p-6 rounded-lg text-white text-center shadow-lg flex flex-col justify-center">

            <h2 className="text-2xl mb-4 font-jetbrains">¡Bienvenido!</h2>

            <p className='font-jetbrains text-md'>Explora esta aplicación interactiva.<br></br>Haz clic para continuar...</p>

            <button className="bg-bleu text-white px-3 py-1 mt-8 mx-16 rounded-md font-robotomono font-semibold flex items-center justify-center gap-2"
                onClick={onNext}>
                App.jsx<IoIosArrowRoundForward />call
            </button>
        </div>
    </div>
)

export default WelcomeMessage