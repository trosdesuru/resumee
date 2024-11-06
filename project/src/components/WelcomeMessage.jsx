import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io"

const WelcomeMessage = ({ onNext }) => (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
        <div className="p-6 rounded-lg text-white shadow-lg flex flex-col justify-center max-w-md mx-auto">
            <h2 className="text-3xl font-jetbrains mb-4 text-start">¡Bienvenido/a!</h2>

            <p className="font-jetbrains text-md text-left">
                Muy buenas! Mi nombre es Eduard Hernández,
                desarrollador <span className="bg-gray text-yellow-400 px-1 py-0.5 rounded-md font-robotomono">
                    full-satck
                </span> con experiencia en diseño UX | UI.
                Este proyecto es una ventana a mi perfil, construida para mostrar no solo mis habilidades técnicas,
                sino también mi pasión por una interfaz intuitiva y agradable a la vista.
            </p>

            <p className="font-jetbrains text-md text-left mt-4">
                Navega tranquilo, y si encuentras algo confuso, piensa que simplemente es 'estilo moderno'.
                Como un <span className="bg-gray text-yellow-400 px-1 py-0.5 rounded-md font-robotomono">
                    callback
                </span> que siempre vuelve a dar una segunda oportunidad.
            </p>

            <button className="bg-bleu text-white px-3 py-2 mt-8 mx-auto rounded-md font-robotomono font-semibold flex items-center justify-center gap-2"
                onClick={onNext}>
                'App.jsx<IoIosArrowRoundForward />call'
            </button>
        </div>
    </div>
)

export default WelcomeMessage

// TODO agrandar font & reemplazar texto. 