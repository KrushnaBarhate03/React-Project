import React from 'react'
import Dchart from '../assets/chart3.jpg'
import Dchart1 from '../assets/chart4.jpg'
import Agriculture from '../assets/agriculture.jpg'
import Cards from '../components/Cards.jsx'
function Home() {
  return(
    <>
    <div>
      <h3 className='text-center font-serif font-bold text-sm sm:text-2xl text-orange-500 mt-3'>See the World from a Higher Perspective.</h3>
      <h4 className="text-center font-serif font-semibold text-orange-500 mt-1">We design and deliver next-generation drones built for precision, performance, and limitless possibilities.</h4>
    </div>
    <div className="flex flex-col justify-center items-center mt-5">
    <button type="button" className=" p-2 bg-amber-500 font-serif font-bold rounded-lg w-40 ">Book Now</button>
    <img src={Dchart} alt="drone chart" className=" mt-4 w-100   rounded-lg "/>
    </div>
    <div className="">
      <h3 className="text-center font-serif font-bold text-xl w-120 mx-auto mt-6 bg-amber-500"> Our Drones</h3> 
       </div>
       <div className="flex flex-row mt-10 flex-wrap">
        <Cards image={ Agriculture } name="Agriculture Drone"/>
         <Cards image={ Agriculture } name="Defense Drone"/>
        <Cards image={ Agriculture } name="Survelliance Drone"/> 
       </div>

      
   
    </>
  )
}

export default Home