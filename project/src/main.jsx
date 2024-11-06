import React from 'react'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import App from './App.jsx'
import logInfoConsole from './utils/logInfoConsole'
import './index.css'

const root = createRoot(document.getElementById('root'))
root.render(<StrictMode><App /></StrictMode>)

logInfoConsole()