import React from 'react'

function TabBar({ openTabs, closeTab, activeTab, setActiveTab }) {
    console.debug('tap bar -> call')

    if (openTabs.length === 0) return null

    return (
        <div className='flex mt-10 font-doppioOne text-textPrimary'>
            {openTabs.map((tab) => (
                <div
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className=
                    {`flex items-center px-6 py-2 cursor-pointer space-x-2 border-r border-border 
                        ${tab === activeTab ? 'border-t border-t-bleu bg-gray' : 'border-b hover:bg-tab'}`}
                >
                    <span className='font-firaCode text-xs'>{tab}</span>
                    <button onClick={(event) => {
                        event.stopPropagation()
                        closeTab(tab)
                    }} className='text-sm text-white ml-2'>x</button>
                </div>
            ))}
        </div>
    )
}

export default TabBar

// TODO first option selected will be selected, then just open tabs
// TODO moving tabs when selected