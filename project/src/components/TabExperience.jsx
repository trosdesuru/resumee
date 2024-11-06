import React from 'react'

function TabExperience({ data }) {
  console.debug('tab experience -> call')

  return (
    <div className='bg-background p-4 mx-6 mt-12 border-t border-t-bleu rounded-md'
      style={{ boxShadow: '0 0px 24px rgba(255, 186, 82, 0.1)' }}>
      <div className="text-[#D4D4D4] font-jetbrains font-light">
        <h2 className="text-sm text-blue-400 mb-4">
          <span className='text-purple-400'>import</span> Experiencia
          <span className='text-purple-400'> from </span>
          <span className='text-orange-300'> 'experience'</span>
        </h2>

        <ul className="space-y-4">
          {data.map((item, index) => (
            <li key={index} className="mb-4 pl-4">
              <p className="text-sm font-medium text-blue-500">function
                <span className="text-sm text-yellowHover"> {item.title}</span>()
                <span className='text-yellowHover'> {'{'}</span></p>

              <div className="ml-3 pl-4 border-l border-yellowHover">
                <p className='font-normal text-sm'><span
                  className="text-blue-300">company</span>:
                  <span className="font-extralight text-white"> {item.company}</span>,</p>

                <p className='font-normal text-sm'><span
                  className="text-blue-300">location</span>:
                  <span className="font-extralight text-white"> {item.location}</span>,</p>

                <p className='font-normal text-sm'><span
                  className="text-blue-300">start_date</span>:
                  <span className="font-extralight text-white"> {item.start_date}</span>,</p>

                <p className='font-normal text-sm'><span
                  className="text-blue-300">end_date</span>:
                  <span className="font-extralight text-white"> {item.end_date}</span>,</p>

                <p className='font-normal text-sm'><span
                  className="text-blue-300">description</span>: [</p>

                <ul className="ml-6">
                  {item.description.map((description, index) => (
                    <li key={index} className="text-[#D4D4D4] leading-relaxed">
                      <span className="text-white text-[14px]">{description}</span >{index < item.description.length - 1 ? ',' : ''}
                    </li>
                  ))}
                </ul>
                <p>]</p>
              </div>

              <p className='text-yellowHover'>{'}'}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TabExperience
