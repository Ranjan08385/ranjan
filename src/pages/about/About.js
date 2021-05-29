import React, { useEffect } from "react";
import "./About.css";
import { motion } from "framer-motion";
import {
  about,
  aboutHead,
  aboutImag,
  aboutTextHead,
  aboutText,
} from "./Animation";
import Aos from "aos";
import "aos/dist/aos.css";

const aboutImg = require("../../images/about.jpg");

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <motion.div
      variants={about}
      initial="hidden"
      animate="visible"
      className="about"
      id="about"
    >
      <div data-aos="fade-down" className="about__head">
        <motion.h1 variants={aboutHead}>About</motion.h1>
      </div>
      <div className="about__imgAndText">
        <div data-aos="fade-right" variants={aboutImag} className="about__img">
          <img src={aboutImg} alt="" />
        </div>
        <div data-aos="zoom-in" className="about__me">
          <h2 data-aos="zoom-in" data-aos-delay="100" variants={aboutTextHead}>
            I'am Ranjan Moger
          </h2>
          <p data-aos="zoom-in" data-aos-delay="200" variants={aboutText}>
            Front end developer with 2 plus years of experience in Web and
            Mobile Applications development using array of technologies like
            HTML, CSS, Java Script, ReactJs, React Native, JSON, Redux, Nodejs.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
