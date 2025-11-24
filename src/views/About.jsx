import React from 'react'
import Durable from '../assets/Durable.png'
import Aboutbutton from '../components/Aboutbutton.jsx'
import Battery from '../assets/battery.png'
import imagess from '../assets/award.png'

function About() {
  return (
    <div>
    <div className='bg-blue-50 border border-blue-500 rounded-lg mt-5 p-4 w-5/6 mx-auto'>
      <h2 className="text-center font-serif font-bold text-2xl">Our Mission</h2>
      <h3 className="text-center font-serif text-xl">“We are a modern drone technology company dedicated to delivering innovative, reliable, and high-performance drone solutions.”</h3>
    </div>
     <div className="bg-blue-50 rounded-sm mt-5 w-full p-2">
       <h2 className="text-center font-serif font-bold text-2xl">Speciality</h2>
      <h3 className='text-center font-serif text-xl'>Speciality of our Drones</h3>
    </div>
    
   <div>
    <Aboutbutton/>
   </div>
   <div className="flex justify-center m-10">
    <a  href="/Avishkar_Drone_Info.pdf" className="bg-blue-500 p-6 text-xl font-serif font-bold text-white rounded-md " download="Avishkar Drone Information">About Ourself</a>
   </div>
   
    </div>
    
    
  )
}

export default About