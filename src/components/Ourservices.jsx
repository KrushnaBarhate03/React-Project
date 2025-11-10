import React from 'react'
import Plus from '../assets/plus.png'
import Dot from '../assets/dot.png'

function Ourservices() {

  const ourservices = [
    {
      image: Plus,
      heading: "Custom Drone Development",
      description: "Designing and building custom drones as per client requirements"
    },
    {
     image: Plus,
      heading: "Drone Repair & Maintenance",
      description: "Fast repairing, tuning, and regular servicing of all types of drones."
    },
    {
        
     image: Plus,
      heading: "Drone Software & Firmware Development",
      description: "Custom flight control, automation, GPS tracking, and AI-based solutions."
    },
    {
        
     image: Plus,
      heading: "Aerial Photography & Videography",
      description: "Professional drone shoots for weddings, real estate, events, and businesses."
    },

    {
        
     image: Plus,
      heading: "3D Mapping & Surveying",
      description: "Land mapping, agriculture survey, construction site survey, and inspection."
    },

    {
        
     image: Plus,
      heading: "Drone Training & Workshops",
      description: "Practical training for beginners, students, and professionals."
    },
    {
        
     image: Plus,
      heading: "Drone Component Sales",
      description: "Motors, frames, batteries, controllers, propellers, and accessories."
    },
    {
        
     image: Plus,
      heading: "Industrial Drone Solutions",
      description: "Agriculture drones, delivery drones, surveillance drones, and emergency drones."
    },
    {
        
     image: Plus,
      heading: "Drone Licensing & Compliance Assistance",
      description: "Help with DGCA rules, training, and drone registration process."
    },
     {
        
     image: Plus,
      heading: "Graphics & Video Editing",
      description: "Drone clips editing, promotional video making, and graphics design."
    },
    
    

  ];

  return (
    <>
      {ourservices.map((element, index) => (
        <div
          key={index}
          className="w-[300px] sm:w-[350px] h-auto shadow-lg shadow-blue-500/50 border border-blue-500 rounded-lg m-6"
        >
          <div className="flex">
            <img
              src={element.image}
              alt="plus icon"
              className="w-10 h-10 bg-blue-500 rounded-full mx-4 mt-5"
            />
            <h3 className="font-bold font-serif text-xl m-2">{element.heading}</h3>
          </div>

          <div>
            <h3 className="font-serif mx-18">{element.description}</h3>
          </div>

          <div className="flex">
            <img src={Dot} alt="Dot icon" className="w-15 h-15" />
            <h3 className="mt-4 font-serif">Custom Drone Design</h3>
          </div>

          <div className="flex">
            <img src={Dot} alt="Dot icon" className="w-15 h-15" />
            <h3 className="mt-4 font-serif">Custom Drone Design</h3>
          </div>
        </div>
      ))}
    </>
  );
}

export default Ourservices;
