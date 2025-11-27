import React from 'react'
import Durable from '../assets/Durable.png'
import Aboutbutton from '../components/Aboutbutton.jsx'
import Battery from '../assets/battery.png'
import imagess from '../assets/award.png'
import { useState } from 'react'
import Chart from "../assets/chart3.jpg"
import Section from '../components/Section.jsx'
import AboutCard from '../components/Aboutcard.jsx'


function About() {
  const [Show, setShow] = useState(1);


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
        <Aboutbutton />
      </div>

      <div className="flex justify-center m-10">
        <a href="/Avishkar_Drone_Info.pdf" className="bg-blue-500 p-6 text-xl font-serif font-bold text-white rounded-md " download="Avishkar Drone Information">About Ourself</a>
      </div>

      <div className=" sm:flex  bg-blue-100 rounded-md">

        <div className="flex sm:flex-col flex-row ">
          <button className="bg-orange-500  rounded-sm text-white flex justify-center items-center  m-10 font-serif font-bold sm:text-6xl text-2xl sm:w-24 sm:h-24 h-14 w-20 text-center " onClick={()=>setShow(1)}>1</button>
          <button className="bg-orange-500 rounded-sm text-white m-10 flex justify-center items-center font-serif font-bold text-center h-14 w-20 sm:w-24 sm:h-24 text-2xl sm:text-6xl" onClick={()=>setShow(2)}>2</button>
          <button className="bg-orange-500 rounded-sm text-white m-10 flex justify-center items-center font-serif font-bold text-center sm:w-24 sm:h-24 w-20 h-14 text-2xl sm:text-6xl "onClick={()=>setShow(3)}>3</button>
        </div>
        {Show===1 && (
          <div className="flex flex-col">
            
            <h3 className="sm:m-12 m-5 font-serif text-center font-bold text-2xl bg-orange-500 p-2 rounded-sm text-white ">We Make a Different Type Of Drone Using New And Innovative Technology </h3>
            <h3 className=" font-bold font-serif mx-auto text-xl text-white text-center bg-blue-500 w-80 m-5 p-2 rounded-md">Defence Drone</h3>
            <h3 className=" font-serif font-bold mx-auto text-xl text-white text-center bg-blue-500 w-80 m-5 p-2 rounded-md">Agriculture Drone</h3>
            <h3 className=" font-bold mx-auto text-xl text-white text-center bg-blue-500 w-80 m-5 p-2 rounded-md font-serif">Survelliance Drone</h3>
            <h3 className=" font-bold mx-auto text-xl text-white text-center bg-blue-500 w-80 m-5 p-2 rounded-md font-serif">Commercial Drone</h3>
          </div>
        
        )
        }
        {Show===2 &&(
         
      <div>
        <h3 className="m-12 font-serif text-center font-bold text-2xl bg-red-500  p-2 rounded-sm text-white">Our Dream Is To Build The Best And Most Economical Drone In The World </h3>
        <h3 className=" font-bold font-serif mx-auto text-xl text-white text-center bg-blue-500 w-80 m-5 p-2 rounded-md ">Our Qualities</h3>
        <div className="flex flex-wrap justify-center ">
         <h3 className=" font-bold font-serif mx-12 text-xl text-white text-center bg-blue-500 w-80 m-5 p-2 rounded-md">Affordable Price</h3>
         <h3 className=" font-bold font-serif mx-12 text-xl text-white text-center bg-blue-500 w-80 m-5 p-2 rounded-md ">24/7 Support</h3>
         <h3 className=" font-bold font-serif mx-12 text-xl text-white text-center bg-blue-500 w-80 m-5 p-2 rounded-md">Free Maintainces For 1 Year</h3>
          <h3 className=" font-bold font-serif mx-12 text-xl text-white text-center bg-blue-500 w-80 m-5 p-2 rounded-md">Customizable Designs</h3>
           <h3 className=" font-bold font-serif mx-12 text-xl text-white text-center bg-blue-500 w-80 m-5 p-2 rounded-md">Easy to Operate</h3>
            <h3 className=" font-bold font-serif mx-12 text-xl text-white text-center bg-blue-500 w-80 m-5 p-2 rounded-md">HD Quality Camera</h3>
         </div>
      </div>
      
      )}

      {Show===3 &&(
        <div className='flex flex-col'>
          <h3 className="m-12 font-serif text-center font-bold text-2xl bg-white shadow-lg shadow-blue-500/50 p-2 rounded-sm text-black">“We provide training and organize awareness campaigns to educate farmers on using drones in agriculture, especially for spraying pesticides on crops.”</h3>
           <img src={Chart} alt="Drone image " className="w-80 sm:w-96 rounded-sm mx-auto m-2 "/> 
        </div>
      )}
      </div>

      <Section heading="Meet Our Founders"/>
    <div>
      <AboutCard/>
    </div>
    </div>



  )
}

export default About