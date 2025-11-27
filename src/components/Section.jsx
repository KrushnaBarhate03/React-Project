import React from 'react'

function Section({heading}) {
  return (
    <div>
        <h3 className="text-center font-serif font-bold text-xl w-auto sm:w-120 mx-auto sm:mt-10 bg-amber-500 mt-10">{heading}</h3> 
    </div>
  )
}

export default Section