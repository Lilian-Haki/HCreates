import { React } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './components/home'

function App() {
  return (
     <Router>
       <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/about" element={<div>About</div>} />
         <Route path="/projects" element={<div>Projects</div>} />
         <Route path="/contact" element={<div>Contact</div>} />
       </Routes>
     </Router>
  )
}

export default App
