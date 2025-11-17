import React from 'react'
import { useState } from 'react'
import Durable from '../assets/Durable.png'
import Battery from '../assets/battery.png'
import Target from '../assets/target.png'
import Customer from '../assets/customerservice.png'
function Aboutbutton({Description,image }) {
    const [Design, setDesign] = useState(false);
    const design = () => {
        setDesign(true);
    }

    const feature=[{
        image:Durable ,
        title:"Durable & lightweight design"
     },
    {
     image:Battery,
     title:"High Battery Backup"
    },
    {image:Target,
     title:"Precision Performance"
    },
    {
        image:Customer,
        title:" Fast Customer Service"
    }
    
    ]
    return (
        <div >
<div className='flex sm:flex-row flex-col flex-wrap jutisfy-center'>

            {Design && (
         
            feature.map((element,index)=>{
            return(
               
                <div className='bg-blue-50 border border-blue-500 w-80 h-48 rounded-sm m-5  '>
              <div key={index}>
                <div className="bg-orange-500 mt-12">
                <img src={element.image} alt="Images" className='w-15 h-15 mx-auto p-2'/> 
                </div>
                <h1 className='font-serif font-semibold text-center p-2 text-xl'>{element.title}</h1>
                </div>
                </div>
               
                
               
            )
           })
            )}
 </div>
            <button type="button" className="text-white w-48  h-18 bg-blue-500 font-serif text-xl font-semibold rounded-sm block mx-auto mt-5" onClick={design} >Our Speciality</button>
       </div>
    )
}

export default Aboutbutton