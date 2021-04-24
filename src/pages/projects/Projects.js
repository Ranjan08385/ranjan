import React, { useEffect, useState } from "react";
import "./Projects.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper.scss";
import useWindowDimensions from "../../utils/useWindowDimensions";
import {
  projects,
  projectsHead,
  projectOne,
  projectTwo,
  projectThree,
} from "./Animation";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import ProjectDetails from "./ProjectDetails";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const activity1 = require("../../images/Activity1.JPG");
const activity2 = require("../../images/Activity2.JPG");
const activity3 = require("../../images/Activity3.JPG");

const rb1 = require("../../images/RB1.JPG");
const rb2 = require("../../images/RB2.JPG");
const rb3 = require("../../images/RB3.JPG");

const ac1 = require("../../images/AC1.JPG");
const ac2 = require("../../images/AC2.JPG");
const ac3 = require("../../images/AC3.JPG");

const mi1 = require("../../images/MI1.JPG");
const mi2 = require("../../images/MI2.JPG");
const mi3 = require("../../images/MI3.JPG");

const projectData = [
  {
    title: "Resume Builder",
    description:
      "This application is developed by using MongoDB, Express, Reacts and NodeJS (MERN). The user can able to create and update resume and also user authentication added. ",
    link: "https://build-your-resume.netlify.app/",
    images: [rb1, rb2, rb3],
  },
  {
    title: "Activity Project",
    description:
      "This application is developed by using MongoDB, Express, Reacts and NodeJS (MERN). The user can able to create, edit and delete activity and also user authentication added.",
    link: "https://activity-project.netlify.app/",
    images: [activity1, activity2, activity3],
  },
  {
    title: "Amazon Clone",
    description:
      "This application is developed by using ReactJS library. The user can able to add items to the basket and able to make the payment.",
    link: "https://clone-208f1.web.app/",
    images: [ac1, ac2, ac3],
  },
  {
    title: "Money2India",
    description:
      "This project is done by using React Native Web Technology. It is actually a single base code project where we can build Web, android and iOS application by maintaining same code.",
    link: "https://money2india.icicibank.com/",
    images: [mi1, mi2, mi3],
  },
  {
    title: "Clinic Directory",
    description:
      "This application is developed by using ReactJS library. Clinic directory will provide details about the hospital and doctors. The admin and privileged user can able to add/edit the clinical information.",
    link: null,
    images: [],
  },
];

function Projects() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const onOpenModal = (data) => {
    setOpen(true);
    setData(data);
    console.log(data);
  };
  const onCloseModal = () => setOpen(false);
  return (
    <motion.div
      variants={projects}
      initial="hidden"
      animate="visible"
      className="projects"
      id="projects"
    >
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
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{
          width: width <= 1024 ? "90%" : "70%",
          height: 375,
          padding: width <= 1024 ? 10 : 50,
        }}
      >
        {projectData.map((data, index) => (
          <SwiperSlide
            key={index}
            style={styles.swiper}
            onClick={() => onOpenModal(data)}
          >
            <div className="swiper__parent">
              <div className="swiper__title">
                {/* <a href={data.link} target="_blank"> */}
                <h3>{data.title}</h3>
                {/* </a> */}
              </div>
              <div className="swiper__desc">
                <p>{data.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal open={open} onClose={onCloseModal} center>
        <ProjectDetails data={data} />
      </Modal>
    </motion.div>
  );
}

export default Projects;

const styles = {
  swiper: {
    height: 350,
    borderRadius: 5,
    boxShadow: "0 0px 5px rgba(0, 0, 0, 0.4)",
    cursor: "pointer",
  },
};
