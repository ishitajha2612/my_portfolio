import React from 'react';
import AboutImage from '../assets/photo.jpg';

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt="About"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a passionate and skilled web developer with a strong foundation in building
              modern, responsive, and user-friendly websites. Proficient in HTML, CSS, JavaScript,
              and frameworks like React, I specialize in crafting seamless user experiences and
              dynamic web applications.
            </p>
            <div className="space-y-4">
              
              <div className="flex items-center">
                <span className="w-2/12">HTML & CSS</span>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded w-8/12"></div>
                </div>
              </div>
              
              <div className="flex items-center">
                <span className="w-2/12">React JS</span>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded w-1/12"></div>
                </div>
              </div>
             
              <div className="flex items-center">
                <span className="w-2/12">Node JS</span>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded w-1/12"></div>
                </div>
              </div>
            </div>
          

<div className="mt-12 grid grid-cols-3 gap-6 text-center">
  <div>
    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
      1+
    </h3>
    <p>Years Experience</p>
  </div>
  <div>
    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
      5+
    </h3>
    <p>Projects Completed</p>
  </div>
  <div>
    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
      0
    </h3>
    <p>Happy Clients</p>
  </div>
</div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
