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
import Carousel from './component/Carousel';

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
    bg_img: "/assets/img/banner.jpg",
    sub_title_1: "best",
    sub_title_2: "it solutions",
    hero_title_1: "Empowering Tomorrow, Today: Transforming Tech into Tangible Solutions",
    hero_title_2: "",
    // hero_support: "Empowering Tomorrow, Today: Transforming Tech into Tangible Solutions",
  },
  {
    id: 2,
    bg_img: "/assets/img/prog.jpg",
    sub_title_1: "best",
    sub_title_2: "it solutions",
    hero_title_1: "Empowering Tomorrow, Today: Transforming Tech into Tangible Solutions",
    hero_title_2: "",
    // hero_support: "Empowering Tomorrow, Today: Transforming Tech into Tangible Solutions",
  },
  {
    id: 3,
    bg_img: "/assets/img/prog1.jpg",
    sub_title_1: "best",
    sub_title_2: "it solutions",
    hero_title_1: "Empowering Tomorrow, Today: Transforming Tech into Tangible Solutions",
    hero_title_2: "",
    // hero_support: "Empowering Tomorrow, Today: Transforming Tech into Tangible Solutions",
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
            <div className="tp-hero-inner-1">
              <div className='row'>
                <div className='col-lg-6'>
                  <Carousel>
                    {slider_data.map((item, i) => (
                      // <CarouselItem key={i} width='100%'>
                      <img key={i} className="tp-hero-bg" src={item.bg_img} style={{ width: '100%', height: '100%' }} />
                      // </CarouselItem>
                    ))}
                  </Carousel>
                </div>


                <div className="col-lg-6">
                  <div className="tp-hero-content">
                    <div className="tp-hero-title-wrapper">
                      <h4 className="tp-hero-title" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Empowering Tomorrow, Today: Transforming <br /> Tech into Tangible Solutions <LineArrow />
                        <br />{" "}
                      </h4>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tp-hero-service"
            style={{ backgroundImage: `url(/assets/img/hero/shape-6.png)` }}
          >
            <div className="tp-hero-service-shape">
              <Image src={service_shape} alt="theme-pure" />
            </div>
            <p>{process.env.NEXT_PUBLIC_REACT_APP_NAME} offers comprehensive <span><a href=''>services</a></span> to streamline your financial journey.</p>
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
