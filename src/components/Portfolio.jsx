import React from 'react'

import virutalMouse from '../assets/portfolio/virtualmoimg.jpg'
import Article from '../assets/portfolio/AiArticleSummerizer.jpg'
import weather from '../assets/portfolio/weatherimg.jpeg'


const Portfolio = () => {

    const Portfolios= [
        {
          id: 1,
          src: weather,
          link: "https://weatherioforecast.netlify.app/",
          code: "https://github.com/Raj2137/Weather-application/tree/main"
        
        },
        {
            id: 2,
            src: Article,
            link: "https://aiarticlesummerizer.netlify.app/",
            code: "https://github.com/Raj2137/AI_Summarizer"
        },
        {
            id: 3,
            src: virutalMouse,
            code: "https://github.com/Raj2137/Virtual-Mouse"
        },
        // {
        //     id: 4,
        //     src: reactSmooth,
        // },
        // {
        //     id: 1,
        //     src: reactWeather,
        // },
        // {
        //     id: 6,
        //     src: reactParallax,
        // },
    ]
  return (
    <div name="portfolio" className="bg-gradient-to-b from from-black to-gray-900 text-white md:h-screen w-full">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="font-bold text-4xl  border-gray-500">Portfolio <span className='text-sky-500'>Projects</span></p>
                {/* <p className="py-6">Check out some of my work right here</p> */}
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-12 sm:px-0 mt-3">

            {
                Portfolios.map(({ id, src, link,code }) => (
                    

                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                    <img src={src} 
                    alt="" 
                    className="rounded-md duration-200 hover:scale-105 w-full h-2/3"/>

                    {id === 3 ? (
                      <div className='flex justify-center'>
                              <button className=" px-6 py-6 hover:scale-125 duration-100 w-full">
                                <a href={code} rel="noopener noreferrer" target="_blank">Code</a>
                              </button>
                              </div>
                            ) : (
                              <div className='flex '>
                                <button className="w-1/2 px-6 py-3 m-4 hover:scale-125 duration-100">
                                  <a href={link} rel="noopener noreferrer" target="_blank">Demo</a>
                                </button>
                                <button className="w-1/2 px-6 py-3 m-4 hover:scale-125 duration-100">
                                  <a href={code} rel="noopener noreferrer" target="_blank">Code</a>
                                </button>
                              </div>
                            )}
               
                
               </div>  
         
         ))
        }
         </div>
               
               
         
  </div>
  </div>
  );
}

export default Portfolio