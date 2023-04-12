import React from 'react'
import {
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#ff0000] text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>Send me an email - nkenopic@outlook.com</p>
          <br></br>
          <a className='flex justify-between items-center w-full scale-125 shadow-[#040c16] text-white border-2 rounded-lg p-2 bg-[#0000b3] hover:scale-150 duration-300' href='https://www.linkedin.com/in/nathankenopic/' target='blank'>
            Linkedin <FaLinkedin size={30} />
          </a>
          <br></br><br></br>
          <a className='flex justify-between items-center w-full scale-125 shadow-[#040c16] text-white border-2 rounded-lg p-2 bg-[black] hover:scale-150 duration-300' href='https://github.com/NateKenopic' target='blank'>
            Github <FaGithub size={30} />
          </a>
        </div>
    </div>
  )
}

export default Contact