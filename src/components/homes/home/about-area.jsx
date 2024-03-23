import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from "swiper";
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import AngleArrow from "@/src/svg/angle-arrow";
import apple from "@assets/img/apple.svg";
import android from "@assets/img/android.svg";
import about_img_1 from "@assets/img/project1.png";
import about_img_2 from "@assets/img/project2.png";
import about_img_3 from "@assets/img/project3.png";
import about_img_4 from "@assets/img/project4.png";
import about_img_5 from "@assets/img/project5.png";
import LineArrowTwo from '@/src/svg/line-arrow-2';
import shape_1 from "@assets/img/about/shape-1.png";
import about from "@assets/img/about/about-1.png";
import Carousel, { CarouselItem } from './component/Carousel';
import Slideshow from './component/Slider';
import LineArrow from '@/src/svg/line-arrow';

const about_data = [
    {
        id: 1,
        img: about_img_1,
        title: "Fruit crush",
        description: <>AFruit Crush is a basic fruit <br /> paring puzzle game with the exact <br /> similarities as the popular 3-match Crush puzzle game.</>,
    },
    {
        id: 2,
        img: about_img_2,
        title: "Football legend",
        description: <>Football Legend is a football <br /> trivia game where players answer <br /> fun and exciting questions about football.</>,
    },
    {
        id: 3,
        img: about_img_3,
        title: "Gameplay",
        description: <>Gameplay: An innovative solution <br /> for the 80 million mobile game players in <br /> Nigeria, providing financial opportunity <br />  from gaming skills.</>,
    },
    {
        id: 4,
        img: about_img_4,
        title: "Waabor",
        description: <>Waabor is a music trivia game where <br /> players answer fun and exciting questions about songs,<br /> lyrics, artiste and other music related things.</>,
    },
    {
        id: 5,
        img: about_img_5,
        title: "Fortune finder",
        description: <>Fortune Finder is a treasure hunt game where users search through a picture for specific objects.</>,
    },
]

