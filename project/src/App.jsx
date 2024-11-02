import React, { useState } from 'react'

import TopBar from './components/TopBar'
import BottomBar from './components/BottomBar'
import SidebarIcons from './components/SideBarIcons'
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
    setOpenTabs(openTabs.filter((tab) => tab !== section))
  }

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden font-mono bg-background">
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        <SidebarIcons />
        <SideBar openSection={openSection} />

        <div className="flex flex-col flex-1 overflow-hidden">
          <TabBar openTabs={openTabs} closeTab={closeTab} />
          <EditorPanel openTabs={openTabs} />
          <Terminal />
        </div>
      </div>
      <BottomBar />
    </div>
  )
}

export default App
