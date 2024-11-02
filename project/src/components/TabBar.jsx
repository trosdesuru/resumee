import React from 'react'

function TabBar({ openTabs, closeTab }) {
    if (openTabs.length === 0) return null

    return (
        <div className='TabBar flex bg-vlue p-10 border-b border-border'>
            {openTabs.map((tab) => (
                <div key={tab} className='flex items-center px-4 py-1 bg-background hover:bg-highlight text-white rounded-t cursor-pointer space-x-2'>
                    <span className='font-medium'>{tab}</span>
                    <button onClick={() => closeTab(tab)} className='text-red-500 hover:text-red-600 ml-2 focus:outline-none'>x</button>
                </div>
            ))}
        </div>
    )
}

export default TabBar

// TODO Hide when nothing opened