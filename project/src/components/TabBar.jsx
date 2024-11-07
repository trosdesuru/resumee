import React from 'react'

import { GoGitCompare } from 'react-icons/go'
import { FaTerminal } from 'react-icons/fa'
import { BiDockBottom } from 'react-icons/bi'
import { VscRunAll } from 'react-icons/vsc'
import { BsThreeDots } from 'react-icons/bs'

function TabBar({ openTabs, closeTab, activeTab, setActiveTab }) {
    console.debug('tap bar -> call')

    if (openTabs.length === 0) return null

    return (
        <div className='flex mt-10 mr-4 w-full font-doppioOne text-textPrimary justify-between overflow-y-auto'>
            <div className='flex flex-row justify-between'>
                {openTabs.map((tab) => (
                    <div
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className=
                        {`flex items-center px-6 py-2 cursor-pointer space-x-2 border-r border-border 
                        ${tab === activeTab ? 'border-t-2 border-t-bleu bg-gray' : 'hover:bg-tab'}`}
                    >
                        <h2 className='font-firaCode text-xs'>{tab}</h2>
                        <button
                            alt='button'
                            onClick={(event) => { event.stopPropagation(), closeTab(tab) }}
                            className='font-mono font-extralight text-sm text-white ml-2'>x</button>
                    </div>
                ))}
            </div>
            <div className='flex items-center space-x-2 mx-4'>
                <button alt='button' className='text-textPrimary hover:text-white transition-all'><VscRunAll size={17} /></button>
                <button alt='button' className='text-textPrimary hover:text-white transition-all'><FaTerminal size={17} /></button>
                <button alt='button' className='text-textPrimary hover:text-white transition-all'><BiDockBottom size={17} /></button>
                <button alt='button' className='text-textPrimary hover:text-white transition-all'><BsThreeDots size={17} /></button>
                <button alt='button' className='text-textPrimary hover:text-white transition-all'><GoGitCompare size={17} /></button>
            </div>
        </div>

    )
}

export default TabBar