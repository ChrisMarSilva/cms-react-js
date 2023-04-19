import { useContext } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import { ThemeContext } from './context/ThemeContext'
import './App.css';

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
