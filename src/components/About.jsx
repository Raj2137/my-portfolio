import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800  to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4
                border-gray-500 my-4'>
                About</p>  
            </div>
            <p className='text-xl mt-5'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam maxime excepturi, explicabo iste assumenda, tempora inventore dignissimos neque nobis ea consequuntur, nisi atque minus laudantium vel qui voluptatum reprehenderit? Cupiditate aliquid iste modi ad tenetur ipsam quisquam nemo possimus explicabo, similique quaerat voluptas culpa sed! Est quis odio nobis dolorum.
            </p>
            <br/>
            <p className='text-xl'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolores quis dolorum id cum consequatur ipsa corporis atque facere, quae vitae assumenda a, minima iusto. Atque officiis maxime laboriosam eligendi!
            </p>
        </div>
    </div>
  )
}

export default About