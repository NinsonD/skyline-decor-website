import { FacebookTwo, TwitterTwo, DribbleTwo, InstagramTwo } from '@/svg';
import CreativeStudioCopyright from './subComponents/CreativeStudioCopyright';
import Link from 'next/link';

const CreativeStudioFooter = ({ buttonCls = "" }) => {
    return (
        <footer className={`creative-footer-style ${buttonCls} p-relative z-index-1`} style={{ backgroundColor: "#F6F6F9" }}>
            <div className="tp-footer-widget-social">
                <div className="tp_fade_anim" data-delay=".9" data-fade-from="top" data-ease="bounce">
                    <Link href="#">
                        <span><FacebookTwo /></span>
                    </Link>
                </div>
                <div className="tp_fade_anim" data-delay=".7" data-fade-from="top" data-ease="bounce">
                    <Link href="#">
                        <span><TwitterTwo /></span>
                    </Link>
                </div>
                <div className="tp_fade_anim" data-delay=".5" data-fade-from="top" data-ease="bounce">
                    <Link href="#">
                        <span><DribbleTwo /></span>
                    </Link>
                </div>
                <div className="tp_fade_anim" data-delay=".3" data-fade-from="top" data-ease="bounce">
                    <Link href="#">
                        <span><InstagramTwo /></span>
                    </Link>
                </div>
            </div>

            <div className="creative-footer-text d-none d-lg-block">
                <p>Skyline I’ve gone too far, send me back up 👆</p>
            </div>

            {/* -- footer area start -- */}
            <div className="creative-footer-area pt-160 pb-35">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-4 col-lg-4">
                            <div className="tp-footer-widget tp-footer-col-1 pb-40 tp_fade_anim" data-delay=".3">
                                <h4 className="tp-footer-widget-title">Design.<br/>Build.<br/>Perfect.</h4>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-4 col-md-6">
                            <div className="tp-footer-widget tp-footer-col-2 pb-40 tp_fade_anim" data-delay=".5">
                                <h4 className="tp-footer-widget-title-sm pre mb-25">Quick links</h4>
                                <div className="tp-footer-widget-menu">
                                    <ul>
                                        <li><Link href="/about-us-light">About</Link></li>{" "}
                                        <li><Link href="/about-us-light">Who we are</Link></li>{" "}
                                        <li><Link href="/blog-details-light">Services</Link></li>{" "}
                                        <li><Link href="/portfolio-col-3-light">Projects</Link></li>{" "}
                                        <li><Link href="/blog-details-light">Blog</Link></li>{" "}
                                        <li><Link href="/contact">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="tp-footer-widget tp-footer-col-3 pb-40 mb-30 tp_fade_anim" data-delay=".7" data-on-scroll="3">
                                <h4 className="tp-footer-widget-title-sm pre mb-20">Contact</h4>
                                <div className="tp-footer-widget-info">
                                    <Link href="mailto:skylinedecor@namariqgroup.com">skylinedecor@namariqgroup.com</Link>
                                    <Link href="tel:+971-50-6320879">+971-50-6320879</Link>
                                </div>
                                <div className="tp-footer-widget-info">
                                    <Link href="https://www.google.com/maps/" target="_blank">Industrial Area 2, P.O. Box: 25569, <br />
                                        Sharjah, UAE</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CreativeStudioCopyright />
            {/* -- footer area end -- */}
        </footer>
    );
};

export default CreativeStudioFooter;