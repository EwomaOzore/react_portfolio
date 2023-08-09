import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import img from '../images/virtual-reality.png';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div id="header" className="header-container">
            <div className="container">
                <nav>
                    <h1>Ewoma</h1>
                    <FontAwesomeIcon
                        className={`mobile-menu-icon ${mobileMenuOpen ? 'active' : ''}`}
                        icon={mobileMenuOpen ? faTimes : faBars}
                        onClick={handleMobileMenuToggle}
                    />
                    <ul className={`nav-list ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                        <li><a href="#header">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#certifications">Certifications</a></li>
                        <li><a href="#Projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <div className={`mobile-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={handleMobileMenuToggle}></div>
                </nav>
                <div className="container1">
                    <div className="header-text">
                        <h1>Hello, I'm <span className="name">Ewoma Ozore</span></h1>
                        <br />
                        <h3>An Aspiring Software Developer</h3>
                        <br />
                        <a href="/Ewoma Ozore's CV.pdf" download className="btn">Download CV</a>
                        <div className='ficons'>
                            <a href='https://www.linkedin.com/in/ewomaozore/' target='_blank' rel='noopener noreferrer'>
                                <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{ color: "#d8b6a4", }} />
                            </a>
                            <a href='https://github.com/EwomaOzore' target='_blank' rel='noopener noreferrer'>
                                <FontAwesomeIcon icon={faGithub} size="2xl" style={{ color: "#d8b6a4", }} />
                            </a>
                        </div>
                    </div>
                    <div className='bcimage'>
                        <img src={img} alt='Ewoma' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
