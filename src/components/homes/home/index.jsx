import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import HeroSlider from "./hero-slider";
import AboutArea from "./about-area";
import FeatureArea from "./feature-area";
import ServiceArea from "./service-area";
import BrandArea from "./brand-area";
import SupportArea from "./support-area";
import TestimonialArea from "./testimonial-area";
import SliderArea from "./slider-area";
import FaqArea from "./faq-area";
import BlogArea from "./blog-area";
import Footer from "@/src/layout/footers/footer";
import IndustryArea from "@/src/common/industry-area";
import BrandTag from "./BrandTag";

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <HeroSlider />
        <BrandTag />
        <ServiceArea />
        <AboutArea />
        {/* <SupportArea /> */}
        <SliderArea />
        <Footer />
      </main>
    </>
  );
};

export default HomeOne;
