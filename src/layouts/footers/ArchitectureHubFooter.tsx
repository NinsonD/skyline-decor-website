
import ArchitectureHubCopyright from "./subComponents/ArchitectureHubCopyright";
import logoWhite from "../../../public/assets/img/logo/logo-black.png";
import Image from "next/image";
import Link from 'next/link';

const ArchitectureHubFooter = () => {
    return (
        <footer>

            {/* -- footer area start -- */}
            <div className="ar-footer-area pt-115 pb-75" style={{ backgroundColor: "#111214" }}>
                <div className="container container-1430">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-8">
                            <div className="ar-footer-widget ar-footer-col-1 mb-40 tp_fade_anim" data-delay=".3">
                                <div className="ar-footer-logo mb-30">
                                    <Link href="/"><Image width={140} src={logoWhite} alt="logo-white" /></Link>
                                </div>
                                <div className="ar-footer-widget-content">
                                    <p>
                                        Our goal is to exceed expectations <br />
                                        and create spaces that are both beautiful <br />
                                        and practical.
                                    </p>
                                </div>
                                <div className="ar-footer-widget-form">
                                    <div className="ar-footer-widget-input p-relative">
                                        <input type="text" placeholder="Enter your email" />
                                        <span className="ar-footer-widget-envelop">
                                            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16 2.5C16 1.675 15.325 1 14.5 1H2.5C1.675 1 1 1.675 1 2.5M16 2.5V11.5C16 12.325 15.325 13 14.5 13H2.5C1.675 13 1 12.325 1 11.5V2.5M16 2.5L8.5 7.75L1 2.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                        <button className="ar-footer-widget-btn" type="submit">subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4">
                            <div className="ar-footer-widget ar-footer-col-2 mb-40 tp_fade_anim" data-delay=".4">
                                <h4 className="ar-footer-widget-title">Company</h4>
                                <div className="ar-footer-widget-menu">
                                    <ul>
                                        <li><Link href="/about-us-light">About</Link></li>
                                        <li><Link href="/blog-details-light">Service</Link></li>
                                        <li><Link href="/portfolio-col-3-light">Project</Link></li>
                                        <li><Link href="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4">
                            <div className="ar-footer-widget ar-footer-col-3 mb-40 tp_fade_anim" data-delay=".5">
                                <h4 className="ar-footer-widget-title">Services</h4>
                                <div className="ar-footer-widget-menu">
                                    <ul>
                                        <li><Link href="/blog-details-light">Ceiling</Link></li>
                                        <li><Link href="/blog-details-light">Partitioning</Link></li>
                                        <li><Link href="/blog-details-light">Insulation</Link></li>
                                        <li><Link href="/blog-details-light">Turnkey</Link></li>
                                        <li><Link href="/blog-details-light">Interior</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-5">
                            <div className="ar-footer-widget ar-footer-col-4 mb-40 tp_fade_anim" data-delay=".6">
                                <h4 className="ar-footer-widget-title">Inquire</h4>
                                <div className="ar-footer-widget-info-box">
                                    <div className="ar-footer-widget-info mb-20">
                                        <Link className="https://www.google.com/maps" target="_blank" href="#">
                                            Industrial Area 2,<br /> P.O. Box: 25569,
                                        Sharjah, UAE
                                        </Link>
                                    </div>
                                    <div className="ar-footer-widget-info">
                                        <Link className="" target="_blank" href="tel:+971-50-6320879">+971-50-6320879</Link>
                                        <Link className="" target="_blank" href="mailto:skylinedecor@namariqgroup.com">skylinedecor@namariqgroup.com</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ArchitectureHubCopyright />
            {/* -- footer area end -- */}
        </footer>
    );
};

export default ArchitectureHubFooter;