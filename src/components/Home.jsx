import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] px-8 flex flex-col justify-center h-full'>
        <p className='text-[#ff0000] text-2xl'>Hello!&nbsp; My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
            Nathan Kenopic
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
            Full Stack & Software Developer
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
            I'm a software developer and a full stack developer focusing on building apps, games, and great responsive
            websites with both front-end and back-end technologies.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ff0000] hover:border-[#ff0000]'>
            <Link to='work' smooth={true} duration={500}>
              See My Projects
            </Link>
            <HiArrowNarrowRight className='ml-3 ' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home