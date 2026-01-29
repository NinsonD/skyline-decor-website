import HomeFooterCopyright from "./subComponents/HomeFooterCopyright";
import { FooterSocialIcons } from "./subComponents/FooterSocialIcons";
import Link from 'next/link';
import React from 'react';

interface IHomeMainFooter {
    bgColor?: string;
    buttonCls?: string;
    quikLinkCls?:string;
    socialBtnCls?:string
}

const HomeMainFooter:React.FC<IHomeMainFooter> = ({bgColor, buttonCls, quikLinkCls="footer-main", socialBtnCls=""}) => {
    return (
        <>
            <div className={`tp-footer-area ${buttonCls} pb-35 pt-160`} style={{ backgroundColor: bgColor }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-4 col-lg-4">
                            <div className="tp-footer-widget tp-footer-col-1 pb-40 tp_fade_anim" data-delay=".3">
                                <h4 className="tp-footer-widget-title">Design.<br/>Build.<br/>Perfect.</h4>
                                {/* footer social icons */}
                                <FooterSocialIcons className={`tp-footer-widget-social ${socialBtnCls}`} />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-4 col-md-6">
                            <div className={`tp-footer-widget ${quikLinkCls} tp-footer-col-2 pb-40 tp_fade_anim`} data-delay=".5">
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
                            <div className="tp-footer-widget tp-footer-col-3 pb-40 mb-30 tp_fade_anim" data-delay=".7">
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
            {/* footer copyright */}
            <HomeFooterCopyright bgColor={bgColor}/>
        </>
    );
};

export default HomeMainFooter;