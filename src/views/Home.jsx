import React from 'react'
import Dchart from '../assets/chart1.jpeg'
import Dchart1 from '../assets/chart4.jpg'

function Home() {
  return(
    <>
    <div>
      <h3 className='text-center font-serif font-bold text-sm sm:text-2xl text-orange-500 mt-3'>See the World from a Higher Perspective.</h3>
      <h4 className="text-center font-serif font-semibold text-orange-500 mt-1">We design and deliver next-generation drones built for precision, performance, and limitless possibilities.</h4>
    </div>
    <div className="flex flex-col justify-center items-center mt-5">
    <button type="button" className=" p-2 bg-amber-500 font-serif font-bold rounded-lg w-40 ">Book Now</button>
    <img src={Dchart} alt="drone chart" className=" mt-4 w-100  border-2 border-amber-500 rounded-lg "/>
    </div>
    <div className="">
      <h3 className="text-center font-serif font-bold text-xl mt-6">About Our Company</h3>
      <h4 className='font-bold font-serif text-center w-120 mx-auto mt-2 bg-amber-500'>Flymore Is The Best Place For Your Drone Care</h4>
      </div>
      
       <div className='flex sm:flex-row flex-col relative'>
          <img src={Dchart1} alt="Drone image" className="w-80 h-80 mx-2  left-14 top-2 "/>

         <h3 className=' left-100 bg-amber-100 p-4 rounded-lg font-serif font-semibold top-100'>
         
          Flymore Drone, headquartered in Pune, specializes in innovative UAV solutions for IT, defense, aerospace, GIS, and technical publications. Committed to efficiency, seamless integration, and advanced technology, we deliver high-performance, user-centric solutions across industries.</h3> 
        
        
       </div>
      
   
    </>
  )
}

export default Home