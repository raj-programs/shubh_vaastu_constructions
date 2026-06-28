import { Route, Routes } from 'react-router-dom'
import AOS from "aos"
import "aos/dist/aos.css"
import Home from './pages/home-page'
import './App.css'
import { useEffect, lazy, Suspense } from 'react'
import { Analytics } from '@vercel/analytics/react'

const Projects = lazy(() => import("./pages/projects.jsx"))
const ProjectDetails = lazy(() => import("./pages/projectDetails.jsx"))

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
    <Suspense fallback={<div></div>}>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects-gallery' element={<Projects />} />
      <Route path='/projects/:slug' element={<ProjectDetails />}></Route>
      </Routes>
      </Suspense>
      <Analytics />
    </>
  )
}

export default App
