import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#ff0000] lg:text-2xl'>Hello!&nbsp;&nbsp; My name is</p>
            <h1 className='text-5xl lg:text-8xl font-bold text-[#ccd6f6]'>Nathan Kenopic</h1>
            <h2 className='text-4xl lg:text-7xl font-bold text-slate-400 pt-2'>Full Stack & Software developer</h2>
            <p className='text-slate-400 py-5 max-w-[650px] lg:text-2xl'>I'm a software developer and a full stack developer focusing on building apps, games, and great responsive
                 websites with both front-end and both-end technologies.
            </p>
            <div>
                <button className='group flex items-center text-white border-2 border-blue-400 px-5 py-2 hover:bg-[#ff0000] hover:border-[#ff0000] hover:duration-300'> 
                    See My Work 
                    <span>
                        <HiArrowNarrowRight className='ml-2'/> 
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home