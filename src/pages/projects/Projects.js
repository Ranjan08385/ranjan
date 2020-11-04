import React from 'react'
import './Projects.css'
import {motion} from 'framer-motion'
import {projects, projectsHead, projectOne, projectTwo, projectThree} from './Animation'

function Projects() {
    return (
       
            <motion.div variants={projects} initial="hidden" animate="visible" className="projects" id="projects">
                <div className="projects__head">
                    <motion.h1 variants={projectsHead}>Projects</motion.h1>
                </div>
                <div className="projects__cardSections">
                    <motion.div variants={projectOne} className="projects__card">
                        <div className="projects__logo">
                            <h3>Money2India</h3>
                        </div>
                        <div className="projects__details">
                            <p> 
                                This project is done by using React Native
                                Web Technology. It is actually a single
                                base code project where we can build
                                Web, android and iOS application by
                                maintaining same code.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div variants={projectTwo} className="projects__card">
                        <div className="projects__logo">
                            <h3>Clinic Directory</h3>
                        </div>
                        <div className="projects__details">
                            <p> 
                                This application is developed by using
                                ReactJS library. Clinic directory will
                                provide details about the hospital and
                                doctors. The admin and privileged user
                                can able to add/edit the clinical
                                information.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div variants={projectThree} className="projects__card">
                        <div className="projects__logo">
                            <h3>Smart Voting System</h3>
                        </div>
                        <div className="projects__details">
                            <p> 
                                This project is done by using Java platform. 
                                Here, i have implemented Face Recognition based 
                                Authentication mechanism for Online Voting System.
                            </p>
                        </div>
                    </motion.div>
                        
                </div>
            </motion.div>
      
    )
}

export default Projects
