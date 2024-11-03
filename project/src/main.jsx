import React from 'react'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import App from './App.jsx'
import './index.css'

const root = createRoot(document.getElementById('root'))
root.render(<StrictMode><App /></StrictMode>)


console.info(
  '%c👋 Bienvenido/a al sitio web de Eduard Hernández!\nCV 1.2%c',
  'color: #ffffff; background-color: #007acc; font-size: 16px; font-weight: bold; padding: 8px; border-radius: 4px;',
  'color: #ffffff; font-size: 14px'
)

console.info(
  '\n%c-> Updated CV_1.2:\n\nSetted activeTabs on VsCodeScreen\n',
  'color: #ffffff; font-size: 14px'
)

console.info(
  '\n%c-> Coming soon CV_1.3:\n\nCreate an API service\n',
  'color: #ffffff; font-size: 14px'
)