import React from 'react'

import { IoMailUnreadOutline } from 'react-icons/io5'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { BiHomeAlt2 } from 'react-icons/bi'
import { FaLinkedin, FaGithub, FaWhatsapp, FaDiscord, FaDev } from 'react-icons/fa'

function profile({ data }) {
  console.debug('tab skills -> call')

  return (
    <div className='p-2 top-0 left-0'>
      <div className="text-[#D4D4D4] font-jetbrains font-light">
        <h2 className="text-sm text-blue-400 mb-2">
          <span className="text-purple-400">import</span> Contacto
          <span className="text-purple-400"> from </span>
          <span className="text-orange-300">'profile'</span>
        </h2>

        <div className="p-1">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-xl font-jetbrains font-light">Eduard Hernández Ventós</h2>
            <p className="font-robotomono font-normal text-sm text-[#6FFFFF]">
              UX | UI Designer
              <span className='text-[#FFBA52] mx-1 sm:mx-2 font-jetbrains'>|</span>
              Web Designer
              <span className='text-[#FFBA52] mx-1 sm:mx-2 font-jetbrains'>|</span>
              Full-Stack Developer
            </p>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-1 text-[#ECECEC]">
              <a href="mailto:eduardhernandezventos@gmail.com" target="_blank" rel="noopener noreferrer">
                <IoMailUnreadOutline size={18} sm:size={21} className="hover:text-[#6FFFFF]" />
              </a>
              <p className='text-sm sm:text-sm font-jetbrains font-thin text-[#ECECEC]'>eduardhernandezventos@gmail.com</p>
            </div>
            <div className="flex items-center space-x-1 text-[#ECECEC]">
              <IoPhonePortraitOutline size={18} sm:size={21} />
              <p className='text-sm font-jetbrains font-thin text-[#ECECEC]'>+34 683 584 981</p>
            </div>
            <div className="flex items-center space-x-1 text-[#ECECEC]">
              <BiHomeAlt2 size={18} sm:size={21} />
              <p className='text-sm font-jetbrains font-thin text-[#ECECEC]'>Barcelona, España</p>
            </div>

            <div className="flex space-x-2 pt-2 items-center text-[#ECECEC]">
              <a className="social-icon hover:bg-white hover:text-[#0077B5] rounded-full p-0.5"
                href="https://www.linkedin.com/in/eduard-hernandez-ventos"
                target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} sm:size={24} />
              </a>

              <a className="social-icon hover:bg-white hover:text-black rounded-full p-0.5"
                href="https://github.com/trosdesuru"
                target="_blank" rel="noopener noreferrer">
                <FaGithub size={20} sm:size={24} />
              </a>

              <a className="social-icon hover:bg-[#25D366] hover:text-white rounded-full p-0.5"
                href="https://wa.me/683584981"
                target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={22} sm:size={26} />
              </a>

              <a className="social-icon hover:bg-violet-500 hover:text-white rounded-full p-0.5"
                href="https://discord.com/users/eduhv"
                target="_blank" rel="noopener noreferrer">
                <FaDiscord size={22} sm:size={26} />
              </a>

              <a className="social-icon hover:bg-white hover:text-black rounded-full p-0.5"
                href="https://dev.to/eduhvdev"
                target="_blank" rel="noopener noreferrer">
                <FaDev size={22} sm:size={26} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default profile