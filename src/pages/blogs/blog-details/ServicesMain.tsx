import blogImg from '../../../../public/assets/img/blog/blog-details/blog-details-1.jpg';
import authorImg from '../../../../public/assets/img/blog/blog-standard/blog-av-2.jpg';
import blogSmall from '../../../../public/assets/img/blog/blog-details/blog-details-sm-1.jpg';
import blogSmall2 from '../../../../public/assets/img/blog/blog-details/blog-details-sm-2.jpg';
import CursorAndBackgroundProvider from '@/components/provider/CustomCursorProvider';
import BlogStandardBreadcrumb from '@/components/breadcurmb/BlogStandardBreadCrumb';
import ScrollSmoothProvider from '@/components/provider/ScrollSmoothProvider';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import PostboxDetailsForm from '@/components/forms/PostboxDetailsForm';
import CreativeStudioFooter from '@/layouts/footers/CreativeStudioFooter';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import { EditIcon } from '@/svg/CategoriesIcons';
import { CommentIcon } from '@/svg/ContactIcons';
import ClockIcon from '@/svg/ClockIcon';
import Image from 'next/image';
import Link from 'next/link';

const ServicesMain = () => {
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
                                <BlogStandardBreadcrumb title='Services' subTitle='Services' />

                                <section id="postbox" className="postbox-area pt-110 pb-80">
                                    <div className="container container-1330">
                                        <div className="row">
                                            <div className="col-xxl-8 col-xl-8 col-lg-8">
                                                <div className="postbox-wrapper mb-115">
                                                    <article className="postbox-details-item item-border mb-20">
                                                        <div className="postbox-details-info-wrap">
                                                            <div className="postbox-tag postbox-details-tag">
                                                                <span>
                                                                    <i><EditIcon /></i>{" "}
                                                                    Ceiling Solutions
                                                                </span>
                                                                <span>5 min read</span>
                                                            </div>
                                                            <h4 className="postbox-title fs-54">Excellence in Interior Fit-Out Execution</h4>
                                                            <div className="postbox-details-meta d-flex align-items-center">
                                                                <div className="postbox-author-box d-flex align-items-center ">
                                                                    <div className="postbox-author-img">
                                                                        <Image style={{ width: "100%", height: "auto" }} className="w-100" src={authorImg} alt="Author image" />
                                                                    </div>
                                                                    <div className="postbox-author-info">
                                                                        <h4 className="postbox-author-name">Skyline Décor</h4>
                                                                    </div>
                                                                </div>
                                                                <div className="postbox-meta">
                                                                    <i><ClockIcon /></i>{" "}
                                                                    <span>December 22, 2025</span>
                                                                </div>
                                                                <div className="postbox-meta">
                                                                    <i><CommentIcon /></i>
                                                                    <span>0 comments</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                    <div className="postbox-details-thumb mb-45">
                                                        <Image style={{ width: "100%", height: "auto" }} className="w-100" src={blogImg} alt="blog image" />
                                                    </div>
                                                    <div className="postbox-details-text mb-45">
                                                        <p className="mb-25">
                                                            At Skyline Décor, we specialize in delivering high-performance ceiling systems and interior solutions designed to meet modern architectural, functional, and aesthetic requirements. With decades of industry experience, our team ensures every installation meets the highest standards of quality, safety, and durability.
                                                        </p>
                                                    </div>

                                                    {/* Gallery */}
                                                    <div className="postbox-details-text mb-45">
                                                        <h4 className="postbox-title fs-34">Gallery</h4>
                                                        <div className="row">
                                                            <div className="col-md-6 mb-30">
                                                                <Image style={{ width: "100%", height: "auto" }} src={blogSmall} alt="Ceiling Installation – Commercial Office" />
                                                                <p>Ceiling Installation – Commercial Office</p>
                                                            </div>
                                                            <div className="col-md-6 mb-30">
                                                                <Image style={{ width: "100%", height: "auto" }} src={blogSmall2} alt="Acoustic Ceiling – Hospitality Project" />
                                                                <p>Acoustic Ceiling – Hospitality Project</p>
                                                            </div>
                                                            <div className="col-md-6 mb-30">
                                                                <Image style={{ width: "100%", height: "auto" }} src={blogImg} alt="Metal & Wooden Ceiling Systems" />
                                                                <p>Metal & Wooden Ceiling Systems</p>
                                                            </div>
                                                            <div className="col-md-6 mb-30">
                                                                <Image style={{ width: "100%", height: "auto" }} src={authorImg} alt="External Ceiling Works" />
                                                                <p>External Ceiling Works</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Service Overview */}
                                                    <div className="postbox-details-text mb-45">
                                                        <h4 className="postbox-title fs-34">Service Overview</h4>
                                                        <p>We transform interior spaces through innovative ceiling, partition, and cladding solutions. Our expertise covers commercial offices, hotels, hospitals, airports, retail outlets, and residential developments across the UAE.</p>
                                                        <p>Our solutions are engineered for:</p>
                                                        <ul>
                                                            <li>Architectural aesthetics</li>
                                                            <li>Acoustic performance</li>
                                                            <li>Fire and safety compliance</li>
                                                            <li>Long-term durability</li>
                                                            <li>Seamless integration with MEP systems</li>
                                                        </ul>
                                                    </div>

                                                    {/* Our Ceiling Solutions */}
                                                    <div className="postbox-details-text mb-45">
                                                        <h4 className="postbox-title fs-34">Our Ceiling Solutions</h4>
                                                        <p>We offer a comprehensive range of ceiling systems tailored to project requirements:</p>
                                                        <ul>
                                                            <li>Gypsum Ceilings – Standard, decorative, and custom designs</li>
                                                            <li>Acoustic Ceilings – Sound-absorbing solutions for noise control</li>
                                                            <li>Mineral Fiber Ceilings – Thermal and acoustic insulation systems</li>
                                                            <li>Grid Ceilings – Modular ceilings for commercial environments</li>
                                                            <li>Wooden Ceilings – Natural finishes for premium interiors</li>
                                                            <li>Metal Ceilings – Aluminum and steel ceiling solutions</li>
                                                            <li>Baffle Ceilings – Contemporary open ceiling designs</li>
                                                            <li>Stretch Fabric Ceilings – Innovative and customizable systems</li>
                                                            <li>External Ceilings – Weather-resistant outdoor ceiling applications</li>
                                                        </ul>
                                                    </div>

                                                    {/* Why Choose Skyline Décor */}
                                                    <div className="postbox-details-text mb-45">
                                                        <h4 className="postbox-title fs-34">Why Choose Skyline Décor</h4>
                                                        <blockquote>
                                                            <p>"Quality is never an accident; it is always the result of skilled execution and professional commitment."</p>
                                                        </blockquote>
                                                        <ul>
                                                            <li>Over 25 years of industry expertise</li>
                                                            <li>Skilled in-house workforce</li>
                                                            <li>Strict adherence to safety and quality standards</li>
                                                            <li>Proven experience in large-scale commercial projects</li>
                                                            <li>Timely delivery with transparent coordination</li>
                                                        </ul>
                                                    </div>

                                                    {/* Project Execution Approach */}
                                                    <div className="postbox-details-text mb-45">
                                                        <h4 className="postbox-title fs-34">Project Execution Approach</h4>
                                                        <p>Our service delivery process ensures efficiency and precision:</p>
                                                        <ul>
                                                            <li>Requirement Analysis – Understanding project scope and specifications</li>
                                                            <li>Design Coordination – Aligning with architects and consultants</li>
                                                            <li>Material Selection – High-quality certified materials</li>
                                                            <li>Installation & Execution – Skilled workmanship on-site</li>
                                                            <li>Inspection & Handover – Final quality checks and client approval</li>
                                                        </ul>
                                                    </div>

                                                    {/* Service Tags */}
                                                    <div className="postbox-details-text mb-45">
                                                        <h4 className="postbox-title fs-34">Service Tags</h4>
                                                        <div className="postbox-tag">
                                                            <span>Ceiling Solutions</span>
                                                            <span>Interior Fit-Out</span>
                                                            <span>Acoustic Systems</span>
                                                            <span>Gypsum Works</span>
                                                            <span>Commercial Interiors</span>
                                                            <span>UAE Fit-Out Contractor</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Sidebar */}
                                            <div className="col-xxl-4 col-xl-4 col-lg-4">
                                                <div className="sidebar-wrapper">
                                                    <div className="sidebar-widget mb-30">
                                                        <h3 className="sidebar-widget-title">Service Information</h3>
                                                        <div className="sidebar-service-info">
                                                            <p>📞 +971 XX XXX XXXX</p>
                                                            <p>📧 skylinedecor@namariqgroup.com</p>
                                                            <p>📍 Dubai | Abu Dhabi | Sharjah</p>
                                                        </div>
                                                    </div>
                                                    <div className="sidebar-widget mb-55">
                                                        <h3 className="sidebar-widget-title">Other Services</h3>
                                                        <ul>
                                                            <li><Link href="#">Partitioning Solutions</Link></li>
                                                            <li><Link href="#">Cladding & Insulation</Link></li>
                                                            <li><Link href="#">Turnkey Interior Fit-Out</Link></li>
                                                            <li><Link href="#">Refurbishment & Interior Works</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="sidebar-widget mb-55">
                                                        <h3 className="sidebar-widget-title">Recent Projects</h3>
                                                        <ul>
                                                            <li><Link href="#">Airport Terminal Ceiling Works</Link></li>
                                                            <li><Link href="#">Hospitality Acoustic Ceiling Installation</Link></li>
                                                            <li><Link href="#">Corporate Office Fit-Out</Link></li>
                                                            <li><Link href="#">Retail Interior Refurbishment</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="sidebar-widget mb-55">
                                                        <h3 className="sidebar-widget-title">Industries We Serve</h3>
                                                        <ul>
                                                            <li>Hospitality</li>
                                                            <li>Healthcare</li>
                                                            <li>Corporate Offices</li>
                                                            <li>Retail & Commercial</li>
                                                            <li>Residential Developments</li>
                                                        </ul>
                                                    </div>
                                                    <div className="sidebar-widget mb-55">
                                                        <h3 className="sidebar-widget-title">Next Service</h3>
                                                        <div className="next-service">
                                                            <h4>Partitioning Solutions</h4>
                                                            <p>Optimized space planning with fire-rated and acoustic partition systems.</p>
                                                            <Link href="#" className="tp-btn-black">Read More</Link>
                                                        </div>
                                                    </div>
                                                    <div className="sidebar-widget">
                                                        <h3 className="sidebar-widget-title">Client Feedback</h3>
                                                        <p>Skyline Décor delivered our project with exceptional attention to detail and professionalism. Their ceiling systems exceeded both aesthetic and performance expectations.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Request a Consultation Form */}
                                    <div className="container container-1330">
                                        <div className="row">
                                            <div className="col-xl-8">
                                                <div className="postbox-details-form">
                                                    <h3 className="postbox-details-form-title">Request a Consultation</h3>
                                                    <p>Your email address will not be published. Required fields are marked*</p>
                                                    <div className="postbox-details-form-wrapper">
                                                        <PostboxDetailsForm />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Let’s Build Exceptional Spaces */}
                                    <div className="container container-1330 mt-50">
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <div className="postbox-details-text text-center">
                                                    <h4 className="postbox-title fs-34">Let’s Build Exceptional Spaces</h4>
                                                    <p>From concept to completion, Skyline Décor delivers interior solutions that combine technical expertise with refined craftsmanship.</p>
                                                    <p>Create. Design. Inspire.</p>
                                                </div>
                                            </div>
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

export default ServicesMain;