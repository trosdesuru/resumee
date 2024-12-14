import React, { useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'

import TechsMessage from './components/TechsMessage'
import WelcomeMessage from './components/WelcomeMessage'
import ProfileMessage from './components/ProfileMessage'

import Header from './components/Header'
import SidebarIcons from './components/SideBarIcons'
import SideBar from './components/SideBar'
import TabBar from './components/TabBar'
import EditorScreen from './components/EditorScreen'
import Terminal from './components/Terminal'
import Footer from './components/Footer'

function App() {
  console.debug('app -> call')

  const [openTabs, setOpenTabs] = useState([])
  const [activeTab, setActiveTab] = useState(null)
  const [currentMessage, setCurrentMessage] = useState('welcome')

  const [experience, setExperience] = useState(null)
  const [skills, setSkills] = useState(null)
  const [projects, setProjects] = useState(null)
  const [education, setEducation] = useState(null)

  const [openSidebar, setOpenSidebar] = useState(false)
  const toggleSidebar = () => setOpenSidebar(!openSidebar)


  useEffect(() => {
    fetch('/data/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('error al cargar la data')
        }
        return response.json()
      })
      .then(data => {
        setExperience(data.experience)
        setSkills(data.skills)
        setProjects(data.projects)
        setEducation(data.education)
      })
      .catch(error => console.error(`error cargando ${activeTab}`, error))
  }, [])

  const openSection = (section) => {
    if (!openTabs.includes(section)) {
      setOpenTabs(prevTabs => [...prevTabs, section])
    }
    setActiveTab(section)
  }

  const handleNext = () => {
    if (currentMessage === 'welcome') {
      setCurrentMessage('techs')

    } else setCurrentMessage('profile')
  }

  const handleCloseIntro = () => {
    setCurrentMessage(null)
  }

  const closeTab = (section) => {
    const updatedTabs = openTabs.filter(tab => tab !== section)
    setOpenTabs(updatedTabs)

    if (activeTab === section) {
      const tabIndex = openTabs.indexOf(section)
      if (updatedTabs.length > 0) {
        const newActiveTab = updatedTabs[tabIndex] || updatedTabs[tabIndex - 1]
        setActiveTab(newActiveTab)

      } else { setActiveTab(null) }
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
          <SidebarIcons toggleSidebar={toggleSidebar} />
          <Analytics />
          {openSidebar && (
            <SideBar onClose={toggleSidebar} openSection={openSection} />
          )}
          <Analytics />

          <div className="flex flex-col flex-1 overflow-hidden">
            <TabBar openTabs={openTabs} activeTab={activeTab} setActiveTab={setActiveTab} closeTab={closeTab} />
            <EditorScreen activeTab={activeTab} experience={experience} skills={skills} projects={projects} education={education} />
            <Terminal />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
