import React, { forwardRef } from 'react'

const Div = forwardRef(({ children, classname = '' }, ref) => {
    console.debug('div -> call')

    return (
        <div ref={ref} classname={`flex gap-2 p-[0.5rem] ${classname}`}>
            {children}
        </div>
    )
})
Div.displayName = 'Div'

export default Div