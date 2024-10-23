import React from 'react'
import './App.css'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Sidebar from './components/Sidebar.jsx'
import MainArea from './components/MainArea.jsx'

export default function App() {

  return (
    <>
      <Header />
      <Sidebar />
      <MainArea />
      <Footer />
    </>
  )
}