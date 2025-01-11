import React from 'react';
import heroimage from "../assets/profilepic7.png";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70-vh] mx-auto py-8 bg-black'>

        {/* This is for image in hero section */}
        <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
            <img src={heroimage} alt="hero image" />
        </div>

        {/* Has a Title animation*/}
        <div className='col-span-2 px-5'>
            <h2 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
                <span className='primary-color'>
                I'm a
                </span> <br />
                <TypeAnimation 
                    sequence={[
                        "Frontend Dev",
                        1000,
                        "Webdesigner",
                        1000,
                        "Full Stack Dev",
                        1000,

                    ]}
                    wrapper='span'
                    speed={50}
                    repeat={Infinity}
                />
            </h2>

            {/* Basic Intro */}
            <p className='text-white sm:text-lg my-6 lg:text-xl'>
            Hi, I'm Tejas Bobade, a frontend developer with expertise in HTML, CSS, JavaScript, Tailwind CSS, React.js, and more. I also have experience in full-stack web development and completed a web development internship at Elite Software. 
            </p>

            {/* Download CV option */}
            <div className='my-8'>
                <a href="/" className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white'>
                    Download CV
                </a>
                <a href="#contact" className='px-6 py-3 w-full rounded-xl border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none'>
                    Contact
                </a>
            </div>
        </div>

    </div>
  )
}

export default Hero
