import React from 'react';
import image from '../../assets/hero-image/cover.jpg'

const AboutMe = () => {
    return (
        <section id='aboutme' className='relative my-20'>
        <div className='flex mx-4 md:mx-32 relative z-10 flex-col md:flex-row gap-10  justify-between items-center'>
            <img className='w-full md:w-[40%]' src={image} alt="" />

            <div className= 'w-full md:w-[50%] mx-auto'>
                <h1 className='text-start text-4xl text-white my-4  font-bold'>About Me</h1>

                <p className=' text-white font-semibold mx-auto'>
                    <span>Hi there,</span>
                    <br />
                    I am a web developer with an amazing ability to develop websites that are both functional and aesthetically pleasing. I have a strong under-standing of web standards and best practices, and I am passionate about creating websites that users will find easy to use and visually appealing.
                </p>
            </div>

        </div>
        <div className='absolute top-0 right-0 z-1 blue-pink-gradient rounded-full w-[30%] h-[30%]'>

        </div>
    </section>
    );
};

export default AboutMe;