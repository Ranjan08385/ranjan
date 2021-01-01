import React, {useState} from "react";
import "./App.css";
import Header from './pages/header/Header';
import Home from './pages/home/Home'
import About from './pages/about/About'
import Skills from './pages/skills/Skills'
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact'
import Footer from './pages/footer/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PerfectScrollbar from 'react-perfect-scrollbar';
import { NavHashLink as NavLink } from 'react-router-hash-link';

function App() {
  const [mode, setMode] = useState(false);
  const [showMenu, setMenu] = useState(false);

  const toggleModes = () => {
    setMode(!mode);
  }

  const toggleMenu = () => {
    setMenu(!showMenu)
  }


  return (
    <Router>
      <div style={{ backgroundColor: mode ? '#000' : '#fff', width: '100%', height: '100%' }}>
        <Header mode={mode} toggleMode={() => toggleModes()} toggleMenu={() => toggleMenu()} showMenu={showMenu} />
        <div style={{ opacity: showMenu ? 0.5 : 1 }}>
            <NavLink smooth activeClassName="active" to='/ranjan' exact component={Home} />
            <NavLink smooth activeClassName="active" to='/about' component={About} />         
            <NavLink smooth activeClassName="active" to='/skills' component={Skills} />           
            <NavLink smooth activeClassName="active" to='/projects' component={Projects} />         
            <NavLink smooth activeClassName="active" to='/contact' component={Contact} /> 
            <Footer />
        </div>
            
      </div>
    </Router>
    );
}

export default App;
