import React, { useState } from 'react'

import BottomBar from './components/BottomBar'
import EditorScreen from './components/EditorScreen'
import SidebarIcons from './components/SideBarIcons'
import SideBar from './components/SideBar'
import TabBar from './components/TabBar'
import Terminal from './components/Terminal'
import Header from './components/Header'

function App() {
  console.debug('app -> call')

  const [openTabs, setOpenTabs] = useState([])
  const [activeTab, setActiveTab] = useState(null)

  const openSection = (section) => {
    if (!openTabs.includes(section)) {
      setOpenTabs([...openTabs, section])
    }
    if (!activeTab) {
      setActiveTab(section)
    }
  }

  const closeTab = (section) => {
    const updatedTabs = openTabs.filter(tab => tab !== section)
    setOpenTabs(updatedTabs)

    if (activeTab === section) {
      const tabIndex = openTabs.indexOf(section)
      if (updatedTabs.length > 0) {
        const newActiveTab = updatedTabs[tabIndex] || updatedTabs[tabIndex - 1]
        setActiveTab(newActiveTab)
      } else {
        setActiveTab(null)
      }
    }
  }

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden font-mono bg-background">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <SidebarIcons />
        <SideBar openSection={openSection} />

        <div className="flex flex-col flex-1 overflow-hidden">
          <TabBar openTabs={openTabs} activeTab={activeTab} setActiveTab={setActiveTab} closeTab={closeTab} />
          <EditorScreen activeTab={activeTab} />
          <Terminal />
        </div>
      </div>
      <BottomBar />
    </div>
  )
}

export default App
