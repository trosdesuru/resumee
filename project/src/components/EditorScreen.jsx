import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import TabExperience from './TabExperience'
import TabSkills from './TabSkills'
import TabProjects from './TabProjects'
import TabEducation from './TabEducation'
import TabProfile from './TabProfile'

import { SiVisualstudiocode } from "react-icons/si"

function EditorScreen({ activeTab, experience, skills, projects, education }) {
    console.debug('editor screen -> call')

    return (
        <div className={`flex-1 overflow-auto bg-gray ${activeTab ? 'bg-gray' : ''}
        lg:px-10 xl:px-10 2xl:px:10`}>
            {!activeTab && (
                <div className="flex h-3/4 items-center justify-center">
                    <Analytics />
                    {window.innerWidth <= 640 ? (<TabProfile />
                    ) : (
                        <SiVisualstudiocode className="text-[20vw] lg:text-[20vw] items-center justify-center text-editor" />)}
                </div>
            )}

            <div className={`relative z-30 text-textPrimary ${activeTab ? 'sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl' : ''}`}></div>

            <div className="relative z-10 text-textPrimary">
                {activeTab === 'experience' && experience && <TabExperience data={experience} />}
                <Analytics />
                {activeTab === 'skills' && skills && <TabSkills data={skills} />}
                <Analytics />
                {activeTab === 'projects' && projects && <TabProjects data={projects} />}
                <Analytics />
                {activeTab === 'education' && education && <TabEducation data={education} />}
                <Analytics />
            </div>
        </div>
    )
}

export default EditorScreen
