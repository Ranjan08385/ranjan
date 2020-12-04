import React, {useEffect} from 'react'
import './Projects.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import {motion} from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import  useWindowDimensions from '../../utils/useWindowDimensions';
import {projects, projectsHead, projectOne, projectTwo, projectThree} from './Animation';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const projectData = [
    {
        title: 'Money2India',
        description: 'This project is done by using React Native Web Technology. It is actually a single base code project where we can build Web, android and iOS application by maintaining same code.'
    },
    {
        title: 'Clinic Directory',
        description: 'This application is developed by using ReactJS library. Clinic directory will provide details about the hospital and doctors. The admin and privileged user can able to add/edit the clinical information.'
    },
    {
        title: 'Smart Voting System',
        description: 'This project is done by using Java platform. Here, i have implemented Face Recognition based Authentication mechanism for Online Voting System.'
    },
];

function Projects() {
    const { height, width } = useWindowDimensions();
    console.log('width and height', width, height)
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <motion.div variants={projects} initial="hidden" animate="visible" className="projects" id="projects">
            <div data-aos="fade-down" className="projects__head">
                <motion.h1 variants={projectsHead}>Projects</motion.h1>
            </div>
            
            <Swiper
                data-aos="zoom-in"
                spaceBetween={width <= 1024 ? 30 : 60}
                slidesPerView={width <= 1024 ? 1 : 3}
                // navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                style={{ width: width <= 1024 ? '90%' : '70%', height: 375, padding: width <= 1024 ? 10 : 50 }}
            >
               {projectData.map((data, index) => (
                   <SwiperSlide key={index} style={styles.swiper}>
                       <div className="swiper__parent">
                            <div className="swiper__title">
                            <h3>{data.title}</h3>
                            </div>
                            <div className="swiper__desc">
                            <p>{data.description}</p>
                            </div>
                       </div>
                   </SwiperSlide>
               ))}
            </Swiper>
            
            
        </motion.div>
    )
}

export default Projects;

const styles = {
    swiper: {
        height: 350,
        borderRadius: 5,
        boxShadow: '0 0px 5px rgba(0, 0, 0, 0.4)',
    }
}
