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
                                    <div className="col-lg-12">
                                        <Slideshow />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default AboutArea;