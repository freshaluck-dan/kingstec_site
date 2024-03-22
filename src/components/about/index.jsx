import React from 'react';
import HeaderOne from '@/src/layout/headers/header';
import Breadcrumb from '@/src/common/breadcrumb/breadcrumb';
import AboutArea from './../homes/home-3/about-area';
import CounterArea from '../homes/home-2/counter-area';
import FooterThree from '@/src/layout/footers/footer-3';
import Footer from '@/src/layout/footers/footer';

const About = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="Our Company" page_title="Our Company" />
        <AboutArea about={true} />
        <CounterArea about={true} />
      </main>
      <Footer />
      {/* <FooterThree /> */}
    </>
  );
};

export default About;