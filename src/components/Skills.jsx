import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import java from '../assets/java.png';
import javascript from '../assets/javascript.png';
import jquery from '../assets/jquery.png';
import c from '../assets/c.png';
import c_plusplus from '../assets/c++.png';
import node from '../assets/node.png';
import mongodb from '../assets/mongodb.png';
import mysql from '../assets/mysql.png';
import postgresql from '../assets/postgresql.png';
import python from '../assets/python.png';
import react from '../assets/react.png';
import tailwindcss from '../assets/tailwindcss.png';
import unrealengine from '../assets/unrealengine.png';
import AWS from '../assets/aws.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-full bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='justify-center text-center'>
          <p className='text-4xl font-bold inline border-b-4 border-[#ff0000]'>Skills</p>
          <p className='py-4'>These are the technologies I have worked with</p>
        </div>

        <div className='hide-scroll w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={HTML} alt="HTML Logo" className='w-28 mx-auto h-28 mt-7' />
            <p className='my-4'>HTML</p>
          </div>

          <div className='hide-scroll shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={CSS} alt="CSS Logo" className='w-28 mx-auto h-28 mt-7' />
            <p className='my-4'>CSS</p>
          </div>

          <div className='hide-scroll shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={java} alt="Java Logo" className='w-28 mx-auto h-28 mt-7' />
            <p className='my-4'>Java</p>
          </div>

          <div className='hide-scroll shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={javascript} alt="Javascript Logo" className='w-28 mx-auto h-28 mt-7' />
            <p className='my-4'>Javascript</p>
          </div>

          <div className='hide-scroll shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={jquery} alt="JQuery Logo" className='w-28 mx-auto h-28 mt-7' />
            <p className='my-4'>JQuery</p>
          </div>

          <div className='hide-scroll shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={c} alt="C Logo" className='w-28 mx-auto h-28 mt-7' />
            <p className='my-4'>C</p>
          </div>

          <div className='hide-scroll shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={c_plusplus} alt="C++ Logo" className='w-28 mx-auto h-28 mt-7' />
            <p className='my-4'>C++</p>
          </div>

          <div className='hide-scroll shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={node} alt="NodeJS Logo" className='w-28 mx-auto h-28 mt-7' />
            <p className='my-4'>NodeJS</p>
          </div>

          <div className='hide-scroll shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={mongodb} alt="MongoDB Logo" className='w-28 mx-auto h-28 mt-7' />
            <p className='my-4'>MongoDB</p>
          </div>

          <div className='hide-scroll shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={mysql} alt="MySQL Logo" className='w-28 mx-auto h-28 mt-7' />
            <p className='my-4'>MySQL</p>
          </div>

          <div className='hide-scroll shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={postgresql} alt="PostgreSQL Logo" className='w-28 mx-auto h-28 mt-7' />
            <p className='my-4'>PostgreSQL</p>
          </div>

          <div className='hide-scroll shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={python} alt="Python Logo" className='w-28 mx-auto h-28 mt-7' />
            <p className='my-4'>Python</p>
          </div>

          <div className='hide-scroll shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={react} alt="ReactJS Logo" className='w-28 mx-auto h-28 mt-7' />
            <p className='my-4'>ReactJS</p>
          </div>

          <div className='hide-scroll shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={tailwindcss} alt="Tailwind CSS Logo" className='w-28 mx-auto h-28 mt-7' />
            <p className='my-4'>Tailwind CSS</p>
          </div>

          <div className='hide-scroll shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={unrealengine} alt="Unreal Engine Logo" className='w-28 mx-auto h-28 mt-7' />
            <p className='my-4'>Unreal Engine</p>
          </div>

          <div className='hide-scroll shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={AWS} alt="AWS Logo" className='w-28 mx-auto h-28 mt-7' />
            <p className='my-4'>AWS</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills