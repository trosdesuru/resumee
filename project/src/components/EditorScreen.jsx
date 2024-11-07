import React from 'react'
import TabExperience from './TabExperience'
import TabSkills from './TabSkills'
import TabProjects from './TabProjects'
import TabEducation from './TabEducation'

import { SiVisualstudiocode } from "react-icons/si"

function EditorScreen({ activeTab, experience, skills, projects, education }) {
    console.debug('editor screen -> call')

    return (
        <div className={`flex-1 relative overflow-auto bg-gray ${activeTab ? 'bg-gray' : ''}
        lg:px-10 xl:px-10 2xl:px:10`}>
            {!activeTab && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <SiVisualstudiocode className="text-editor text-[30vw]" />
                </div>
            )}

            <div className={`relative z-30 text-textPrimary ${activeTab ? 'sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl' : ''}`}></div>

            <div className="relative z-10 text-textPrimary">
                {activeTab === 'experience' && experience && <TabExperience data={experience} />}
                {activeTab === 'skills' && skills && <TabSkills data={skills} />}
                {activeTab === 'projects' && projects && <TabProjects data={projects} />}
                {activeTab === 'education' && education && <TabEducation data={education} />}
            </div>
        </div>
    )
}

export default EditorScreen
