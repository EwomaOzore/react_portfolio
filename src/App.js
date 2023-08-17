import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Swiper } from 'swiper/react';
import './App.css';

const App = () => {
    return (
        <div>
            <Nav />
            <Header />
            <About />
            <Education />
            <Projects />
            <Contact />
            <Footer />
            <Swiper />
        </div>
    );
};

export default App;
