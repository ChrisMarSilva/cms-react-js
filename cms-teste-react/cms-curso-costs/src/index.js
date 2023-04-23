import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routes from './components/routes'
// import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
)
