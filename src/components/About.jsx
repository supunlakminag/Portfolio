import React from 'react';
import { motion } from 'framer-motion';
import { BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi';

const About = () => {
  return (
    <div className='mx-auto max-w-6xl w-full min-h-screen p-4 md:p-8 lg:p-28 flex flex-col md:flex-row items-center justify-center gap-10' id='about'>

      {/* Image */}
      <motion.img
        src="/image.jpg"
        alt="Profile"
        className='w-[900px] md:w-[280px] rounded-3xl hover:shadow-2xl hover:shadow-blue-700 hover:scale-100  transition-all duration-500'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className='flex flex-col items-center md:items-start gap-6 text-center md:text-left'
      >
        <span className='px-4 py-2 bg-zinc-800 text-white rounded-full text-sm'>
          Open to hire
        </span>
        <h1 className="text-5xl md:text-4xl lg:text-6xl font-semibold bg-gradient-to-r from-blue-700 via-sky-600 to-blue-400 text-transparent bg-clip-text">
          Supun Gamage
        </h1>
        <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-center md:text-left bg-gradient-to-r from-blue-400 via-sky-400 to-blue-600 text-transparent bg-clip-text">
          Software Developer
        </h3>
        <p className='text-sm text-slate-700 max-w-xl'>
          Passionate and results-driven Software Engineer with experience in full-stack development, specializing in React, React Native, Node.js, and Java. Skilled in designing and building scalable applications, working with databases (SQL & NoSQL), cloud services (AWS, Docker, Kubernetes), and CI/CD pipelines. Enthusiastic about machine learning, time series forecasting, and system architecture. Dedicated to writing clean, efficient, and maintainable code while collaborating within cross-functional teams to develop innovative solutions. Always eager to explore new technologies, optimize performance, and create impactful software products.
        </p>

        {/* Social Media Links */}
        <div className='flex gap-5 mt-3'>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <BiLogoGithub className='text-3xl text-white cursor-pointer hover:scale-110 hover:text-purple-500 hover:rotate-12 transition-all duration-300 ease-in-out' />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <BiLogoLinkedin className='text-3xl text-white cursor-pointer hover:scale-110 hover:text-blue-500 hover:-rotate-12 transition-all duration-300 ease-in-out' />
          </a>
        </div>
      </motion.div>

    </div>
  );
}

export default About;
