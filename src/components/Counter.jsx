import React from 'react'
import{useInView} from 'react-intersection-observer'
import CountUp from 'react-countup'
function Counter({images,names,end,duration,suffix}) {
    const{ref,inView}=useInView({
        triggerOnce:true,
        threshold:0.3,
    })
  return (
    <div className=' '>
    <div ref={ref} className="mx-5 mt-20 ">
        <div className=" shadow-lg shadow-blue-500/50 p-4 rounded-lg border border-blue">
        <img src={images} alt="Project completion image" className="w-25 h-25  mx-auto"/>
        {/* </div> */}
        <h2 className="font-serif font-bold text-2xl text-white bg-blue-500  mt-6 border-r-6 text-center rounded-sm border-amber-500 mx-auto " >
            {inView ?<CountUp end={end} duration={duration} />:0}{suffix}
        </h2>
        <h3 className="font-serif font-bold text-md text-center sm:w-50 mx-auto  ">{names}</h3>
        </div>
        </div>
        </div>
  )
}

export default Counter