import React from 'react'
import Logo from '../assets/logo.png'
function Footer() {
  return (
    <div className="bg-blue-50 shadow-lg shadow-blue-500/50 mt-15 rounded-lg flex flex-col sm:flex-row">
        <div className=" sm:w-1/5 w-auto ">
          <img src={Logo} alt="Logo image" className='w-72 mx-auto '/>
          <p className='relative  top-[-55px] font-bold text-md text-center font-serif text-md pl-6'>Avishkar means Innovation and We Innovate the New Technologies in Drones </p>

        </div>
        <div className=" m-6 sm:m-12 font-serif">
          <h3 className='  font-serif font-bold'>Useful Links</h3>
          <p>Home</p>
          <p>About Us</p>
          <p>Services</p>
          <p>Carrer</p>
          <p>Media</p>
          <p>Contact</p>
          <p>Internship</p>
        </div>

        <div className='m-6 sm:m-12 font-serif'> 
          <h3 className='font-bold font-serif'>Our Services</h3>
          <p>Customize Drone Development</p>
          <p>Drone Repair and Maintenance</p>
          <p>Drone Software and Firemare Development</p>
          <p>Aerial Photogarphy and Videography</p>
          <p>Drone Training and Workshop</p>
          <p>Drone Licensing and Compliance Assitance</p>
          <p>Graphics and Video Editing</p>
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