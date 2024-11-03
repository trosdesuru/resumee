import React from 'react'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import App from './App.jsx'
import './index.css'

const root = createRoot(document.getElementById('root'))
root.render(<StrictMode><App /></StrictMode>)


function logInfo(title, message) {
  console.info(`\n%c${title}%c\n\n${message}`,
    'color: #ffffff; background-color: #007acc; font-size: 16px; font-weight: bold; padding: 8px; border-radius: 4px;',
    'color: #ffffff; font-size: 14px'
  )
}

logInfo('👋 Bienvenido/a al sitio web de Eduard Hernández!\nCV 1.2', '')
logInfo('-> Created CV_1.0:', 'Project created(npm run build)\n\n- Vite + React\n- Tailwindcss\n- main.jsx\n- App.jsx\n')
logInfo('-> Updated CV_1.1:', 'Setted Visual Structure\n')
logInfo('-> Updated CV_1.2:', 'Setted activeTabs on EditorScreen\n')
logInfo('-> Coming soon CV_1.3:', 'Create an API service\n')