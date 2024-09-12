import './App.css'
import Home from "./Routes/Home"
import Navbar from './components/NavBar'

import { Outlet } from 'react-router-dom'

function App() {

  return (
   <div>
    <Home />
    <Navbar />
    <Outlet />
   </div>
  )
}

export default App
