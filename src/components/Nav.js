import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


const Nav = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div className='border-box'>
            <nav>
                <h1 className='logo'>Ewoma</h1>
                <FontAwesomeIcon
                    className={`mobile-menu-icon ${mobileMenuOpen ? 'active' : ''}`}
                    icon={mobileMenuOpen ? faTimes : faBars}
                    onClick={handleMobileMenuToggle}
                />
                <ul className={`nav-list ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                    <li><a href="#header">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className={`mobile-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={handleMobileMenuToggle}></div>
            </nav>
        </div>
    );
};

export default Nav