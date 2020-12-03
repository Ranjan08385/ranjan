import React, {useEffect} from 'react'
import './About.css'
import {motion} from 'framer-motion'
import {about, aboutHead, aboutImag, aboutTextHead, aboutText} from './Animation'
import Aos from 'aos';
import 'aos/dist/aos.css';

const aboutImg = require('../../images/about.jpg');

function About() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
    
            <motion.div variants={about} initial="hidden" animate="visible" className="about" id="about">
                <div data-aos="fade-down" className="about__head">
                    <motion.h1 variants={aboutHead}>About</motion.h1>
                </div>
                <div className="about__imgAndText">
                    <div data-aos="fade-right" variants={aboutImag} className="about__img">
                        <img src={aboutImg} alt="" />
                    </div>
                    <div data-aos="fade-left"  className="about__me">
                        <h2 data-aos="fade-left" data-aos-delay="100" variants={aboutTextHead}>I'am Ranjan Moger</h2>
                        <p data-aos="fade-left" data-aos-delay="300" variants={aboutText}>To work in an organization where I can use my skills and knowledge to deliver value added results that provides me job satisfaction and self development which help me achieve personal as well as organizational goals.</p>
                    </div>
                </div>
            </motion.div>
      
    )
}

export default About
