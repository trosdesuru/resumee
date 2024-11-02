import React, { useState } from 'react'
import { FaBriefcase, FaCode, FaGraduationCap, FaTools } from 'react-icons/fa'

const Tab = ({ tabs, onTabclick, activeTab }) => {
    console.debug('tab -> call')

    return (
        <div className='flex border-b border-gray-700'>
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    onClick={() => onTabclick(index)}
                    className={`p-2 hover:bg-gray-700 ${activeTab === index ? 'bg-gray-800' : ''}`}>
                    <FaBriefcase className="text-bleu" />
                    {tab.title}
                </button>
            ))}
        </div>
    )
}

export default Tab