import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import MySkills from '../MySkills/MySkills';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutMe />
            <MySkills />
            <Projects />
            <Contact/>
        </div>
    );
};

export default Home;