import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#ff0000]'>
                        About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hello! I'm Nathan Kenopic, thanks for taking a look at my website.</p>
                    </div>
                    <div>
                        <p>I'm a young and passionate programmer. I love working in web development, software development,
                            and game development. My specific skills can be found below in the skills section of my
                            portfolio.</p>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About