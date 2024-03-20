import Image from 'next/image';
import AngleArrow from "@/src/svg/angle-arrow";
import LineArrow from "@/src/svg/line-arrow";
import Link from "next/link";
import { EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import VideoPopup from "@/src/modals/video-popup";
import React, { useState, useEffect } from "react";


import shape_1 from "@assets/img/hero/shape-1.png";
import shape_2 from "@assets/img/hero/shape-2.png";
import shape_3 from "@assets/img/hero/shape-3.png";
import shape_4 from "@assets/img/hero/shape-4.png";
import shape_5 from "@assets/img/hero/shape-7.png";
import service_shape from "@assets/img/hero/shape-5.png";
import service_quote from "@assets/img/hero/quot.png";

// slider setting 
const setting = {
  slidesPerView: 1,
  spaceBetween: 0,
  effect: "fade",
  autoplay: {
    delay: 5000,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".hero-button-next-1",
    prevEl: ".hero-button-prev-1",
  },
};
// slider data 
const slider_data = [
  {
    id: 1,
    bg_img: "/assets/img/heroImg.jpg",
    sub_title_1: "best",
    sub_title_2: "it solutions",
    hero_title_1: "Kingstec",
    hero_title_2: "",
    hero_support: "Empowering Tomorrow, Today: Transforming Tech into Tangible Solutions",
  },
];
// shapes 
const shapes = [
  { id_cls: 1, img: shape_1 },
  { id_cls: 2, img: shape_2 },
  { id_cls: 3, img: shape_3 },
  { id_cls: 4, img: shape_4 },
  { id_cls: 7, img: shape_5 },
]

const HeroSlider = () => {
  const [isLoop, setIsLoop] = useState(false)
  useEffect(() => {
    setIsLoop(true)
  }, [])


  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="tp-hero-area tp-hero-space pb-95">
        <div className="tp-hero-wrapper p-relative">
          <div className="hero-active-1 swiper-container">
            <Swiper {...setting} loop={isLoop} modules={[Navigation, EffectFade]}>
              {slider_data.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="tp-hero-inner-1">
                    <div className="container">
                      <div className="tp-hero-1">
                        <div className='row'>
                          <div className="col-lg-5">
                            <div className="tp-hero-content">
                              <div className="tp-hero-title-wrapper">
                                <h3 className="tp-hero-title">
                                  {item.hero_title_1} <LineArrow />
                                  <br />{" "}
                                </h3>
                                <p className="title-text-transparent">
                                  {item.hero_support}
                                </p>
                                <div className="tp-hero-btn">
                                  <Link className="tp-btn" href="/about">
                                    Learn More{" "}
                                    <i className="fa-regular fa-arrow-right-long"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-7'>
                            <div className="tp-hero-bg"
                              style={{ backgroundImage: `url(${item.bg_img})` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div
            className="tp-hero-service"
            style={{ backgroundImage: `url(/assets/img/hero/shape-6.png)` }}
          >
            <div className="tp-hero-service-shape">
              <Image src={service_shape} alt="theme-pure" />
            </div>
            {/* <p>
              Our company provides a full range of <span>services</span> for the
              cons <br />
              private houses and cottages since 19
            </p> */}
            <p>{process.env.NEXT_PUBLIC_REACT_APP_NAME} offers comprehensive <span><a href=''>services</a></span> to streamline your financial journey.</p>
            {/* <p>Our fintech startup offers comprehensive <a href=''>services</a> tailored to meet the financial needs of individuals and businesses alike. We specialize in providing innovative solutions designed to enhance financial management and empower our clients to achieve their goals. With a focus on cutting-edge technology and personalized support, we are committed to delivering excellence since our establishment.</p> */}
            <div className="tp-hero-service-quote">
              <Image src={service_quote} alt="theme-pure" />
            </div>
          </div>

        </div>
      </section >
    </>
  );
};

export default HeroSlider;
