import React from 'react';
import { ScrollRestoration } from 'react-router-dom';
import AboutMe from '../../AboutMe/AboutMe';
import Education from '../../Education/Education';
import ContactForm from '../ContactForm/ContactForm';
import Hero from '../Hero/Hero';
import HomeProjects from '../HomeProjects/HomeProjects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Skills></Skills>
            <HomeProjects></HomeProjects>
            <Education></Education>
            <AboutMe></AboutMe>
            
            <ContactForm></ContactForm>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Home;