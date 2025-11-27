import React from 'react'
import Ourservices from '../components/Ourservices.jsx'
function Services() {
  return (
    <div>
     <div className='bg-blue-50 border border-blue-500 rounded-lg mt-5 p-4 w-5/6 mx-auto'>
        <h2 className="text-center font-serif font-bold text-2xl">Our Services</h2>
        <h3 className="text-center font-serif text-xl">“We provide a complete range of advanced drone technology solutions designed to enhance productivity, improve safety, and accelerate growth. From precision agriculture to aerial surveying, our services help businesses adopt smart and efficient drone-based operations.”</h3>
      </div>
      <div className="flex flex-row flex-wrap mt-15 justify-center items-center">
    <Ourservices/>
      </div>
      </div>
  )
}

export default Services