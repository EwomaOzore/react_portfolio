import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Swiper } from 'swiper/react';
import './App.css';



const App = () => {
    return (
        <div>
            <Header />
            <About />
            <Certifications />
            <Projects />
            <Contact />
            <Footer />
            <Swiper />
        </div>
    );
};

export default App;
