import React,{useEffect} from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import {Link} from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'

function Starter() {
  useEffect(()=>{
    AOS.init({duration:"1000"}) 
  },[])
  return (
    <>
     <div className=' flex md:justify-between justify-center w-[100%] md:w-full md:ps-20 md:py-3 py-3 ps-0 pe-0 md:pe-44 bg-gradient-to-l  from-blue-700 to-green-400 mb-10 relative z-10s' data-aos="fade-down" >
        <div className='flex flex-row w-1/2'>
            <div className='flex flex-row  w-1/3 justify-center items-center'><Link className='me-2 cursor-pointer' to='/'><BsFillTelephoneFill className='md:me-3 me-0 text-white' /></Link> <p className='text-white font-semibold text-sm hidden md:block'>000 123 456 789</p></div>
            <div className='flex flex-row  w-1/2 justify-start items-center'><Link to='/' className='cursor-pointer'><IoMailOpenOutline className='me-3 text-white' /></Link> <p className= ' hidden md:block text-white font-semibold text-sm'>info@gmail.com</p></div>
        </div>
        <div className='flex '>
          <div className='rounded-full mx-2  md:mx-2 md:p-2 p-1 bg-white hover:bg-green-400 cursor-pointer'><Link to='/'><FaInstagram /></Link></div>
          <div className='rounded-full mx-2 md:mx-2 md:p-2 p-1 bg-white hover:bg-green-400 cursor-pointer'><Link to='/'><FaTwitter /></Link></div>
          <div className='rounded-full mx-2 md:mx-2 md:p-2 p-1 bg-white hover:bg-green-400 cursor-pointer'><Link to='/'><IoLogoWhatsapp /></Link></div>
          <div className='rounded-full mx-2 md:mx-2 md:p-2 p-1 bg-white hover:bg-green-400 cursor-pointer'><Link to='/'><FaFacebookF /></Link></div>
        </div>
       
     </div>
      
    </>
  )
}

export default Starter
