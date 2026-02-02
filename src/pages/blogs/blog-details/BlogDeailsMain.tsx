import blogImg from '../../../../public/assets/img/blog/blog-details/blog-details-1.jpg';
import authorImg2 from '../../../../public/assets/img/blog/blog-standard/blog-av-1.png';
import blogSmall from '../../../../public/assets/img/blog/blog-details/blog-details-sm-1.jpg';
import blogSmall2 from '../../../../public/assets/img/blog/blog-details/blog-details-sm-2.jpg';
import CursorAndBackgroundProvider from '@/components/provider/CustomCursorProvider';
import BlogStandardBreadcrumb from '@/components/breadcurmb/BlogStandardBreadCrumb';
import ScrollSmoothProvider from '@/components/provider/ScrollSmoothProvider';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import BlogSidebarAuthorInfo from '@/components/blog/BlogSidebarAuthorInfo';
import { DribbleTwo, FacebookTwo, InstagramSvg, QuoteIconSix } from '@/svg';
import CreativeStudioFooter from '@/layouts/footers/CreativeStudioFooter';
import PostboxDetailsThumb from '@/components/blog/PostboxDetailsThumb';
import { TwitterFour, TwitterSvg } from '@/svg/social-icons/Twitter';
import BlogSidebarPost from '@/components/blog/BlogSidebarPost';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import { InstagramFive } from '@/svg/social-icons/Instagram';
import { DribbleThree } from '@/svg/social-icons/Dribbble';
import { FacebookFour } from '@/svg/social-icons/Facebook';
import Image from 'next/image';
import Link from 'next/link';

const BlogDeailsMain = () => {
    return (
        <ScrollSmoothProvider>
            <CursorAndBackgroundProvider>
                <AnimationWrapper>
                    <div id="magic-cursor" className="cursor-white-bg">
                        <div id="ball"></div>
                    </div>

                    {/* Global Components */}
                    <BackToTop />
                    <InnerPageHeader />

                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            {/* Main Content Sections */}
                            <main>
                                <BlogStandardBreadcrumb title='Our Services' subTitle='Our Services' />

                                <section id="postbox" className="postbox-area pt-110 pb-80">
                                    <div className="container container-1330">
                                        <div className="row">
                                            <div className="col-xxl-8 col-xl-8 col-lg-8">
                                                <div className="postbox-wrapper mb-115">
                                                    <article className="postbox-details-item item-border mb-20">
                                                        <div className="postbox-details-info-wrap"> 
                                                            <h4 className="postbox-title">Comprehensive Interior Fit-Out Solutions</h4>
                                                        </div>
                                                    </article>
                                                    <div className="postbox-details-thumb mb-45">
                                                        <Image style={{ width: "100%", height: "auto" }} className="w-100" src={blogImg} alt="blog image" />
                                                    </div>
                                                    <div className="postbox-details-text mb-45">
                                                        <p className="mb-25">
                                                           Skyline Décor delivers end-to-end interior solutions tailored for commercial, hospitality, healthcare, retail, and residential environments. With decades of experience and an in-house execution team, we ensure precision, durability, and timely project delivery across every service we offer.
                                                        </p>
                                                    </div>
                                                    <div className="postbox-details-text mb-40">
                                                        <h4>Acoustic Ceiling Solutions</h4>
                                                        <p>We provide advanced ceiling systems designed for aesthetics, performance, and compliance with modern architectural standards.</p> 
                                                        <ul> 
                                                            <li>Gypsum Ceilings (standard, decorative & custom)</li> 
                                                            <li>Acoustic Ceilings for sound control</li> 
                                                            <li>Mineral Fiber Ceilings for thermal & acoustic insulation</li> 
                                                            <li>Grid Ceiling Systems for commercial spaces</li> 
                                                            <li>Wooden Ceiling Panels for premium interiors</li> 
                                                            <li>Metal Ceiling Systems (aluminum & steel)</li> 
                                                            <li>Baffle Ceilings for modern open designs</li> 
                                                            <li>Stretch Fabric Ceilings</li> 
                                                            <li>External & Weather-Resistant Ceilings</li> 
                                                        </ul>
                                                    </div>
                                                    <div className="postbox-details-thumb d-flex align-items-center mb-50">
                                                        <div>
                                                            <Image style={{ width: "100%", height: "auto" }} src={blogSmall} alt="blog small" />
                                                        </div>
                                                        <div>
                                                            <Image style={{ width: "100%", height: "auto" }} src={blogSmall2} alt="blog small" />
                                                        </div>
                                                    </div>
                                                    <div className="postbox-details-text mb-40">
                                                        <h4>Walls</h4> 
                                                        <p>Our partition systems enhance space functionality while meeting fire, acoustic, and durability requirements.</p> 
                                                        <ul> 
                                                            <li>Drywall Partition Systems</li> 
                                                            <li>Fire-Rated Partitions (certified)</li> 
                                                            <li>Acoustic & Soundproof Partitions</li> 
                                                            <li>Wall Lining Systems</li> 
                                                            <li>Cement Board Partitions</li> 
                                                        </ul> 
                                                        <br/>
                                                        <h4>EIFS Sysytem and Soffit Insulation</h4> 
                                                        <p>We deliver high-performance wall cladding and insulation solutions that improve energy efficiency and interior comfort.</p> 
                                                        <ul> 
                                                            <li>EIFS (External Insulation & Finishing System)</li> 
                                                            <li>Cement Board Cladding</li> 
                                                            <li>Thermal Insulation Systems</li> 
                                                            <li>Acoustic Wall Panels</li> 
                                                            <li>Interior & Exterior Wall Finishes</li> 
                                                        </ul> 
                                                        <br/>
                                                        <h4>Turnkey Interior Fit-Out</h4> 
                                                        <p>From planning to final handover, we manage the entire fit-out process with a single point of responsibility.</p> 
                                                        <ul> 
                                                            <li>Design Coordination & Planning</li> 
                                                            <li>Material Procurement</li> 
                                                            <li>Ceiling, Partition & Cladding Execution</li> 
                                                            <li>MEP Coordination</li> 
                                                            <li>Project Management & Handover</li> 
                                                        </ul> 
                                                        <br/>
                                                        <h4>Refurbishment & Interior Works</h4> 
                                                        <p>We upgrade and transform existing spaces with minimal disruption and maximum efficiency.</p> 
                                                        <ul> 
                                                            <li>Commercial Renovations</li> 
                                                            <li>Hospitality Refurbishment</li> 
                                                            <li>Retail & Office Remodeling</li> 
                                                            <li>Interior Upgrades & Space Optimization</li> 
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4 col-xl-4 col-lg-4">
                                                <div className="sidebar-wrapper">
                                                    <div className="sidebar-widget mb-55">
                                                        <BlogSidebarAuthorInfo />
                                                    </div>
                                                    <div className="sidebar-widget mb-55">
                                                        <h3 className="sidebar-widget-title">Latest Posts</h3>
                                                        <BlogSidebarPost />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container container-1750">
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <PostboxDetailsThumb />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container container-1330">
                                        <div className="row">
                                            
                                        </div>
                                    </div>
                                </section>
                            </main>
                            <CreativeStudioFooter buttonCls="blog-footer-style" />
                        </div>
                    </div>
                </AnimationWrapper>
            </CursorAndBackgroundProvider>
        </ScrollSmoothProvider>
    );
};

export default BlogDeailsMain;