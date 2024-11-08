import React from 'react'

import { FaGithub } from 'react-icons/fa'

function TabProjects({ data }) {
  return (
    <div className='p-2 ml-2 mt-2 md:bg-editor md:p-4 md:mx-3 md:my-12 md:border-t md:max-w-4xl md:border-t-bleu md:rounded-md'
      style={{ boxShadow: window.innerWidth >= 768 ? '0 0px 24px rgba(255, 186, 82, 0.1)' : 'none' }}>
      <div className="text-[#D4D4D4] font-jetbrains font-light">
        <h2 className="text-sm text-blue-400 mb-4">
          <span className='text-purple-400'>import</span> Proyectos
          <span className='text-purple-400'> from </span>
          <span className='text-orange-300'> 'projects'</span>
        </h2>

        <ul className="space-y-4">
          {data.map((project, index) => (
            <li key={index} className="mb-6 pl-4">
              <p className="text-sm font-medium text-blue-500">function
                <span className="text-sm text-yellowHover"> {project.title}</span>()
                <span className='text-yellowHover'> {'{'}</span>
              </p>

              <div className="md:ml-3 md:pl-4 md:border-l md:border-yellowHover">
                <p className='font-normal text-sm'>
                  <span className="text-blue-300">description</span>:
                  <span className="font-extralight text-white"> {project.description}</span>,
                </p>

                <p className='font-normal text-sm'>
                  <span className="text-blue-300">technologies</span>: [
                </p>
                <ul className="ml-6">
                  {project.technologies.map((tech, index) => (
                    <li key={index} className="text-[#D4D4D4] leading-relaxed">
                      <span className="text-white text-[14px]">{tech}</span>{index < project.technologies.length - 1 ? ',' : ''}
                    </li>
                  ))}
                </ul>
                <p>],</p>

                {/* {project.images && (
                  <div className="mt-4 flex flex-wrap">
                    {project.images.map((image, index) => (
                      <img key={index} src={image} alt={`project-image-${index}`} className="w-1/2 md:w-1/3 p-2 rounded-lg shadow-lg" />
                    ))}
                  </div>
                )} */}

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full"
                  >
                    <span className='text-sm text-bleu'>Documentación del proyecto:</span>
                    <FaGithub size={26} className='ml-5 mt-2' />
                  </a>
                )}
              </div>

              <p className='text-yellowHover'>{'}'}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TabProjects
