import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import img from '../images/ewoma.jpg';

const Header = () => {
    return (
        <div id="header" className="header-container">
            <div className="container">
                <div className="container1">
                    <div className="header-text">
                        <h1>Hello, I'm <span className="name">Ewoma Ozore</span></h1>
                        <br />
                        <h3>An Aspiring Software Developer</h3>
                        <br />
                        <a href="/Ewoma Ozore's Curriculum Vitae.pdf" download className="btn">Download CV</a>
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
