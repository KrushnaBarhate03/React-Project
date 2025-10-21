import React from 'react'

function Cards({image,name}) {
  return (
    
    <div  className="   font-serif  font-bold h-70 w-72 flex flex-col shadow-amber-500/50 shadow-lg mx-10 border border-black rounded-lg">
        <img src={image} alt='Drone image' name="Agriculture Drone" className="w-72 rounded-t-lg"/>
        <h3 className="text-center  bg-amber-500 mt-4">{name}</h3>
    </div>
    

  )
}

export default Cards