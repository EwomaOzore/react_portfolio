import React, { useState } from 'react';
import testSvg1 from '../assets/html-1.svg';
import testSvg2 from '../assets/css-3.svg';
import testSvg3 from '../assets/javascript-1.svg';
import testSvg4 from '../assets/react-2.svg';
import testSvg5 from '../assets/bootstrap-5-1.svg';
import testSvg6 from '../assets/cordova.svg';
import testSvg7 from '../assets/tailwind-css-2.svg';
import testSvg8 from '../assets/next-js.svg';
import testSvg9 from '../assets/typescript.svg';
import testSvg10 from '../assets/git-icon.svg';

const Education = () => {
    const [activeTab, setActiveTab] = useState('Education');

    const opentab = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div id='education'>
            <div className='container'>
                <h1 className="sub-title">Education</h1>
                <div className="about-col-2">
                    <div className="tab-titles">
                        <p className={`tab-links ${activeTab === 'Education' ? 'active-link' : ''}`} onClick={() => opentab('Education')}>Education</p>
                        <p className={`tab-links ${activeTab === 'Skills' ? 'active-link' : ''}`} onClick={() => opentab('Skills')}>Tech Stacks</p>
                        {/* <p className={`tab-links ${activeTab === 'Experience' ? 'active-link' : ''}`} onClick={() => opentab('Experience')}>Experience</p> */}
                    </div>
                    <div className={`tab-contents ${activeTab === 'Education' ? 'active-tab' : ''}`} id="Education">
                        <ul>
                            <li><span>Covenant University, Ogun State, Nigeria</span><br />JULY 2023<br />BSc. Hons Electrical and Electronics Engineering</li>
                        </ul>
                    </div>
                    <div className={`tab-contents ${activeTab === 'Skills' ? 'active-tab' : ''}`} id="Skills">
                        <div className='skills'>
                            <img src={testSvg1} alt="HTML" />
                            <img src={testSvg2} alt="CSS" />
                            <img src={testSvg3} alt="JavaScript" />
                            <img src={testSvg4} alt="React" />
                            <img src={testSvg5} alt="Bootsrap" />
                            <img src={testSvg6} alt="Cordova" />
                            <img src={testSvg7} alt="Tailwind" />
                            <img src={testSvg8} alt="Next" />
                            <img src={testSvg9} alt="TypeScript" />
                            <img src={testSvg10} alt="Git" />
                        </div>
                    </div>
                    {/* <div className={`tab-contents ${activeTab === 'Experience' ? 'active-tab' : ''}`} id="Experience">
                        <ul>
                            <span>INTEGRATED ORANGE, Lagos — Intern</span><br />
                            <li>Managed website content and performed web editing tasks, including uploading blog posts and ensuring proper formatting and structure.</li>
                            <li>Conducted thorough research to gather relevant information for blog post uploads, ensuring accuracy and credibility of content.</li>
                            <li>Contributed to the improvement of website navigation and user interface, enhancing overall user experience.</li>
                            <li>Assisted in the development and implementation of content calendars and editorial schedules.</li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Education