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
    <div className='p-2 sm:p-0  bg-blue-600 'onClick={()=>setOpen(!open)}>
         {open?( <img src={Close} alt="Close image" className="w-8 h-8 sm:hidden" />):( <img src={Icon} alt="Open image icon" className="w-12 h-12 sm:hidden" />)}
</div>


    <nav className="  bg-blue-500  w-32 sm:w-screen rounded-lg relative">

  <div className={`${open ? "flex" : "hidden"} sm:flex flex-col sm:flex-row justify-center font-serif font-bold  text-xl  absolute sm:static items-start text-white  `}>
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