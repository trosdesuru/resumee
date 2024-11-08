import React from 'react'

function TabExperience({ data }) {
  console.debug('tab experience -> call')

  return (
    <div className='bg-gray md:bg-editor md:p-4 md:mx-3 md:my-12 md:border-t md:max-w-3xl md:border-t-bleu md:rounded-md ml-2 mt-2'
      style={{ boxShadow: window.innerWidth >= 767 ? '0 0px 24px rgba(255, 186, 82, 0.1)' : 'none' }}>
      <div className="text-[#D4D4D4] font-jetbrains font-light">
        <h2 className="text-sm text-blue-400 mb-4">
          <span className='text-purple-400'>import</span> Experiencia
          <span className='text-purple-400'> from </span>
          <span className='text-orange-300'> 'experience'</span>
        </h2>

        <ul className="space-y-4">
          {data.map((item, index) => (
            <li key={index} className="md:mb-4 md:pl-4">
              <p className="text-sm font-medium text-blue-500">function
                <span className="text-sm text-yellowHover"> {item.title}</span> ()
                <span className='text-yellowHover'> {'{'}</span></p>

              <div className="m-1 md:ml-3 md:pl-4 md:border-l md:border-yellowHover">
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
                      <span className="text-white text-[14px] sm:mx-0">{description}</span >{index < item.description.length - 1 ? ',' : ''}
                    </li>
                  ))}
                </ul>
                <p className='sm:ml-5'>]</p>
              </div>

              <p className='md:ml-3 text-yellowHover'>{'}'}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TabExperience
