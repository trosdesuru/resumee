import React, { useState } from 'react'

import TopBar from './components/TopBar'
import BottomBar from './components/BottomBar'
import SearchBar from './components/SearchBar'
import SidebarIcons from './components/SideBarIcons'
import SideBar from './components/SideBar'
import EditorPanel from './components/EditorPanel'
import tabs from './components/Tabs'
import TabBar from './components/TabBar'
import Terminal from './components/Terminal'

function App() {
  const [openTabs, setOpenTabs] = useState([])
  const [searchResults, setSearchResults] = useState([])

  const openSection = (section) => {
    if (!openTabs.includes(section)) {
      setOpenTabs([...openTabs, section])
    }
  }

  const closeTab = (section) => {
    setOpenTabs(openTabs.filter(tab => tab !== section))
  }

  const handleSearch = (query) => {
    const results = tabs.filter((tab) => tab.content.includes(query))
    setSearchResults(results)
  }

  return (
    <div className="app flex flex-col h-screen font-mono bg-gray-900 text-white" style={{ fontFamily: "'Fira Code', monospace" }}>
      <TopBar>
        <SearchBar onSearch={handleSearch} />
      </TopBar>

      <div className="flex flex-1">
        <SidebarIcons />
        <SideBar openSection={openSection} />

        <div className="flex flex-col flex-1">
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
