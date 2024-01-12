import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '../images/gamebuddy.jpg';
import img2 from '../images/swiftshop.jpg';
import img3 from '../images/hoobank.jpg';
import img4 from '../images/cp-dashboard.jpg';
import img5 from '../images/capitalplacement.jpg';

const Projects = () => {
    return (
        <div id="Projects" className="photos-container">
            <div className="container">
                <h1 className="sub-title">Projects</h1>
                <div className='container section_border '>
                    <div className='projects_container'>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={2}
                            hashNavigation={{
                                watchState: true,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            breakpoints={{
                                200: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Pagination, Navigation, HashNavigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide data-hash="slide1">
                                <div className='projects_content'>
                                    <img src={img1} alt='Gamebuddy' />

                                    <div>
                                        <span className='projects_subtitle'>GameBuddy</span>
                                        <h1 className='projects_title'>A Simple Ecommerce Website Built Using Next.js, React and Tailwind CSS</h1>

                                        <a href='https://gamebuddy.vercel.app/' className='projects_button' target='_blank' rel='noopener noreferrer'>
                                            View Demo <FontAwesomeIcon className='fas' icon={faArrowRight} />
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide data-hash="slide2">
                                <div className='projects_content'>
                                    <img src={img3} alt='Hoobank' />

                                    <div>
                                        <span className='projects_subtitle'>HooBank</span>
                                        <h1 className='projects_title'>A Website Built Using React.js, Vite and Tailwind CSS modeled from JavaScript Mastery with my additions and improvements</h1>

                                        <a href='https://hoobank-brown-nine.vercel.app/' className='projects_button' target='_blank' rel='noopener noreferrer'>
                                            View Demo <FontAwesomeIcon className='fas' icon={faArrowRight} />
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide data-hash="slide3">
                                <div className='projects_content'>
                                    <img src={img2} alt='SwiftShop' />

                                    <div>
                                        <span className='projects_subtitle'>SwiftShop</span>
                                        <h1 className='projects_title'>A Simple Ecommerce Website Built Using Reactjs</h1>

                                        <a href='https://swiftshop-henna.vercel.app/' className='projects_button' target='_blank' rel='noopener noreferrer'>
                                            View Demo <FontAwesomeIcon className='fas' icon={faArrowRight} />
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide data-hash="slide3">
                                <div className='projects_content'>
                                    <img src={img4} alt='SwiftShop' />

                                    <div>
                                        <span className='projects_subtitle'>London Internship Programme</span>
                                        <h1 className='projects_title'>A Dashboard For An Internship Programme Built Using Reactjs</h1>

                                        <a href='https://cp-dashboard.vercel.app/' className='projects_button' target='_blank' rel='noopener noreferrer'>
                                            View Demo <FontAwesomeIcon className='fas' icon={faArrowRight} />
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide data-hash="slide3">
                                <div className='projects_content'>
                                    <img src={img5} alt='capital-placement' />

                                    <div>
                                        <span className='projects_subtitle'>Capital Placement</span>
                                        <h1 className='projects_title'>An Application Form/Questionnaire Built Using Reactjs</h1>

                                        <a href='https://capital-placement-psi.vercel.app/' className='projects_button' target='_blank' rel='noopener noreferrer'>
                                            View Demo <FontAwesomeIcon className='fas' icon={faArrowRight} />
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
