import shapeCircle from '../../../public/assets/img/home-09/hero/funfact-circle-shape-2.png';
import bgShape from '../../../public/assets/img/home-09/hero/funfact-bg-shape-2.png';
import { EmailIcon, MessageIcon, PhoneIcon } from '@/svg/ContactIcons';
import teamBg from '../../../public/assets/img/team/team-bg.png';
import { CareerShape } from '@/svg/HeroShape';
import { ArrowTwenty } from '@/svg/ArrowIcons';
import Image from 'next/image';
import Link from 'next/link';

const ContactHero = () => {
    return (
        <div className="tp-contact-main-ptb p-relative" style={{ backgroundImage: `url(${teamBg.src})` }}>
            <div className="tp-career-shape-1">
                <span><CareerShape /></span>
            </div>
            <div className="container container-1230">
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <div className="ar-hero-title-box tp_fade_anim" data-delay=".3">
                            <div className="ar-about-us-4-title-box d-flex align-items-center mb-20">
                                <span className="tp-section-subtitle pre tp_fade_anim">Contact Us</span>
                                <div className="ar-about-us-4-icon">
                                    <ArrowTwenty />
                                </div>
                            </div>
                            <h3 className="tp-career-title fs-100 pb-30">Any questions? <br />
                                simply ask us!</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tp-contact-main-bottom">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7"></div>

                        <div className="col-xl-4 col-lg-5">
                            <div className="tp-contact-main-funfact-wrap">
                                <div className="crp-hero-funfact-wrap crp-hero-funfact-bg z-index-1 p-relative tp_fade_anim ar-about-funfact-color" data-delay=".5"
                                    style={{ backgroundImage: `url(${bgShape.src})`, minWidth: '280px' }}>
                                    <div className="crp-hero-funfact-line d-none d-xl-inline-block"></div>
                                    <div className="crp-hero-funfact-img">
                                        <Image src={shapeCircle} alt="shape circle" />
                                    </div>
                                    <div className="ar-about-funfact-top-content">
                                        <h4>Get <br /> In Touch!</h4>
                                    </div>
                                    <div className="ar-about-funfact-item-box mb-35">
                                        <div className="ar-about-funfact-item d-flex align-items-center">
                                            <div className="ar-about-funfact-item-icon">
                                                <span><PhoneIcon /></span>
                                            </div>
                                            <div className="ar-about-funfact-item-content">
                                                <p> Call Us Directly</p>
                                                <Link className="tp-line-white" href="phn:065328033">+971-6-5328033</Link>
                                            </div>
                                        </div>
                                        <div className="ar-about-funfact-item d-flex align-items-center">
                                            <div className="ar-about-funfact-item-icon">
                                                <span><EmailIcon /></span>  
                                            </div>
                                            <div className="ar-about-funfact-item-content">
                                                <p>Need Support?</p>
                                                <Link className="tp-line-white" href="mailto:skylinedecor@namariqgroup.com" style={{ textTransform: 'lowercase', fontSize: '0.82rem', lineHeight: 1.25, whiteSpace: 'normal', display: 'inline-block' }}>
                                                    skylinedecor@namariqgroup.com
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="ar-about-funfact-item d-flex align-items-center">
                                            <div className="ar-about-funfact-item-icon">
                                                <span><MessageIcon /></span>
                                            </div>
                                            <div className="ar-about-funfact-item-content">
                                                <p>Chat with Us</p>
                                                <Link className="tp-line-white" href="phn:0506320879">+971-50-632-0879</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ar-about-funfact-item-bottom" style={{ borderBottom: '2px solid rgba(255,255,255,0.1)', paddingBottom: '15px', marginBottom: '15px' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactHero;