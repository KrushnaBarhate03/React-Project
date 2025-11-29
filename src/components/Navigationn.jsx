import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Icon from '../assets/menu.png'
import Close from '../assets/close.png'



function Navigationn() {
 const [open,setOpen]= useState(false);
 const handleopens=()=>setOpen(false);
 const[show,setShow]=useState(false);



  return (
    <>
    <div className='p-2 sm:p-0   'onClick={()=>setOpen(!open)}>
         {open?( <img src={Close} alt="Close image" className="w-8 h-8 sm:hidden" />):( <img src={Icon} alt="Open image icon" className="w-8 h-8 sm:hidden" />)}
</div>


    <nav className="  w-32 sm:w-full rounded-lg ">

  <div className={`${open ? "flex  fixed top-11 left-0 z-50" : "hidden"} sm:flex flex-col sm:flex-row font-serif font-bold  text-xl   sm:static items-start text-white  bg-blue-900 sm:bg-white sm:text-black rounded-sm h-screen w-[200px] `}>
    <Link to="/" className="p-2" onClick={handleopens}>Home</Link>
    <Link to="/about" className="p-2" onClick={handleopens}>About</Link>

    <div className="" onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)} >
      <span className='p-2 sm:relative flex flex-col gap-2'>Service ▼</span>
      {show &&(
        <div className="block p-2 text-sm sm:absolute sm:top:10 rounded-sm bg-blue-600  "><Link to="/IT services " className='border-b-2 border-white'>IT Services</Link>
        
        <Link to="/graphics" className="block  text-sm border-b-2 border-white">Graphics Design</Link>
        </div>
      

      )
    }
    </div>

    {/* <Link to="/service" className="p-2" onClick={handleopens}>Services</Link> */}
    <Link to="/gallery" className="p-2" onClick={handleopens}>Gallery</Link>
    <Link to="/career" className="p-2" onClick={handleopens}>Career</Link>
    <Link to="/contact" className="p-2" onClick={handleopens}>Contact</Link>
  </div>
</nav>

  
  </>
  )
}

export default Navigationn