const AboutArea = () => {
    const [isLoop, setIsLoop] = useState(false)
    useEffect(() => {
        setIsLoop(true)
    }, [])

    return (
        <>
            <section className="tp-about-area pb-45 box-plr p-relative">
                <div className="container">
                    {/* <div className="row">
                        <div className="col-lg-12"> */}
                    <div className="tp-about-wrapper pl-50">
                        <div className="row">
                            <div style={{ marginTop: "80px" }} className="col-lg-8">
                                <div className="tp-about-title-wrapper p-relative">
                                    <h3 className="tp-section-title">Our projects
                                        <span className="title-left-shape">
                                            <LineArrowTwo />
                                        </span>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-container">
                            <div className="tp-hero-inner-1">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <Slideshow />
                                    </div>
                                    <div className="col-lg-6" style={{ marginTop: "100px" }}>
                                        <div className='row'>
                                            <h3>Check out our app <br /> available on all stores</h3>
                                            <LineArrow />
                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <div className='col-lg-6'>
                                                    <Image height={300} src={apple} alt='...' style={{ width: "150px" }} />
                                                </div>
                                                <div className='col-lg-6'>
                                                    <Image height={300} src={android} alt='...' style={{ width: "150px" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="hero-active-1 swiper-container">
                            <div className="tp-hero-inner-1">
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <Carousel>
                                            {about_data.map((item, i) => (
                                                <Image key={item.id} className="tp-hero-bg" src={item.img} style={{ width: '50%', height: '100%' }} />
                                            ))}
                                        </Carousel>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="tp-hero-content">
                                            <div className="tp-hero-title-wrapper">
                                                <p className="tp-hero-title" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                    Empowering Tomorrow, Today: Transforming <br /> Tech into Tangible Solutions 
                                                    <br />{" "}
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className='col-lg-6'>
                            <Carousel>
                                {about_data.map((item, i) => (
                                    // <CarouselItem key={i} width='100%'>
                                    <img key={i} className="tp-hero-bg" src={item.img} style={{ width: '100%', height: '100%' }} />
                                    // </CarouselItem>
                                ))}
                            </Carousel>
                        </div> */}

                        {/* <Carousel>
                            {about_data.map((item, i) => (
                                <Image key={i} className="" src={item.img} style={{ width: '30%' }} />
                            ))}
                        </Carousel> */}
                    </div>

                </div>
            </section>
        </>
    );
};

export default AboutArea;



// import Image from 'next/image';
// import AngleArrow from "@/src/svg/angle-arrow";
// import LineArrow from "@/src/svg/line-arrow";
// import React, { useState, useEffect } from "react";


// import about_img_1 from "@assets/img/project1.png";
// import about_img_2 from "@assets/img/project2.png";
// import about_img_3 from "@assets/img/project3.png";
// import about_img_4 from "@assets/img/project4.png";
// import about_img_5 from "@assets/img/project5.png";
// import { Carousel } from 'bootstrap';
// import Slideshow from './component/Slider';
// // import Carousel from './component/Carousel';

// // slider setting
// const setting = {
//     slidesPerView: 1,
//     spaceBetween: 0,
//     effect: "fade",
//     autoplay: {
//         delay: 5000,
//     },
//     // Navigation arrows
//     navigation: {
//         nextEl: ".hero-button-next-1",
//         prevEl: ".hero-button-prev-1",
//     },
// };
// // slider data
// const slider_data = [
//     {
//         id: 1,
//         bg_img: about_img_1,
//         sub_title_1: "best",
//         sub_title_2: "it solutions",
//         hero_title_1: "Empowering Tomorrow, Today: Transforming Tech into Tangible Solutions",
//         hero_title_2: "",
//         // hero_support: "Empowering Tomorrow, Today: Transforming Tech into Tangible Solutions",
//     },
//     {
//         id: 2,
//         bg_img: about_img_2,
//         sub_title_1: "best",
//         sub_title_2: "it solutions",
//         hero_title_1: "Empowering Tomorrow, Today: Transforming Tech into Tangible Solutions",
//         hero_title_2: "",
//         // hero_support: "Empowering Tomorrow, Today: Transforming Tech into Tangible Solutions",
//     },
//     {
//         id: 3,
//         bg_img: about_img_3,
//         sub_title_1: "best",
//         sub_title_2: "it solutions",
//         hero_title_1: "Empowering Tomorrow, Today: Transforming Tech into Tangible Solutions",
//         hero_title_2: "",
//         // hero_support: "Empowering Tomorrow, Today: Transforming Tech into Tangible Solutions",
//     },
//     {
//         id: 4,
//         bg_img: about_img_4,
//         sub_title_1: "best",
//         sub_title_2: "it solutions",
//         hero_title_1: "Empowering Tomorrow, Today: Transforming Tech into Tangible Solutions",
//         hero_title_2: "",
//         // hero_support: "Empowering Tomorrow, Today: Transforming Tech into Tangible Solutions",
//     },
//     {
//         id: 5,
//         bg_img: about_img_5,
//         sub_title_1: "best",
//         sub_title_2: "it solutions",
//         hero_title_1: "Empowering Tomorrow, Today: Transforming Tech into Tangible Solutions",
//         hero_title_2: "",
//         // hero_support: "Empowering Tomorrow, Today: Transforming Tech into Tangible Solutions",
//     },
// ];
// // shapes
// // const shapes = [
// //   { id_cls: 1, img: shape_1 },
// //   { id_cls: 2, img: shape_2 },
// //   { id_cls: 3, img: shape_3 },
// //   { id_cls: 4, img: shape_4 },
// //   { id_cls: 7, img: shape_5 },
// // ]

// const HeroSlider = () => {
//     const [isLoop, setIsLoop] = useState(false)
//     useEffect(() => {
//         setIsLoop(true)
//     }, [])

//     return (
//         <>
//             <section className="tp-hero-area tp-hero-space pb-95">
//                 <div className="tp-hero-wrapper p-relative">
//                     <div className="hero-active-1 swiper-container">
//                         <div className="tp-hero-inner-1">
//                             <div className='row'>
//                                 <div className='col-lg-6'>
//                                     <Slideshow />
//                                 </div>

//                                 <div className="col-lg-6">
//                                     <div className="tp-hero-content">
//                                         <div className="tp-hero-title-wrapper">
//                                             <h4 className="tp-hero-title" style={{ fontFamily: 'Poppins, sans-serif' }}>
//                                                 Empowering Tomorrow, Today: Transforming <br /> Tech into Tangible Solutions <LineArrow />
//                                                 <br />{" "}
//                                             </h4>

//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section >
//         </>
//     );
// };

// {/* <Carousel>
// {slider_data.map((item, i) => (
// // <CarouselItem key={i} width='100%'>
// <Image key={i} className="tp-hero-bg" src={item.bg_img} style={{ width: '60%', height: '50%' }} />
// // </CarouselItem>
// ))}
// </Carousel> */}

// export default HeroSlider;
