import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Footers from '../layouts/Footers';
import Services from '../components/Services';
import Education from '../components/home/Education';


const Home = () => {
    return (
        <div>
          <About/>
          <Projects/>
          <Services/>
          <Contact/>
          <Education/>
        <Footers/>
        </div>
    );
};

export default Home;
