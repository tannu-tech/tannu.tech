import { useState } from 'react'
import Home from './components/Home'


import './App.css'
import './Skill.css'
import Projects from './components/Projects'
import Skiils from './components/Skills'
import Contact from './components/Contact'
import Don from './components/Don'  
import Happy from './components/Happy'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
return (
  <>

    <Routes>
      <Route path="/" element={<Don />} />
      <Route path="/hny" element={<Happy />} />
    </Routes>
    
   
  </>
)

}

export default App


















  
          {/* <div className="container"> 
            <div className="project">
                <h1 className='project'> My Projects</h1>
                <div className="project1">
                  <h2> project=1✨</h2>
                  <p>link ⬆</p>
            </div>
            <div className="project2">
                  <h2>project=2✨</h2>
                  <p>link ⬆</p>
            </div>
            <div className="project3">
                  <h2>project=3✨</h2>
                  <p>link ⬆</p>
            </div>
            </div>
          </div> */}
