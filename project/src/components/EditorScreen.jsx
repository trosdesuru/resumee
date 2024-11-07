import React from 'react'
import TabExperience from './TabExperience'
import TabSkills from './TabSkills'
import TabProjects from './TabProjects'
import TabEducation from './TabEducation'

import { SiVisualstudiocode } from "react-icons/si"

function EditorScreen({ activeTab, experience, skills, projects, education }) {
    console.debug('editor screen -> call')

    return (
        <div className="flex-1 relative p-4 bg-gray overflow-auto">
            {!activeTab && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <SiVisualstudiocode className="text-editor text-[30vw]" />
                </div>
            )}

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
