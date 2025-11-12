import React from 'react'
import User from '../assets/user.png'
import '../App.css'
function Choosecard() {
    const Choose=[{
        text:' " Their drone mapping service saved us hours of field work. The accuracy of the farm survey was excellent. Highly recommended! " ',
        image:User,
        name:"Pratik D"
    },
    {
      text:'"Amazing aerial shots! The drone team captured our wedding beautifully. Very professional and timely work.""',
      image:User,
      name:"Avishkar"
    },
     {
      text:'"We use their drone inspection service monthly. The reports are detailed and help us track construction progress perfectly."',
      image:User,
      name:"Tejas"
    },
    {
      text:'"They built a custom drone exactly as per our requirements. Top-notch quality and very knowledgeable team!"',
      image:User,
      name:"Krushna"
    },
     {
      text:'"Superb drone videography. The event highlight video came out cinematic and vibrant. Great experience overall!"',
      image:User,
      name:"Pranay"
    }




]
  return (
    <>
    {Choose.map((cards,index)=>{
    return <div className=""> 
        <div className="w-[300px] border border-blue-500 shadow-lg shadow-blue-500/50 rounded-lg bg-blue-50 m-4">
        <h3 className="font-serif text-md p-6">{cards.text} </h3>
        <h3 className="border border-t border-blue-500"></h3>
        <div className='flex  justif-start'>
                  
                  <img src={cards.image} alt="user icon image"className='w-15 h-15 m-2'/>
                  <h3 className='font-serif font-semibold text-md mx-5 mt-5'>{cards.name}</h3>


                </div>
               
                
        </div>
    </div>

    })}
    </>
  )
}

export default Choosecard