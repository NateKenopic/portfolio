import React, { useState } from 'react'
import Logo from '../assets/logo2.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'

const NavigationBar = () => {
  const [mobileNavMenu, setMobNavMenu] = useState(false);

  const handleNavClick = () => {
    setMobNavMenu(true);
  }

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt="Nk Logo" style={{ width: '80px'}} />
      </div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      {/* Triple Bar Menu */}
      <div className='md:hidden z-20' onClick={handleNavClick}>
         {!mobileNavMenu ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!mobileNavMenu ? 'hidden' : 'absolute flex top-0 left-0 w-full h-screen bg-[#0a192f] flex-col justify-center items-center'}>
        <li className='py-4 text-2xl'>Home</li>
        <li className='py-4 text-2xl'>About</li>
        <li className='py-4 text-2xl'>Skills</li>
        <li className='py-4 text-2xl'>Projects</li>
        <li className='py-4 text-2xl'>Contact</li>
      </ul>

      {/* Social Media Icons */}
      <div className='hidden lg:flex fixed flex-col top-[20%] left-0'>
        <ul>
          <li className='flex w-[110px] h-[40px] -ml-[65px] hover:ml-[-10px] duration-500 bg-black'>
            <a className='flex items-center w-full text-gray-200'
            href="/">
              GitHub <FaGithub className='pl-2' size={30}/>
            </a>
          </li>
          <li className='flex w-[120px] h-[40px] -ml-[75px] hover:ml-[-10px] duration-500 bg-[#0176b5]'>
            <a className='flex items-center w-full text-gray-200'
            href="/">
              LinkedIn <FaLinkedin className='pl-2' size={30}/>
            </a>
          </li>
        </ul>
      </div>
      
    </div>
  )
}

export default NavigationBar