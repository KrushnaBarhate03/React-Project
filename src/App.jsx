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

  </Routes>
  
  </BrowserRouter>
  )
}

export default App
