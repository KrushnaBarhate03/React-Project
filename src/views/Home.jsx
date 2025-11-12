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
import About from '../assets/Dronei.jpg'
import Plus from'../assets/plus.png'
import Dot from '../assets/dot.png'
import Ourservices from '../components/Ourservices.jsx'
import User from '../assets/user.png'
import Choosecard from '../components/Choosecard.jsx'
import Logo from '../assets/logo.png'
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

      
       <h3 className="text-center font-serif font-bold text-xl w-auto sm:w-120 mx-auto sm:mt-10 bg-amber-500 mt-10"> About</h3> 
     <div className="flex justify-center  flex-col sm:flex-row items-center h-[750px] sm:h-[400px] bg-gray-200 relative rounded-lg mt-2 sm:mt-12 ">  
      <div> 
         <h2 className="font-serif text-2xl   text-center sm:text-start font-bold text-blue-500 hidden sm:block sm:mx-10" >About Us</h2>
        
        <p className="font-serif text-center whitespace-pre-wrap sm:text-start text-xl p-6 mt-5 sm:mt-0">Avishkar Pvt Ltd is a leading software development company based in Pune. We specialize in creating innovative and custom Drones solutions that drive business growth. Our team of experts is dedicated to delivering excellence and exceeding client expectations.

        With a focus on cutting-edge technologies and a commitment to quality, we help businesses navigate the complexities of the digital world.Learn More
        </p>
        </div>
       <img src={About} alt="About image" className='w-[500px] h-80 sm:m-10  sm:shadow-lg sm:shadow-blue-500/50 rounded-lg  p-6 sm:p-0'/>
       </div> 
       <h3 className="text-center font-serif font-bold text-xl w-auto sm:w-120 mx-auto mt-10 bg-amber-500"> Our Services </h3>
       
       
<div className="flex flex-wrap flex-row mt-10 justify-center">
       <Ourservices />
       
       </div>
       <h3 className="text-center font-serif font-bold text-xl w-auto sm:w-120 mx-auto mt-10 bg-amber-500"> Why Choose Us </h3>

<div className="flex flex-row sm:mt-10  flex-wrap">
        <Industry image={ Innovation } name="Innovation & Intergartion" information="Developing cutting-edge UAV solutions that enhance efficiency, usability, and seamless integration across industries." />

         <Industry image={ Growth} name="Operational Excellence" information="Enhancing automation, security, and reliability to streamline operations and reduce user effort." />

          <Industry image={ Sustainablegrowth} name="Sustainable Growth & Scalablity" information="Ensuring future-ready, eco-conscious solutions that drive long-term success in evolving technological landscapes."/>

        <Industry image={ Research } name="Research & Development" information="Continuously innovating UAV solutions with cutting-edge technology to enhance efficiency and usability."/> 
       </div>
       <h3 className="text-center font-serif font-bold text-xl w-auto sm:w-120 mx-auto mt-10 bg-amber-500 "> What Our Clients Say </h3>
       <div className="flex mt-12 flex-wrap justify-center ">
        <Choosecard/>
       </div>
      <div className="bg-gray-200 mt-15 rounded-lg flex flex-col sm:flex-row">
        <div className=" sm:w-1/5 w-auto">
          <img src={Logo} alt="Logo image" className='w-72  '/>
          <p className='relative  top-[-55px]  text-center font-serif text-md pl-6'>Avishkar means Innovation and We Innovate the New Technologies in Drones </p>

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
      

       
   
    </>
  )
}

export default Home