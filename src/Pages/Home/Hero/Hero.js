import React from 'react';
import Typewriter from 'typewriter-effect';

import { motion } from "framer-motion"
import './Hero.css'
import resume from '../../../assets/resume/DiproPaulResume (1).pdf'
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import image from '../../../assets/hero-image/profile.jpg';



const Hero = () => {
    return (
        <div className='relative mb-10 hero'>


            <div className='text-center z-10 relative  py-8 '>
                <h1 className='text-6xl text-white font-bold'>Hi, I'm 
 <span className='text-cyan-400'> Dipro Paul</span></h1>
         
                <h3 className='md:text-4xl text-2xl flex mx-auto justify-center font-bold text-white'><span className='mx-3'>I am a</span> <Typewriter

                    options={{

                        strings: ['Web Developer','React JS Developer', 'Front End Developer', 'Mern Stack Developer'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                </h3>
                <Link to={resume} target="_blank" download>
                    <button className='my-4 px-4 py-2 rounded-full font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white'>Download My Resume</button>
                </Link>
                <div className='flex justify-center'>
                    <img className='w-96 mb-10' src={image} alt="" />
                </div>
            </div>
            <div className='backdrop-blur-lg   box-shadow  bg-gradient-to-r md:bg-gradient-to-t from-fuchsia-800 to-blue-800 md:w-10 w-72 h-12 md:h-72 absolute left-0 md:left-0 bottom-0 md:top-40 rounded-r-lg'>

            <div className="flex flex-row md:flex-col gap-x-5 items-center gap-y-0 md:gap-y-5 justify-center">
                            <a target={'_blank'} rel="noreferrer"   href="https://www.linkedin.com/in/dipro-paul-5308a8259/" title="Twitter" className="flex items-center justify-center w-12 h-12 rounded-full sm:w-10 sm:h-10   text-gray-100">
                                <FaLinkedin  className='w-6 h-6'></FaLinkedin>
                            </a>
                            <a  target={'_blank'} rel="noreferrer" href="https://github.com/DIP-RO" title="Github" className="flex items-center justify-center  rounded-full sm:w-10 sm:h-10  text-gray-100">
                                <FaGithub className='w-6 h-6'></FaGithub>
                            </a>
                            <a target={'_blank'} rel="noreferrer"  href="https://www.facebook.com/profile.php?id=100078072293427&mibextid=ZbWKwL" title="Facebook" className="flex items-center justify-center  rounded-full sm:w-10 sm:h-10  text-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-6 h-6">
                                    <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                                </svg>
                            </a>
                           




                        </div>

            </div>

            <motion.div
                className='absolute bottom-28 left-50 z-1 background_glow rounded-full w-[40%] h-[40%]'>
            </motion.div>

        </div>
    );
};

export default Hero;