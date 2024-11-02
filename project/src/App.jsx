import React, { useState } from 'react'

import BottomBar from './components/BottomBar'
import EditorPanel from './components/EditorPanel'
import SidebarIcons from './components/SideBarIcons'
import SideBar from './components/SideBar'
import TabBar from './components/TabBar'
import Terminal from './components/Terminal'
import VsCodeBar from './components/VsCodeBar'

function App() {
  console.debug('app -> call')

  const [openTabs, setOpenTabs] = useState([])
  const [activeTab, setActiveTab] = useState(openTabs[0])

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
      <VsCodeBar />
      <VsCodeBar />
      <div className="flex flex-1 overflow-hidden">
        <SidebarIcons />
        <SideBar openSection={openSection} />

        <div className="flex flex-col flex-1 overflow-hidden">
          <TabBar openTabs={openTabs} closeTab={closeTab} activeTab={activeTab} setActiveTab={setActiveTab} />
          <EditorPanel openTabs={openTabs} />
          <Terminal />
        </div>
      </div>
      <BottomBar />
    </div>
  )
}

export default App
