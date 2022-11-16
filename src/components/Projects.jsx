import React from 'react'

const Projects = () => {
  return (
    <div className='w-full md:h-screen bg-[#0a192f] text-gray-300' name='projects'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='justify-center text-center pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#ff0000]'>Projects</p>
                <p className='py-6'>Check out some of my projects!</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div>
                        <span>

                        </span>
                        <div>
                            <a href='/'>
                                <button></button>
                            </a>

                            <a href='/'>
                                <button></button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Projects