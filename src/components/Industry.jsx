import React from 'react'

function Industry({image,name,information,number}) {
  return (
    
    
    <div  className="   font-serif m-6 mx-auto font-bold h-70 w-72 flex flex-col shadow-blue-500/50 shadow-lg  border border-blue rounded-lg relative">
        <img src={image} alt='Drone image' name="Agriculture Drone" className="w-25 mx-auto mt-4"/>
       
        <h3 className="text-center  bg-blue-500 mt-4 text-white">{name}</h3>
        <h3 className='text-[13px] text-center p-2 font-semibold '>{information}</h3>
    </div>

  )

  
}

export default Industry