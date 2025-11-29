import React from 'react'
import {useState} from 'react'
import Ourservices from '../components/Ourservices.jsx'
import Section from '../components/Section.jsx'
import Explore from '../assets/Explore.png'
import Engineer from '../assets/Engineer.png'
import Execute from '../assets/Execute.png'
import Evaluate from '../assets/Evaluate.png'
import Elevate from '../assets/Elevate.png'
import Dronepilot from '../assets/Dronepilot.jpg'
import Droneengineer from '../assets/Droneengineer.jpg'
import DroneAccuracy from '../assets/Droneaccuracy.jpg'
import DroneProcess from '../assets/Droneprocess.jpg'
import AdvancedDrone from '../assets/Advanceddrone.jpg'
function Services() {
  const [action,setAction]=useState(1);
  return (
    <div>
      <div className='bg-blue-50 border border-blue-500 rounded-lg mt-5 p-4 w-5/6 mx-auto'>
        <h2 className="text-center font-serif font-bold text-2xl">Our Services</h2>
        <h3 className="text-center font-serif text-xl">“We provide a complete range of advanced drone technology solutions designed to enhance productivity, improve safety, and accelerate growth. From precision agriculture to aerial surveying, our services help businesses adopt smart and efficient drone-based operations.”</h3>
      </div>
      <div className="flex flex-row flex-wrap mt-15 justify-center items-center">
        <Ourservices />
      </div>
      <Section heading="Best Process to Build Drone " />
    
    
<div className="flex flex-col sm:flex-row bg-red-200 sm:bg-white mt-10 m-2 rounded-sm">

  {/* Existing Div */}
  <div className="sm:w-1/3 sm:mx-10  mt-5 flex sm:flex-col flex-row ">
    
    <div className="sm:bg-blue-100 sm:w-80 sm:rounded-sm sm:border sm:hover:bg-blue-200 sm:border-blue-500 sm:mt-6  ">
      <button type="button" className="sm:m-4 m-2" onClick={()=>setAction(1)}>
        <img src={Explore} className="w-8 h-8 sm:w-12 sm:h-12 mx-auto sm:mx-28" />
        <span className="font-serif font-bold  text-sm sm:text-xl text-blue-900 ">Explore</span>
      </button>
    </div>

    <div className="sm:bg-blue-100 sm:w-80 sm:rounded-sm sm:border sm:hover:bg-blue-200 sm:border-blue-500 sm:mt-6 ">
      <button type="button" className="sm:m-4 m-2" onClick={()=>setAction(2)}>
        <img src={Engineer} className="w-8 h-8 sm:w-12 sm:h-12 mx-auto sm:mx-28" />
        <span className="font-serif   text-sm sm:text-xl text-blue-900 font-bold ">Engineer</span>
      </button>
    </div>

    <div className="sm:bg-blue-100 sm:w-80 sm:rounded-sm sm:border sm:hover:bg-blue-200 sm:border-blue-500 sm:mt-6 ">
      <button type="button" className="sm:m-4 m-2" onClick={()=>setAction(3)}>
        <img src={Execute} className="w-8 h-8 sm:w-12 sm:h-12 mx-auto sm:mx-28" />
        <span className="font-serif font-bold text-sm sm:text-xl text-blue-900">Execute</span>
      </button>
    </div>

    <div className="sm:bg-blue-100 sm:w-80 sm:rounded-sm sm:border sm:hover:bg-blue-200 sm:border-blue-500 sm:mt-6 ">
      <button type="button" className="sm:m-4 m-2" onClick={()=>setAction(4)}>
        <img src={Evaluate} className="w-8 h-8 sm:w-12 sm:h-12 mx-auto sm:mx-28" />
        <span className="font-serif font-bold text-sm sm:text-xl text-blue-900">Evaluate</span>
      </button>
    </div>

    <div className="sm:bg-blue-100 sm:w-80 sm:rounded-sm sm:border sm:hover:bg-blue-200 sm:border-blue-500 sm:mt-6 ">
      <button type="button" className="sm:m-4 m-2" onClick={()=>setAction(5)}>
        <img src={Elevate} className="w-8 h-8 sm:w-12 sm:h-12 mx-auto sm:mx-28" />
        <span className="font-serif font-bold text-sm sm:text-xl text-blue-900">Elevate</span>
      </button>
    </div>

  </div>

  {/* ➡️ NEW DIV ON RIGHT SIDE */}
   
  <div className="sm:w-5/6  mt-2 sm:mt-11 p-5 bg-red-200 mx-auto rounded-md">
 {action===1&&(
    <div>
    <h2 className="font-bold sm:text-3xl text-xl text-center font-serif text-indigo-900">We Guide And Train Users To Understand The Power Of Drone Technology.</h2>
    <ul className=" list-disc font-serif m-2 sm:mt-6">
    <li className="text-xl m-4 font-serif ">We deeply understand the needs of farmers, businesses, and industries.</li>
   <li className='text-xl m-4 font-serif '> Our team studies land, crops, and challenges to design the right drone solution.</li>
    </ul>
    <img src={Dronepilot} alt="Drone training image" className=" sm:w-[700px] sm:h-[400px] rounded-sm mx-auto"/>
    </div>
     )}

     {action===2&&(
    <div>
   <h2 className="font-bold sm:text-3xl text-xl text-center font-serif text-indigo-900">Our solutions empower users to work smarter and achieve more.</h2>
    <ul className=" list-disc font-serif m-2 sm:mt-6">
    <li className="text-xl m-4 font-serif ">We design high-performance, safe, and reliable drone solutions tailored to your goals.</li>
   <li className='text-xl m-4 font-serif '> Every system is engineered for efficiency, durability, and real-world performance.</li>
    </ul>
     <img src={Droneengineer} alt="Drone Development image" className=" sm:w-[700px] sm:h-[400px] rounded-sm mx-auto"/>
    </div>
     )}
     {action===3&&(
      <div>
       <h2 className="font-bold sm:text-3xl text-xl text-center font-serif text-indigo-900">We provide smooth, timely, and effective drone services.</h2>
    <ul className=" list-disc font-serif m-2 sm:mt-6">
    <li className="text-xl m-4 font-serif ">We implement drone operations with accuracy and professionalism.</li>
   <li className='text-xl m-4 font-serif '> From spraying to surveying, our execution ensures fast and quality results.</li>
    </ul>
     <img src={DroneAccuracy} alt="Drone Development image" className=" sm:w-[700px] sm:h-[400px] rounded-sm mx-auto"/>
      </div>
     )}

    {action===4&&(
      <div>
        <h2 className="font-bold sm:text-3xl text-xl text-center font-serif text-indigo-900">We refine our process to give you better outcomes each time.</h2>
    <ul className=" list-disc font-serif m-2 sm:mt-6">
    <li className="text-xl m-4 font-serif ">We analyze performance, results, and impact to ensure the highest quality service.</li>
   <li className='text-xl m-4 font-serif '> Every project is reviewed to identify improvements and maintain excellence.</li>
    </ul>
     <img src={DroneProcess} alt="Drone Development image" className=" sm:w-[700px] sm:h-[400px] rounded-sm mx-auto"/>
      </div>
     )}

      {action===5&&(
      <div>
        <h2 className="font-bold sm:text-3xl text-xl text-center font-serif text-indigo-900">We push boundaries with advanced drone technology and new ideas.</h2>
    <ul className=" list-disc font-serif m-2 sm:mt-6">
    <li className="text-xl m-4 font-serif ">We upgrade our technology and solutions to help you achieve long-term success.</li>
   <li className='text-xl m-4 font-serif '> Our goal is to elevate productivity and transform traditional farming practices.</li>
    </ul>
     <img src={AdvancedDrone} alt="Drone Development image" className=" sm:w-[700px] sm:h-[400px] rounded-sm mx-auto"/>
      </div>
     )}
  </div>
 

</div>
</div>
  
  
   
   
  )
}

export default Services