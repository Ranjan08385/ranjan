import React, {useEffect} from 'react'
import './Projects.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import {motion} from 'framer-motion'
import {projects, projectsHead, projectOne, projectTwo, projectThree} from './Animation'

function Projects() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
       
            <motion.div variants={projects} initial="hidden" animate="visible" className="projects" id="projects">
                <div data-aos="fade-down" className="projects__head">
                    <motion.h1 variants={projectsHead}>Projects</motion.h1>
                </div>
                <div className="projects__cardSections">
                    <div data-aos="flip-left" variants={projectOne} className="projects__card">
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
                    </div>

                    <div data-aos="zoom-in" variants={projectTwo} className="projects__card">
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
                    </div>

                    <div data-aos="flip-right" variants={projectThree} className="projects__card">
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
                    </div>
                        
                </div>
            </motion.div>
      
    )
}

export default Projects
