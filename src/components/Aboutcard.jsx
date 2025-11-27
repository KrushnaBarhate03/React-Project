import React from 'react'
import Profile from '../assets/profile.png'
function Aboutcard({}) {
    const Data=[{
        image:Profile,
        name:"Avishkar k",
        description:"Every innovation starts with a dream and the determination to make it real. Our journey in drone technology is not just about creating machines—it’s about shaping a smarter, safer, and more efficient future for everyone. With every flight, we aim to empower farmers, uplift communities, and bring meaningful change through technology."
    },
]

  return (
Data.map((card,index)=>{
    return(
        <div className="bg-blue-100 w-auto h-auto mt-15 m-4 rounded-md border border-blue-500 ">
            <img src={card.image} alt="Profile image" className="w-25 h-25 mx-auto mt-4 border-2 border-blue-500 rounded-full"/>
            <h3 className="font-serif font-bold text-xl text-center mt-2">{card.name}</h3>
            <h4 className="font-serif text-md p-6">{card.description}</h4>
            
        </div>
    )
})
    
    
  )
}

export default Aboutcard