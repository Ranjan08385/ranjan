import React, {useEffect} from 'react'
import 'boxicons'
import './Skills.css'
import {motion} from 'framer-motion'
import {
    skills,
    skillsHead,
    skillsLeft,
    skillsRight,
    skillsLeftHead,
    reactJS,
    reactNative,
    html,
    nodeJS
    } from './Animation'
import Aos from 'aos';
import 'aos/dist/aos.css';

const skillsImg = require('../../images/skills.jpg');

function Skills() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
      
            <motion.div variants={skills} initial="hidden" animate="visible" className="skills" id="skills">
                <div data-aos="fade-down" className="skills__head">
                    <motion.h1 variants={skillsHead}>Skills</motion.h1>
                </div>

                <div className="skills__profSkills">
                    <div data-aos="fade-right" variants={skillsLeft} className="skills__skillSet">
                        <motion.h2 variants={skillsLeftHead}>Professional Skills</motion.h2>

                        <div data-aos="fade-right" data-aos-delay="100" variants={reactJS} className="skills__section">
                            <div className="skills__content">
                                <div className="skilss__iconAndLabel">
                                    <box-icon color="#4070f4" type='logo' name='react'></box-icon>
                                    <span>REACT JS</span>
                                </div>
                                
                                <span>80%</span>
                            </div>
                            <div className="skills__bars reactJs"></div> 
                        </div>

                        <div data-aos="fade-right" data-aos-delay="300" variants={reactNative} className="skills__section">
                            <div className="skills__content">
                                <div className="skilss__iconAndLabel">
                                    <box-icon color="#4070f4" type='logo' name='react'></box-icon>
                                    <span>REACT NATIVE</span>
                                </div>
                                
                                <span>70%</span>
                            </div>
                            <div className="skills__bars reactNative"></div> 
                        </div>

                        <div data-aos="fade-right" data-aos-delay="600" variants={html} className="skills__section">
                            <div className="skills__content">
                                <div className="skilss__iconAndLabel">
                                    <box-icon color="#4070f4" type='logo' name='html5'></box-icon>
                                    <span>HTML/CSS</span>
                                </div>
                                
                                <span>75%</span>
                            </div>
                            <div className="skills__bars html-css"></div> 
                        </div>

                        <div data-aos="fade-right" data-aos-delay="900" variants={nodeJS} className="skills__section">
                            <div className="skills__content">
                                <div className="skilss__iconAndLabel">
                                    <box-icon color="#4070f4" type='logo' name='nodejs'></box-icon>
                                    <span>NODE JS</span>
                                </div>
                                
                                <span>50%</span>
                            </div>
                            <div className="skills__bars nodeJs"></div> 
                        </div>
                        
                    </div>
                    <div data-aos="fade-left" variants={skillsRight} className="skills__img">
                        <img src={skillsImg} alt="" />
                    </div>
                </div>
            </motion.div>

    )
}

export default Skills
