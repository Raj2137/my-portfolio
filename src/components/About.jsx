import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-900  to-black text-white xs:h-full">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className='pb-8 '>
                <p className='text-4xl font-bold
                border-gray-500 my-4 xs:mt-9'>
                About <span className='text-sky-500'>Me</span></p>  
            </div>
            <p className='text-xl mt-5'>
            Hello, I'm <span className=' text-blue-400'>Raj</span> Kumar Rana, a final year student at the Institute of Aeronautical Engineering, where I'm pursuing a degree in <span className=' text-blue-400'>Information Technology</span>. Over the past few years, I've delved into the world of web development, mastering technologies like <span className=' text-blue-400'>HTML, CSS, JavaScript, React, Tailwind CSS, and APIs </span>. Beyond web development, I've honed my problem-solving and programming skills in both <span className=' text-blue-400'>Python</span> and <span className=' text-blue-400'>Java</span>. I'm passionate about leveraging technology to build innovative solutions and continuously expanding my skill set in the world of IT
            </p>
            <br/>
            <p className='text-xl '>
            I'm seeking opportunities to learn and grow. Passionate about <span className=' text-blue-400'>software development, solving problems</span>  and driven by a curiosity for budling software solutions that can make difference. I am eager to learn at this stage and want to contribute for developing best solutions.
            </p>
        </div>
    </div>
  )
}

export default About