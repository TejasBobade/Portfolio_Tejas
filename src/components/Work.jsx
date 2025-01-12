import React from 'react';
import proj1 from "../assets/Pro1.png";
import proj2 from "../assets/Pro2.png";
import proj3 from "../assets/Pro3.png";
import proj4 from "../assets/Pro4.png";
import proj5 from "../assets/Pro5.png";
import proj6 from "../assets/Pro6.png";


const Work = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5' id='work'>
        <div className='pb-8'>
            <p className='text-4xl mb-3 font-bold primary-color'>Work</p>
            <p className='text-gray-400'>Check out some of my recent work</p>
        </div>

        {/* Project1 ->  */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                <img src={proj1} alt=""/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>Snapgram</span>
                    <span className='text-2xl font-bold text-white tracking-wider'>Social Media App</span>
                    <div className='pt-8 text-center'>
                        <a href="https://insta-void.vercel.app" target='_blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Live
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                <img src={proj2} alt=""/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>Brainwave</span>
                    <span className='text-2xl font-bold text-white tracking-wider'>Landing Page</span>
                    <div className='pt-8 text-center'>
                        <a href="https://brainwave-nine-ashen.vercel.app" target='_blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Live
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                <img src={proj3} alt=""/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>Hirrd</span>
                    <span className='text-2xl font-bold text-white tracking-wider'>Job Portal</span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                In Development
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                <img src={proj4} alt=""/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>VirtualR</span>
                    <span className='text-2xl font-bold text-white tracking-wider'>Landing Page</span>
                    <div className='pt-8 text-center'>
                        <a href="https://virtual-r-sooty-three.vercel.app">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Live
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                <img src={proj5} alt=""/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>Portfolio</span>
                    <div className='pt-8 text-center'>
                        <a href="/" target='_blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Live
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                <img src={proj6} alt=""/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>StableMax</span>
                    <span className='text-2xl font-bold text-white tracking-wider'>AI Image Generator</span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                In Development
                            </button>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Work