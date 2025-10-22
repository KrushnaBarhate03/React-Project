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
    <div ref={ref} className="mx-10 mt-20">
        <div className="sm:border-r-2  border-amber-500 pr-10">
        <img src={images} alt="Project completion image" className="w-25 h-25  mx-auto"/>
        </div>
        <h2 className="font-serif font-bold text-2xl bg-amber-500  mt-6 border-r-6 text-center rounded-sm border-black mx-auto " >
            {inView ?<CountUp end={end} duration={duration} />:0}{suffix}
        </h2>
        <h3 className="font-serif font-bold text-md text-blue-600 sm:w-50 mx-auto border-b border-black ">{names}</h3>
        </div>
        </div>
  )
}

export default Counter