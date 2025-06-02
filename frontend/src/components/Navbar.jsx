import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
<nav className='bg-white text-black flex   flex-col sm:flex-row flex-wrap justify-center items-center gap-[7rem] p-[1rem]'>
    <Link to="/" className='bg-red-300 lg:px-6 md:px-4 sm:px-2 '>Home</Link>
    <Link to="/about" className='bg-red-300 lg:px-6 md:px-4 sm:px-2'>AboutPage</Link>
    <Link to="/contact" className='bg-red-300 lg:px-6 md:px-4 sm:px-2'>ContactUs</Link>
</nav>  )
}

export default Navbar