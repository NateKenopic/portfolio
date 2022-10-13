import React from 'react'

let skills = [];
skills.push("AWS");
skills.push("C");
skills.push("C++");
skills.push("CSS");
skills.push("HTML");
skills.push("Java");
skills.push("Javascript");
skills.push("JQuery");
skills.push("MongoDB");
skills.push("MySQL");
skills.push("NodeJS");
skills.push("PostgreSQL");
skills.push("Python");
skills.push("ReactJS");
skills.push("TailwindCSS");
skills.push("Unreal Engine");

const Skills = () => {
  return (
    <div className=' w-full h-screen bg-[#0a192f] text-gray-300' name='about'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#ff0000] text-[#ccd6f6]'>Skills</p>
                </div>
                <div>

                </div>
                <div className='max-w-[1000px] w-full grid grid-cols-3 gap-8 p-7 justify-center items-center'>
                    {skills.map(function(_skill, key) {
                      return (
                        <div key={key} className='max-w-[100px] h-[70px] max-h-[70px] bg-white border-gray-700 shadow-lg'>
                          <div>
                              
                          </div>
                          <div className='flex justify-center items-center'>
                            <p className=' text-black'>{_skill}</p>
                          </div>
                        </div>
                      )
                    })}
                </div>
            </div>
        </div>
  )
}

export default Skills