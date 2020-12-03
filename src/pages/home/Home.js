import React, {useEffect} from 'react'
import './Home.css'
import {motion} from 'framer-motion'
import {home, leftText, resumeButton, instaIcon, linkedIcon, faceIcon, gitIcon, homeImg} from './Animation'
import Aos from 'aos';
import 'aos/dist/aos.css';

const profileImg = require('../../images/profile.png');
const resume = require('../../resume/My_Resume_React.pdf');

function Home() {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <motion.div variants={home} initial="hidden" animate="visible"  className="home" id="home">
            <div className="home__left">
                <motion.p 
                    variants={leftText}
                >
                    Hi, <br />i'am <motion.span variants={leftText}>Ranjan</motion.span> <br />Web Developer
                </motion.p>
                <a
                    href={resume}
                    target="_blank"
                >
                <motion.button 
                     variants={resumeButton}
                >
                    Resume
                </motion.button>
                </a>
                

                <div className="home__socialLinks">
                    <motion.a 
                        variants={instaIcon}
                        whileHover="hover"
                        href="https://www.instagram.com/ranjanmoger/?hl=en"
                        target="_blank"
                     >
                        <i class='bx bxl-instagram'></i>
                    </motion.a>
                    <motion.a 
                        variants={linkedIcon}
                        whileHover="hover"
                        href="https://www.linkedin.com/in/ranjan-moger-042952141/"
                        target="_blank"
                    >
                        <i class='bx bxl-linkedin' ></i>
                    </motion.a>
                    <motion.a 
                        variants={faceIcon}
                        whileHover="hover"
                        href="https://www.facebook.com/ranjan.moger.50/"
                        target="_blank"
                    >
                        <i class='bx bxl-facebook' ></i>
                    </motion.a>
                    <motion.a 
                        variants={gitIcon}
                        whileHover="hover"
                        href="https://github.com/Ranjan08385"
                        target="_blank"
                    >
                        <i class='bx bxl-github' ></i>
                    </motion.a>
                </div>
            </div>
            <div 
                data-aos="zoom-in"
                variants={homeImg}
                className="home__right"
            >
                <img src={profileImg} alt="" />
            </div>
        </motion.div>
    )
}

export default Home
