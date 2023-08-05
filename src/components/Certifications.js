import React from 'react';

const Certifications = () => {
    return (
        <div id="certifications" className="certifications-container">
            <div className="container">
                <h1 className="sub-title">Certifications</h1>
                <div className="certificate-list">
                    <h3>Coursera Course Certificates:</h3>
                    <ul>
                        <li>Electric Power Systems</li>
                        <li>Fundamentals of Network Communication</li>
                        <li>Introduction to Electronics</li>
                        <li>Introduction to the Internet of Things and Embedded Systems</li>
                        <li>Motor and Motor Control Circuits</li>
                        <li>Pressure, Force, Motion, and Humidity Sensors</li>
                        <li>Introduction to FrontEnd</li>
                        <li>HTML and CSS In Depth</li>
                        <li>Programming with Javascript</li>
                        <li>Version Control</li>
                        <li>React Basics</li>
                        <li>Advanced React</li>
                    </ul>
                </div>
                <div className="certificate-list">
                    <h3>Ongoing Certificates</h3>
                    <ul>
                        <li>The Complete 2023 Web Development Bootcamp - Udemy</li>
                        <li>Alx Program - Software Engineering Track</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Certifications;
