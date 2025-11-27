import React from 'react'
import Profile from '../assets/profile.png'
function Aboutcard({}) {
    const Data=[{
        image:Profile,
        name:"Avishkar K",
        description:"Every innovation starts with a dream and the determination to make it real. Our journey in drone technology is not just about creating machines—it’s about shaping a smarter, safer, and more efficient future for everyone. With every flight, we aim to empower farmers, uplift communities, and bring meaningful change through technology.",
        Tag:"Founder"
    },
    {
        image:Profile,
        name:"Krushna B",
        description:"As the world transforms, so must the way we work, grow, and innovate. At Avishkar Drones, our mission is simple—use technology to empower people, enhance productivity, and create real impact. Every drone we build carries our commitment to quality, trust, and progress. Together, we are shaping a future where innovation works for everyone.",
        Tag:"CEO"
    }
]

  return (
Data.map((card,index)=>{
    return(
        <div className="bg-blue-100 w-auto h-auto mt-15 m-4 rounded-md border border-blue-500 ">
            <img src={card.image} alt="Profile image" className="w-25 h-25 mx-auto mt-4 border-2 border-blue-500 rounded-full"/>
            <h3 className="font-serif font-bold text-xl text-center mt-2">{card.name}</h3>
            <h5 className='text-blue-500 font-serif text-center text-sm font-bold'>{card.Tag}</h5>
            <h4 className="font-serif text-md p-6">{card.description}</h4>
            
        </div>
    )
})
    
    
  )
}

export default Aboutcard