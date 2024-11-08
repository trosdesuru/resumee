import React from 'react'

function TabSkills({ data }) {
  console.debug('tab skills -> call')

  return (
    <div className='p-2 ml-2 mt-2 md:bg-editor md:p-4 md:mx-3 md:my-12 md:border-t md:max-w-4xl md:border-t-bleu md:rounded-md'
      style={{ boxShadow: window.innerWidth >= 768 ? '0 0px 24px rgba(255, 186, 82, 0.1)' : 'none' }}>
      <div className="text-[#D4D4D4] font-jetbrains font-light">
        <h2 className="text-sm text-blue-400 mb-4">
          <span className="text-purple-400">import</span> Habilidades
          <span className="text-purple-400"> from </span>
          <span className="text-orange-300">'skills'</span>
        </h2>

        <ul className="space-y-4">
          {data.map((category, index) => (
            <li key={index} className="md:mb-4 md:pl-4">
              <p className="text-sm font-medium text-blue-500">const
                <span className="text-sm text-yellowHover"> {category.category}</span> =
                <span className="text-yellowHover"> {'{'}</span>
              </p>

              <div className="md:ml-3 md:pl-4 md:border-l md:border-yellowHover">
                <p className="font-normal text-sm">
                  <span className="text-blue-300">skills</span>: [
                </p>

                <ul className="ml-6">
                  {category.skills.map((skill, index) => (
                    <li key={index} className="text-[#D4D4D4] leading-relaxed">
                      <span className="text-white text-[14px]">"{skill}"</span>
                      {index < category.skills.length - 1 ? ',' : ''}
                    </li>
                  ))}
                </ul>
                <p>]</p>
              </div>

              <p className="text-yellowHover">{'}'}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TabSkills
