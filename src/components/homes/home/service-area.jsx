import Link from 'next/link';
import Image from 'next/image'
import Count from '@/src/common/count';
import React, { useEffect, useRef, useState } from 'react';
import service_data from '@/src/data/service-data';
import { Splide, SplideSlide } from '@splidejs/react-splide';

// svg icon
import AngleArrow from '@/src/svg/angle-arrow';
import LineArrowTwo from '@/src/svg/line-arrow-2';
import GreenRightArrow from '@/src/svg/green-right-arrow';

// fun fact shape
import fun_fact_shape_1 from "@assets/img/fun-fact/shape-1.png";
import fun_fact_shape_2 from "@assets/img/fun-fact/shape-2.png";
import fun_fact_shape_3 from "@assets/img/fun-fact/shape-3.png";
import fun_fact_shape_4 from "@assets/img/fun-fact/shape-4.png";
import fun_fact_shape_5 from "@assets/img/fun-fact/shadow.png";

import reload_img from "@assets/img/fun-fact/world.png";


const counter_content = [
   {
      id: 1,
      count: 10,
      info: "Experience",
      cls: "",
      cls_2: "purecounter",
      icon: "+",
   },
   {
      id: 2,
      count: 255,
      info: "square area",
      cls: "purecounter",
      cls_2: "",
      icon: "",
   },
   {
      id: 3,
      count: 310,
      info: "square area",
      cls: "purecounter",
      cls_2: "",
      icon: "",
   },
]
const ServiceArea = () => {

   const setting = {
      type: 'loop',
      drag: 'free',
      pagination: false,
      arrows: false,
      perPage: 5,
      gap: '30px',
      breakpoints: {
         1800: {
            perPage: 5,
         },
         1500: {
            perPage: 4,
         },
         1200: {
            perPage: 3,
         },
         800: {
            perPage: 2,
         },
         566: {
            perPage: 1,
         },
      },
   }
   const splideRef = useRef(null);

   const [reloadClassName, setReloadClassName] = useState(null);
   useEffect(() => {
      const reload = document.getElementById('reload');
      setReloadClassName(reload);
   }, []);

   const scrollRotate = () => {
      reloadClassName.style.transform = `rotate(${window.pageYOffset / 2}deg)`;
   };

   useEffect(() => {
      if (reloadClassName !== null) {
         window.addEventListener('scroll', scrollRotate);
      }
      return () => {
         window.removeEventListener('scroll', scrollRotate);
      };
   }, [reloadClassName]);


   return (
      <>
         <div className="tp-service-funfact-box">
            <section className="tp-fun-fact-area pt-60 pb-65 p-relative">
               <div className="container container-1400">

                  <div className="tp-fun-fact-shape">
                     <Image className="shape-1" src={fun_fact_shape_1} alt="theme-pure" />
                     <Image className="shape-2" src={fun_fact_shape_2} alt="theme-pure" />
                     <Image className="shape-3" src={fun_fact_shape_3} alt="theme-pure" />
                     <Image className="shape-4" src={fun_fact_shape_4} alt="theme-pure" />
                     {/* <Image className="shadow" src={fun_fact_shape_5} alt="theme-pure" /> */}
                  </div>

                  <div className="row">
                     <div className="col-lg-6 col-md-12">
                        <div className="tp-fun-fact-thumb p-relative">
                           <Image id="reload" src={reload_img} alt="scroll" />
                        </div>
                     </div>

                     <div className="col-lg-6 col-md-12">
                        <div className="tp-fun-fact-content">
                           <div className="tp-fun-fact-title-wrapper">
                              <h3 className="tp-section-title">Unlocking Your Business Potential: Our Solutions Tailored Just for You
                                 <span className="title-left-shape">
                                    <LineArrowTwo />
                                 </span>
                              </h3>
                              <p style={{ color: "#fff" }}>
                                 {process.env.NEXT_PUBLIC_REACT_APP_NAME} offers personalized solutions tailored to each business's unique challenges and opportunities. With our expertise, dedication, and innovative approach, we transform ideas into tangible results, empowering businesses to streamline processes, enhance efficiency, and drive growth. Our team commits to understanding your business thoroughly, ensuring our solutions exceed expectations at every stage of the journey. Let's embark on a journey of success together, where possibilities are endless, and your business's potential knows no bounds.
                              </p>

                           </div>
                        </div>
                     </div>
                  </div>

               </div>
            </section>

         </div>
      </>
   );
};

export default ServiceArea;