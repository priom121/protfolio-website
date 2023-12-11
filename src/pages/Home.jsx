import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Footers from '../layouts/Footers';


const Home = () => {
    return (
        <div>
          <About/>
          <Projects/>
          <Contact/>
        <Footers/>
        </div>
    );
};

export default Home;
