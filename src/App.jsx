import { Route, Routes } from 'react-router-dom'
import AOS from "aos"
import "aos/dist/aos.css"
import Home from './pages/home-page'
import Projects from './pages/projects.jsx'
import './App.css'
import { useEffect } from 'react'
import ProjectDetails from './pages/projectDetails.jsx'
function App() {

  useEffect(() => {
    AOS.init({
      duration: 200,
      once: false,
      mirror: true,
    });
  }, [])

  return (
    <>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects-gallery' element={<Projects />} />
      <Route path='/projects/:slug' element={<ProjectDetails />}></Route>
      </Routes>
    </>
  )
}

export default App
