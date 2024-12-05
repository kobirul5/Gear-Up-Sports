
import BannerImage from "../assets/images/Banner.jpg"
import BannerImage2 from "../assets/images/bannerimg1.jpg"
import BannerImage3 from "../assets/images/bannerimg2.jpg"
import BannerImage4 from "../assets/images/bannerimg3.jpg"
import Heading from "./Heading";
import { Swiper, SwiperSlide, } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Bounce } from "react-awesome-reveal";

const Banner = () => {
    return (
        <div className="mb-20">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => { }}
                onSwiper={(swiper) => { }}
            >
                <SwiperSlide>
                    <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: `url(${BannerImage})`,
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-white text-center">
                            <Bounce delay={200}>
                                <div className="max-w-[80%] mx-auto px-5">
                                    <Heading
                                        title={"Game On - Your Sports Gear Marketplace"}
                                        subtitle={"Discover top-quality sports equipment, apparel, and accessories to fuel your passion and elevate your performance."}
                                    ></Heading>
                                    <button className="btn bg-neutral text-white">Shop Now</button>
                                </div>
                            </Bounce>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: `url(${BannerImage2})`,
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <Bounce>
                                <div className="mx-auto max-w-[80%] px-5">
                                    <Heading
                                        title={"Gear Up for Victory: Your Ultimate Sports Store"}
                                        subtitle={"Shop top-quality sports gear, apparel, and accessories for every athlete."}
                                    ></Heading>
                                    <button className="btn bg-neutral text-white">Shop Now</button>
                                </div>
                            </Bounce>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: `url(${BannerImage3})`,
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <Bounce>
                                <div className="mx-auto max-w-[80%] px-5">
                                    <Heading
                                        title={"Explore Top-Quality Sports Gear and Equipment for Every Athlete"}
                                        subtitle={"Find everything you need to succeed in your sport, from professional-grade equipment to apparel and accessories"}
                                    ></Heading>
                                    <button className="btn bg-neutral text-white">Shop Now</button>
                                </div>
                            </Bounce>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: `url(${BannerImage4})`,
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <Bounce>
                                <div className="mx-auto max-w-[80%] px-5">
                                    <Heading
                                        title={"Gear Up for Success"}
                                        subtitle={"Top-Quality Sports Equipment & Apparel for Every Athlete"}
                                    ></Heading>
                                    <button className="btn bg-neutral text-white">Shop Now</button>
                                </div>
                            </Bounce>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;