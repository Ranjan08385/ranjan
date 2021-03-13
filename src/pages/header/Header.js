import React, { useEffect, useState } from "react";
import "./Header.css";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
// import { Link } from "react-scroll";

function Header({ mode, toggleMode, toggleMenu, showMenu }) {
  const [home, setHome] = useState(true);
  const [about, setAbout] = useState(false);
  const [skills, setSkills] = useState(false);
  const [projects, setProjects] = useState(false);
  const [contact, setContact] = useState(false);
  // const [showMenu, setMenuToggle] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const menuAnimate = {
    hidden: {
      x: 500,
      opacity: 1,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0,
        duration: 1,
        // type: 'spring',
        // stiffness: 100
      },
    },
  };

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  const onClickHeaderLink = (value) => {
    if (showMenu) {
      toggleMenu();
    }

    if (value === "Home") {
      setHome(true);
      setAbout(false);
      setSkills(false);
      setProjects(false);
      setContact(false);
    } else if (value === "About") {
      setHome(false);
      setAbout(true);
      setSkills(false);
      setProjects(false);
      setContact(false);
    } else if (value === "Skills") {
      setHome(false);
      setAbout(false);
      setSkills(true);
      setProjects(false);
      setContact(false);
    } else if (value === "Projects") {
      setHome(false);
      setAbout(false);
      setSkills(false);
      setProjects(true);
      setContact(false);
    } else if (value === "Contact") {
      setHome(false);
      setAbout(false);
      setSkills(false);
      setProjects(false);
      setContact(true);
    }
  };

  // const toggleMenu = () => {
  //     setMenuToggle(!showMenu)
  // }

  return (
    <div className="header" style={{ backgroundColor: mode ? "#000" : "#fff" }}>
      <div className="header__space"></div>
      <div className="header__logo">
        <motion.h3
        // initial={{ y: 30, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ delay: .5 }}
        >
          Ranjan Moger
        </motion.h3>
      </div>
      <div className="header__links">
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          // offset={-20}
          duration={1000}
          activeClassName="selected"
          onClick={() => onClickHeaderLink("Home")}
          className={`header__linksStyle ${home ? "select" : ""}`}
          to="/#"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          // offset={-64}
          duration={1000}
          scroll={(el) => scrollWithOffset(el)}
          activeClassName="selected"
          onClick={() => onClickHeaderLink("About")}
          className={`header__linksStyle ${about ? "select" : ""}`}
          to="/#about"
        >
          About
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          // offset={-20}
          duration={1000}
          activeClassName="selected"
          scroll={(el) => scrollWithOffset(el)}
          onClick={() => onClickHeaderLink("Skills")}
          className={`header__linksStyle ${skills ? "select" : ""}`}
          to="/#skills"
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          // offset={-20}
          duration={1000}
          activeClassName="selected"
          scroll={(el) => scrollWithOffset(el)}
          onClick={() => onClickHeaderLink("Projects")}
          className={`header__linksStyle ${projects ? "select" : ""}`}
          to="/#projects"
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          // offset={-20}
          duration={1000}
          activeClassName="selected"
          scroll={(el) => scrollWithOffset(el)}
          onClick={() => onClickHeaderLink("Contact")}
          className={`header__linksStyle ${contact ? "select" : ""}`}
          to="/#contact"
        >
          Contact
        </Link>
      </div>

      <div className="header__menu">
        {!showMenu ? (
          <button onClick={() => toggleMenu()}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAb0lEQVRIS+2VyQ3AIBADTWeURjqDyoL2sR+OKA8rIGIX4JFGhg1YlLCIC4E/My/VrjoBuIner7ZrppoJNWbH2Q5MtDyu0qrdSySvumjVs3GZambyW9VM6LBLz8m1/O+vtrPITNencTH1PnZJ9fmqKyfUDB8mdaD4AAAAAElFTkSuQmCC" />
          </button>
        ) : (
          <button onClick={() => toggleMenu()}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAA30lEQVRIS+2V4Q0CIQxG302gm+gIuokbqBM5gq5wGziKbmC+BBIS77hWUPwBv5s++mjLQKMzNOLSwT8z31X/leo1cAXOwH3hZgfgCOyBRy7W8saCbUIiJZyDC3oJsBHYlYLThKpiCp7GPAM0a8dSsS6eg7uhSmgFz8G3iV5TpVG/BzwFV+PpuKDeiuNlU7UfQWuB5xouO3klqqV3FbK74R7wVPemzeWCW8G5kbHM+Zt2C9gyp264BRxX5tLIVF+ZmtUbcDJ+EorTni7+JL7yVVpUd3AVA111FY2WJM1UvwDddEIfo/ojLgAAAABJRU5ErkJggg==" />
          </button>
        )}
      </div>
      {showMenu ? (
        <motion.div className="header__menuList">
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            // offset={-20}
            duration={1000}
            activeClassName="selected"
            onClick={() => onClickHeaderLink("Home")}
            className={`header__linkMenu ${home ? "selectMenu" : ""}`}
            to="/#"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            // offset={-64}
            duration={1000}
            scroll={(el) => scrollWithOffset(el)}
            activeClassName="selected"
            onClick={() => onClickHeaderLink("About")}
            className={`header__linkMenu ${about ? "selectMenu" : ""}`}
            to="/#about"
          >
            About
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            // offset={-20}
            duration={1000}
            activeClassName="selected"
            scroll={(el) => scrollWithOffset(el)}
            onClick={() => onClickHeaderLink("Skills")}
            className={`header__linkMenu ${skills ? "selectMenu" : ""}`}
            to="/#skills"
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            // offset={-20}
            duration={1000}
            activeClassName="selected"
            scroll={(el) => scrollWithOffset(el)}
            onClick={() => onClickHeaderLink("Projects")}
            className={`header__linkMenu ${projects ? "selectMenu" : ""}`}
            to="/#projects"
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            // offset={-20}
            duration={1000}
            activeClassName="selected"
            scroll={(el) => scrollWithOffset(el)}
            onClick={() => onClickHeaderLink("Contact")}
            className={`header__linkMenu ${contact ? "selectMenu" : ""}`}
            to="/#contact"
          >
            Contact
          </Link>
        </motion.div>
      ) : null}

      {/* <div className="header__mode">
        <p style={{ color: mode ? "#fff" : "#0e2431" }} onClick={toggleMode}>
          {mode ? "Light" : "Dark"}
        </p>

        <div className="header__darkMode">
          <input
            type="checkbox"
            name=""
            defaultChecked={mode}
            onChange={toggleMode}
          />
        </div>
      </div> */}
    </div>
  );
}

export default Header;
