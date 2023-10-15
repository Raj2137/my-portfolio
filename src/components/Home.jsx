import React from 'react'
import HeroImg from "../assets/heroImage.png"
import {MdKeyboardArrowRight} from "react-icons/md";
import {Link} from 'react-scroll'


const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to bg-gray-900 xs:pt-20">
        <div  className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl text-white sm:text-7xl font-bold">Hi, I'm <span className=' text-sky-400'> Raj </span>Kumar Rana</h2>
                <p className="text-gray-400 py-4 max-w-md text-3xl">
                Passionate Software Developer
                </p>
                <div>
                    
                <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer">
                    Portfolio
                    <span className="group-hover:rotate-90 duration-300">
                        <MdKeyboardArrowRight size={25} className="ml-1"/>
                    </span>
                </Link>
                
                </div>
            </div>
            <div className=' py-6'>
                <img src={HeroImg} alt="my profile" className="rounded-full mx-auto w-2/3 md:w-full shadow-lg shadow-blue-900 py-4 px-4"/>
            </div>
        </div>
    </div>
  )
}

export default Home