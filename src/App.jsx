import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigationn from './components/Navigationn.jsx'
import Home from'./views/Home.jsx'
import About from'./views/About.jsx'
import Services from'./views/Services.jsx'
import Gallery from'./views/Gallery.jsx'
import Careers from'./views/Careers.jsx'
import Contact from './views/Contact.jsx'
import ITservices from './views/ITServices.jsx'
import Graphices from './views/Graphices.jsx'
import Internship from './views/Internship.jsx'
import Media from './views/Media.jsx'
import Carrer from './views/Carrer.jsx'
import Cutomizedrone from './views/Cutomizedrone.jsx'
import Dronerepair from './views/Dronerepair.jsx'
import Dronesoftware from'./views/Dronesoftware.jsx'
import Aerialphotography from './views/Aerialphotography.jsx'
import Dronetraning from './views/Dronetraning.jsx'
import Dronelience from './views/Dronelience.jsx'
import{BrowserRouter,Route,Routes} from 'react-router-dom'


function App() {
  return (
   <BrowserRouter>
  <Navigationn/>

  <Routes>
   <Route path="/" element={<Home/>}/> 
   <Route path="/about" element={<About/>}/>
   <Route path="/service" element={<Services/>}/>
   <Route path="/ITservices" element={<ITservices/>}/>
   <Route path="/graphics" element={<Graphices/>}/>
   <Route path="/gallery" element={<Gallery/>}/>
   <Route path="/career" element={<Careers/>}/>
   <Route path="/contact" element={<Contact/>}/>
   <Route path="/internship" element={<Internship/>}/>
   <Route path="/media" element={<Media/>}/>
   <Route path="/carrer" element={<Carrer/>}/>
   <Route path="/customizedrone" element={<Cutomizedrone />}/>
   <Route path="/Dronerepair" element={<Dronerepair/>}/>
   <Route path="/Dronesoftware" element={<Dronesoftware/>}/>
   <Route path="/Aerialphotography" element={<Aerialphotography/>}/>
   <Route path="/Dronetraining" element={<Dronetraning />}/>
   <Route path="/Dronelicensing" element={<Dronelience/>}/>


  </Routes>
  
  </BrowserRouter>
  )
}

export default App
