import React from 'react'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import App from './App.jsx'
import './index.css'

const root = createRoot(document.getElementById('root'))
root.render(<StrictMode><App /></StrictMode>)


console.warn(
  "%c👋 Bienvenido/a al sitio web de Eduard Hernández!\n%cExplora el código y disfruta!",
  "color: #ffffff; background-color: #007acc; font-size: 16px; font-weight: bold; padding: 8px; border-radius: 4px;",
  "color: #ffffff; font-size: 14px;"
)