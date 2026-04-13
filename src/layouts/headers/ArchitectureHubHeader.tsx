"use client"
import MobileMenus from '@/layouts/subComponents/MobileMenus';
import logoBlack from "../../../public/assets/img/logo/logo-black.png";
import MobileOffcanvas from '@/components/offcanvas/MobileOffcanvas';
import { ArrowThree, MenubarIcon } from '@/svg';
import useStickyHeader from '@/hooks/useStickyHeader';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ArchitectureHubHeader = () => {
    const [openOffCanvas, setOpenOffCanvas] = useState(false);
    const isSticky = useStickyHeader(20);

    return (
        <>
            <header>
                {/* -- header area start -- */}
                <div className={`tp-header-8-area header-transparent tp-header-8-border ${isSticky ? 'header-sticky' : ''}`} style={{ backgroundColor: "#f2f1ee" }}>
                    <div className="container container-1750">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="tp-header-8-wrapper d-flex align-items-center justify-content-between">
                                    <div className="tp-header-8-left d-flex align-items-center">
                                        <div className="tp-header-8-bar-wrap">
                                            <button onClick={() => setOpenOffCanvas(true)} className="tp-header-8-bar tp-offcanvas-open-btn">
                                                <span>Menu</span>
                                                <span><MenubarIcon /></span>
                                            </button>
                                        </div>
                                        <div className="tp-header-8-lang d-none d-md-block">
                                            <Link href="#">EN</Link>
                                            <Link href="#">AR</Link>
                                        </div>
                                    </div>
                                    <div className="tp-header-8-middle">
                                        <div className="tp-header-logo">
                                            <Link href="/">
                                                <Image style={{ width: "100%", height: "auto" }} width={120} src={logoBlack} alt="logo" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="tp-header-8-right d-flex align-items-center d-none d-md-inline-flex">
                                        <div className="tp-header-8-btn">
                                            <Link className="tp-btn-border-2" href="/contact">
                                                Contact Us
                                                {" "}<span><ArrowThree /></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="tp-mobile-menu-active d-none">
                    <ul>
                        <MobileMenus />
                    </ul>
                </nav>
                {/* -- header area end -- */}
            </header>

            {/* off canvas */}
            <MobileOffcanvas openOffcanvas={openOffCanvas} setOpenOffcanvas={setOpenOffCanvas} />
            {/* off canvas */}
        </>
    );
};

export default ArchitectureHubHeader;