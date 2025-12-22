
"use client"

// Import Swiper components and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

interface BrandItem {
    id: number;
    title: string;
}

const ArchitectureHubBrand = () => {
const brandItems: BrandItem[] = [
    { id: 1, title: 'Interior Fit-Out' },
    { id: 2, title: 'Ceiling Systems' },
    { id: 3, title: 'Partition Solutions' },
    { id: 4, title: 'Acoustic Works' },
    { id: 5, title: 'Cladding Systems' },
    { id: 6, title: 'Turnkey Projects' },
    { id: 7, title: 'Project Management' },
    { id: 8, title: 'Commercial Interiors' },
    { id: 9, title: 'Hospitality Fit-Out' },
    { id: 10, title: 'Office Interiors' },
    { id: 11, title: 'Renovation Works' },
    { id: 12, title: 'Quality Execution' },
    { id: 13, title: 'Trusted Expertise' }
];


    return (
        <div className="ar-brand-area ar-brand-style">
            <div className="tp-brand-wrapper red-bg z-index-1">
                <div className="swiper-container tp-brand-active">
                    <div className="swiper-wrapper slide-transtion">
                        <Swiper
                            modules={[Autoplay, FreeMode]}
                            loop={true}
                            freeMode={true}
                            slidesPerView='auto'
                            spaceBetween={30}
                            centeredSlides={true}
                            allowTouchMove={false}
                            speed={12000}
                            autoplay={{
                                delay: 1,
                                disableOnInteraction: true,
                            }}
                        >
                            {brandItems.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="tp-brand-item">
                                        <span className="tp-brand-title">{item.title}</span>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ArchitectureHubBrand;