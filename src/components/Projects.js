import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '../images/project1.jpg';
import img2 from '../images/project2.jpg';
import img3 from '../images/project3.jpg';

const Projects = () => {
    return (
        <div id="Projects" className="photos-container">
            <div className="container">
                <h1 className="sub-title">Projects</h1>
                <div className='container section_border '>
                    <div className='projects_container'>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={3}
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
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Pagination, Navigation, HashNavigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide data-hash="slide1">
                                <div className='projects_content'>
                                    <img src={img1} alt='Project 1' />

                                    <div>
                                        <span className='projects_subtitle'>Gamebuddy Ecommerce</span>
                                        <h1 className='projects_title'>A Simple Ecommerce Website Built Using Next.js, React and Tailwind CSS</h1>

                                        <a href='#' className='projects_button'>
                                            View Demo <FontAwesomeIcon className='fas' icon={faArrowRight} />
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide data-hash="slide2">
                                <div className='projects_content'>
                                    <img src={img2} alt='Project 1' />

                                    <div>
                                        <span className='projects_subtitle'>Web</span>
                                        <h1 className='projects_title'>Modern Website</h1>

                                        <a href='#' className='projects_button'>
                                            View Demo <FontAwesomeIcon className='fas' icon={faArrowRight} />
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide data-hash="slide3">
                                <div className='projects_content'>
                                    <img src={img3} alt='Project 1' />

                                    <div>
                                        <span className='projects_subtitle'>Web</span>
                                        <h1 className='projects_title'>Modern Website</h1>

                                        <a href='#' className='projects_button'>
                                            View Demo <FontAwesomeIcon className='fas' icon={faArrowRight} />
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide data-hash="slide4">
                                <div className='projects_content'>
                                    <img src={img3} alt='Project 1' />

                                    <div>
                                        <span className='projects_subtitle'>Web</span>
                                        <h1 className='projects_title'>Modern Website</h1>

                                        <a href='#' className='projects_button'>
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
