import React from 'react'
import Ourservices from '../components/Ourservices.jsx'
import Section from '../components/Section.jsx'
import Explore from '../assets/Explore.png'
import Engineer from '../assets/Engineer.png'
import Execute from '../assets/Execute.png'
import Evaluate from '../assets/Evaluate.png'
import Elevate from '../assets/Elevate.png'
function Services() {
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

      <div className=" bg-blue-100 mt-15  sm:p-4 p-2  flex rounded-sm  sm:flex-col flex-row border border-blue-500" >
        <div>
          <button type="button" className="sm:m-4 m-2" onClick={() => console.log('Imaged clicked')}>
            <img src={Explore} alt='Explore image' className=" w-8 h-8 sm:w-12 sm:h-12 mx-auto" /><span className="font-serif font-bold text-sm sm:text-base text-amber-500">Explore</span>
          </button>
        </div>
        <div>
          <button type="button" className="sm:m-4 m-2">
            <img src={Engineer} alt='Engineer Image' className="w-8 h-8 sm:w-12 sm:h-12 mx-auto" /><span className="font-serif font-bold text-sm sm:text-base text-amber-500"> Engineer</span>
           </button>
        </div>
        <div>
          <button type="button" className="sm:m-4 m-2">
            <img src={Execute} alt="Execute image" className='w-8 h-8 sm:w-12 sm:h-12 mx-auto' /><span className="font-serif font-bold text-sm sm:text-base text-amber-500"> Execute</span>
          </button>
        </div>
        <div>
          <button type="button" className="sm:m-4 m-2">
            <img src={Evaluate} alt="Evaluate image" className="w-8 h-8 sm:w-12 sm:h-12 mx-auto" /><span className="font-serif font-bold text-sm sm:text-base text-amber-500">Evaluate</span>
          </button>
        </div>
        <div>
          <button type="button" className="sm:m-4 m-2">
            <img src={Elevate} alt='Elevate image' className="w-8 h-8 sm:w-12 sm:h-12 mx-auto" /><span className="font-serif font-bold text-sm  sm:text-base text-amber-500">Elevate</span>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Services