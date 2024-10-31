import React, { useState } from 'react'

const Tab = ({ tabs, onTabclick, activateTab }) => {
    return (
        <div className='flex border-b border-gray-700'>
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    className={`p-2 hover:bg-gray-700 ${activeTab === index ? 'bg-gray-800' : ''}`}
                    onClick={() => onTabclick(index)}>
                    {tab.title}
                </button>
            ))}
        </div>
    )
}

export default Tab