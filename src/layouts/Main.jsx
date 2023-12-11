
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

import NavBar from './NavBar';
// import Projects from '../components/Projects';
// import About from '../components/About';

const Main = () => {
    return (
        <>
            <NavBar />
            <Header />
            {/* <Projects/> */}
            {/* <About/> */}
            <Outlet />
          
        </>
    );
};

export default Main;
