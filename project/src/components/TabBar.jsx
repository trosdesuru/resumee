import React from 'react'

function TabBar({ openTabs, closeTab }) {
    return (
        <div className="flex bg-tab p-8 border-b border-border">
            {openTabs.map((tab) => (
                <div key={tab} className="flex items-center px-4 py-1 bg-gray-700 hover:bg-highlight text-white rounded-t cursor-pointer space-x-2">
                    <span className="font-medium">{tab}</span>
                    <button onClick={() => closeTab(tab)} className="text-red-500 hover:text-red-600 ml-2 focus:outline-none">x</button>
                </div>
            ))}
        </div>
    )
}

export default TabBar