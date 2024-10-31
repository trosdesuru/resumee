import React from 'react'
import { useState } from 'react'
import SideBar from './components/SideBar'
import EditorPanel from './components/EditorPanel'
import TabBar from './components/TabBar'
import Terminal from './components/Terminal'

function App() {
  const [openTabs, setOpenTabs] = useState([])

  const openSection = (section) => {
    if (!openTabs.includes(section)) {
      setOpenTabs([...openTabs, section])
    }
  }

  const closeTab = (section) => {
    setOpenTabs(openTabs.filter(tab => tab !== section))
  }

  return (
    <>
      <div className='font-mono' style={{ fontFamily: "'Fira Code', monospace" }}>
        <div className="flex h-screen bg-gray-900 text-white">
          <SideBar openSection={openSection} />
          <div className="flex flex-col flex-1">
            <TabBar openTabs={openTabs} closeTab={closeTab} />
            <EditorPanel openTabs={openTabs} />
            <Terminal />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
