import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import { SideSetting } from './global/useContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <SideSetting>
     <App />
    </SideSetting>
  </Router>
)
