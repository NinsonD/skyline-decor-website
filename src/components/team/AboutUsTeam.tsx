"use client"
import noiseBg from '../../../public/assets/img/home-01/testimonial/noise.png';
import AboutUseTeamCard from './subComponents/AboutUseTeamCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import teamMembersData from '@/data/teamData';
import { Autoplay } from 'swiper/modules';

const AboutUsTeam = () => {
    const displayTeamData = teamMembersData.slice(15, 22);

    return (
        <div className="tp-testimonial-area tp-team-bg black-bg-3 p-relative fix" style={{ backgroundImage: `url(${noiseBg.src})` }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <div className="tp-testimonial-title-wrap z-index-3">
                            <div className="tp-testimonial-title-box mb-75 text-center">
                                <h4 className="tp-section-title text-white fs-140">
                                    Notable<br /> Projects
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AboutUsTeam;