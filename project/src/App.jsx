import React, { useState } from 'react'
import { Analytics } from "@vercel/analytics/react"
import TechsMessage from './components/TechsMessage'
import WelcomeMessage from './components/WelcomeMessage'
import ProfileMessage from './components/ProfileMessage'

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

  const [currentMessage, setCurrentMessage] = useState('welcome')

  const handleNext = () => {
    if (currentMessage === 'welcome') {
      setCurrentMessage('techs')

    } else setCurrentMessage('profile')
  }

  const handleCloseIntro = () => {
    setCurrentMessage(null)
  }
  
  const openSection = (section) => {
    if (!openTabs.includes(section)) {
      setOpenTabs(prevTabs => [...prevTabs, section])
    }
    setActiveTab(section)
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
    <>
      {currentMessage === 'welcome' && <WelcomeMessage onNext={handleNext} />}
      {currentMessage === 'techs' && <TechsMessage onNext={handleNext} />}
      {currentMessage === 'profile' && <ProfileMessage onClose={handleCloseIntro} />}

      <div className="flex flex-col h-screen w-screen overflow-hidden font-mono bg-background">
        <Header />
        <Analytics />
        <div className="flex flex-1 overflow-hidden">
          <SidebarIcons />
          <Analytics />
          <SideBar openSection={openSection} />
          <Analytics />

          <div className="flex flex-col flex-1 overflow-hidden">
            <TabBar openTabs={openTabs} activeTab={activeTab} setActiveTab={setActiveTab} closeTab={closeTab} />
            <EditorScreen activeTab={activeTab} />
            <Terminal />
          </div>
        </div>
        <BottomBar />
      </div>
    </>
  )
}

export default App
