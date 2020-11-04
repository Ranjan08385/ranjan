import React from 'react'
import './About.css'
import {motion} from 'framer-motion'
import {about, aboutHead, aboutImag, aboutTextHead, aboutText} from './Animation'

const aboutImg = require('../../images/about.jpg');

function About() {
    return (
    
            <motion.div variants={about} initial="hidden" animate="visible" className="about" id="about">
                <div className="about__head">
                    <motion.h1 variants={aboutHead}>About</motion.h1>
                </div>
                <div className="about__imgAndText">
                    <motion.div variants={aboutImag} className="about__img">
                        <img src={aboutImg} alt="" />
                    </motion.div>
                    <motion.div  className="about__me">
                        <motion.h2 variants={aboutTextHead}>I'am Ranjan Moger</motion.h2>
                        <motion.p variants={aboutText}>To work in an organization where I can use my skills and knowledge to deliver value added results that provides me job satisfaction and self development which help me achieve personal as well as organizational goals.</motion.p>
                    </motion.div>
                </div>
            </motion.div>
      
    )
}

export default About
