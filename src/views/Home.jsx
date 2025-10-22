import React from 'react'
import Dchart from '../assets/chart3.jpg'
import Dchart1 from '../assets/chart4.jpg'
import Agriculture from '../assets/agriculture.jpg'
import Cards from '../components/Cards.jsx'
import Counter from'../components/Counter.jsx'
import Project from '../assets/project.png'
import Experience from '../assets/experience.png'
import Award from '../assets/award.png'
import Client from '../assets/client.png'
import Industry from'../components/Industry.jsx'

import Innovation from '../assets/innovation.png'
import Growth from '../assets/growth.png'
import Research from '../assets/research.png'
import Sustainablegrowth from '../assets/sustainablegrowth.png'

function Home() {
  return(
    <>
    <div>
      <h3 className='text-center font-serif font-bold text-2xl sm:text-2xl text-orange-500 mt-3'>See the World from a Higher Perspective.</h3>
      <h4 className="text-center font-serif font-semibold text-orange-500 mt-1">We design and deliver next-generation drones built for precision, performance, and limitless possibilities.</h4>
    </div>
    <div className="flex flex-col justify-center items-center mt-5">
    <button type="button" className=" p-2 bg-amber-500 font-serif font-bold rounded-lg w-40 ">Book Now</button>
    <img src={Dchart} alt="drone chart" className=" mt-4 w-100   rounded-lg "/>
    </div>
    <div className="">
      <h3 className="text-center font-serif font-bold text-xl w-auto sm:w-120 mx-auto mt-10 bg-amber-500"> Our Drones</h3> 
       </div>
       <div className="flex flex-row sm:mt-10  flex-wrap">
        <Cards image={ Agriculture } name="Agriculture Drone"/>
         <Cards image={ Agriculture } name="Defense Drone"/>
        <Cards image={ Agriculture } name="Survelliance Drone"/> 
       </div>
       <h3 className="text-center font-serif font-bold text-xl w-auto sm:w-120 mx-auto sm:mt-10 bg-amber-500"> Our Achievements</h3> 
<div className="text-center flex sm:flex-row flex-col sm:justify-center sm:items-center  flex-wrap">
  
   <Counter images={Experience } names="Experience" end={6} duration={2} suffix="+"/>
   <Counter images={Award } names="Award Received" end={3} duration={2} suffix="+"/>
  <Counter images={Project} names="Project Completed" end={100} duration={2} suffix="+"/>
  <Counter images={Client } names="Satisfied Client" end={95} duration={2} suffix="k" />
 
</div>
<h3 className="text-center font-serif font-bold text-xl w-auto sm:w-120 mx-auto sm:mt-10 bg-amber-500"> Industry Specific optimization </h3>
<div className="flex flex-row sm:mt-10  flex-wrap">
        <Industry image={ Innovation } name="Agriculture Drone"/>
         <Industry image={ Growth} name="Defense Drone"/>
          <Industry image={ Sustainablegrowth} name="Defense Drone"/>

        <Industry image={ Research } name="Survelliance Drone"/> 
       </div>
      
   
    </>
  )
}

export default Home