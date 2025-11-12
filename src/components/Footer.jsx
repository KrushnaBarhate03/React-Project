import React from 'react'
import Logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <div className="bg-blue-50 shadow-lg shadow-blue-500/50 mt-15 rounded-lg flex flex-col sm:flex-row">
        <div className=" sm:w-1/5 w-auto ">
          <img src={Logo} alt="Logo image" className='w-72 mx-auto '/>
          <p className='relative  top-[-55px] font-bold text-md text-center font-serif text-md pl-6'>Avishkar means Innovation and We Innovate the New Technologies in Drones </p>

        </div>
        <div className=" m-6 sm:m-12 font-serif flex flex-col">
          <h3 className='  font-serif font-bold'>Useful Links</h3>
          <Link to="/">Home</Link>
         <Link to="/about">About Us</Link>
          <Link to='/service'>Services</Link>
          <Link to="/carrer">Carrer</Link>
          <Link to="/media">Media</Link>
         <Link to="/contact">Contact</Link>
          <Link to="/internship">Internship</Link>
        </div>

        <div className='m-6 sm:m-12 font-serif flex flex-col'> 
          <h3 className='font-bold font-serif'>Our Services</h3>
          <Link to="/customizedrone">Customize Drone Development</Link>
          <Link to="/Dronerepair">Drone Repair and Maintenance</Link>
          <Link to="/Dronesoftware">Drone Software and Firemare Development</Link>
          <Link to="/Aerialphotography">Aerial Photogarphy and Videography</Link>
         <Link to="/Dronetraining">Drone Training and Workshop</Link> 
         <Link to="/Dronelicensing">Drone Licensing and Compliance Assitance</Link> 
         <Link to="/Graphics">Graphics and Video Editing</Link> 
        </div>
        
        <div className='sm:m-12 m-6 font-serif'>
          <h3 className="font-serif font-bold">Contact Us </h3>
          <p>Pune Maharashtra,India</p>
          <p>AvishkarDrones@gmail.com</p>
          <p>1234556789</p>
          <p></p>
        </div>
        

      </div>
      
  )
}

export default Footer