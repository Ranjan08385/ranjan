import React from 'react'
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

const skillsImg = require('../../images/skills.jpg');

function Skills() {
    return (
      
            <motion.div variants={skills} initial="hidden" animate="visible" className="skills" id="skills">
                <div className="skills__head">
                    <motion.h1 variants={skillsHead}>Skills</motion.h1>
                </div>

                <div className="skills__profSkills">
                    <motion.div variants={skillsLeft} className="skills__skillSet">
                        <motion.h2 variants={skillsLeftHead}>Professional Skills</motion.h2>

                        <motion.div variants={reactJS} className="skills__section">
                            <div className="skills__content">
                                <div className="skilss__iconAndLabel">
                                    <box-icon color="#4070f4" type='logo' name='react'></box-icon>
                                    <span>REACT JS</span>
                                </div>
                                
                                <span>80%</span>
                            </div>
                            <div className="skills__bars reactJs"></div> 
                        </motion.div>

                        <motion.div variants={reactNative} className="skills__section">
                            <div className="skills__content">
                                <div className="skilss__iconAndLabel">
                                    <box-icon color="#4070f4" type='logo' name='react'></box-icon>
                                    <span>REACT NATIVE</span>
                                </div>
                                
                                <span>70%</span>
                            </div>
                            <div className="skills__bars reactNative"></div> 
                        </motion.div>

                        <motion.div variants={html} className="skills__section">
                            <div className="skills__content">
                                <div className="skilss__iconAndLabel">
                                    <box-icon color="#4070f4" type='logo' name='html5'></box-icon>
                                    <span>HTML/CSS</span>
                                </div>
                                
                                <span>75%</span>
                            </div>
                            <div className="skills__bars html-css"></div> 
                        </motion.div>

                        <motion.div variants={nodeJS} className="skills__section">
                            <div className="skills__content">
                                <div className="skilss__iconAndLabel">
                                    <box-icon color="#4070f4" type='logo' name='nodejs'></box-icon>
                                    <span>NODE JS</span>
                                </div>
                                
                                <span>50%</span>
                            </div>
                            <div className="skills__bars nodeJs"></div> 
                        </motion.div>
                        
                    </motion.div>
                    <motion.div variants={skillsRight} className="skills__img">
                        <img src={skillsImg} alt="" />
                    </motion.div>
                </div>
            </motion.div>

    )
}

export default Skills
