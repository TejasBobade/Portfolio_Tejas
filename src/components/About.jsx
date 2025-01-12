import React from 'react';
import aboutImg from "../assets/Photo.jpg"

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
        <div className='md:grid md:grid-cols-2 sm:py-16'>

            <div className='mt-4 md:mt-0 text-left flex'>

                <div className='my-auto mx-6'>
                    
                    <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                    Hi, I'm Tejas Bobade, a frontend developer with a strong foundation in full-stack web development. My tech stack includes HTML, CSS, JavaScript, Tailwind CSS, React.js, Python, Express, Mongoose, and Shadcn UI. I hold a B.E. in Computer Science from Zeal College of Engineering and Research and completed a web development internship at Elite Software.
                    </p>
                </div>
            </div>

            <img className='border border-gray-600 mx-auto rounded-full py-8 md:py-0' src={aboutImg} alt="about image" width={300} height={300} />
        </div>
    </div>
  )
}

export default About;