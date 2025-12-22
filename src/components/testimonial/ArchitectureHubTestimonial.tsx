"use client"
import testBgImg from "../../../public/assets/img/home-08/testimonial/test-bg-1.png";
import { TestimonialItem } from '@/types/testimonial-d-t';
import { LeftArrowIcon, RightArrowIcon } from '@/svg';
import Image from 'next/image';

// Import Swiper components and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const ArchitectureHubTestimonial = () => {
    const testimonials: TestimonialItem[] = [
        {
            id: 1,
            content: "Skyline Décor delivered exceptional <br/> quality workmanship, professional execution,<br/> and strict adherence to project timelines making<br/>  them a trusted interior partner"
        },
        {
            id: 2,
            content: "From design coordination to final <br/>handover, the team demonstrated technical expertise, attention to detail, and seamless <br/>interior project execution"
        },
        {
            id: 3,
            content: "Their commitment to quality, safety, <br/>and efficient project management ensured <br/>timely delivery with outstanding finishing <br/>standards throughout"
        }
    ];

    return (
        <div className="ar-testimonial-area pb-200">
            <div className="container container-1330">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="ar-testimonial-slider-wrap p-relative">
                            <div className="ar-testimonial-shape-1">
                                <Image src={testBgImg} alt="testimonial background" />
                            </div>
                            <Swiper
                                className="ar-testimonial-active fix"
                                modules={[Navigation, Pagination, Autoplay]}
                                slidesPerView={1}
                                loop={true}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false
                                }}
                                spaceBetween={0}
                                speed={1000}
                                navigation={{
                                    prevEl: '.ar-testimonial-prev',
                                    nextEl: '.ar-testimonial-next',
                                }}
                                pagination={{
                                    el: '#paginations',
                                    type: 'custom',
                                    renderCustom: function (swiper, current, total) {
                                        const zero = total > 9 ? '' : '0';
                                        const index = zero + current;
                                        const all = zero + total;
                                        return `
                                            <div class="shop-slider-pagination">
                                                <span>${index}</span>
                                                <span>${all}</span>
                                            </div>
                                        `;
                                    }
                                }}
                            >
                                {testimonials.map((testimonial) => (
                                    <SwiperSlide key={testimonial.id}>
                                        <div className="ar-testimonial-item text-center">
                                            <p dangerouslySetInnerHTML={{ __html: testimonial.content }} />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <div className="fraction-wrapper d-none d-lg-block">
                                <div id="paginations"></div>
                                <div className="shop-slider-progress-bar">
                                    <span></span>
                                </div>
                            </div>

                            <div className="ar-testimonial-arrow">
                                <button className="ar-testimonial-prev">
                                    <span><LeftArrowIcon width='14' height='14' /></span>
                                </button>
                                <button className="ar-testimonial-next">
                                    <span><RightArrowIcon width='14' height='14' /></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArchitectureHubTestimonial;