import React, {forwardRef} from 'react'

const Div = forwardRef(({ children, className = ''}, ref) => {
    console.debug('Div -> call')

    return (
        <div ref={ref} className={`${className}`}>{children}</div>
    )
})

Div.displayName = 'Div'

export default Div