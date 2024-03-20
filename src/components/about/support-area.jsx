import VideoPopup from "@/src/modals/video-popup";
import AngleArrow from "@/src/svg/angle-arrow";
import LineArrowTwo from "@/src/svg/line-arrow-2";
import RightSymbol from "@/src/svg/right-symbol";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";


import support_img_1 from "@assets/img/about/home-3/img-1.jpg";
import support_img_2 from "@assets/img/about/home-3/img-2.jpg";
import support_img_3 from "@assets/img/about/home-3/img-3.jpg";
import support_shape from "@assets/img/about/home-3/shape-1.png";

const support_contact = {
   sub_title_1: "Our mission",
   info: <>Empowering Tomorrow, Today: Transforming Tech into Tangible Solutions. The idea of harnessing the power of technology to address present-day challenges and shape a better future.</>,
}

// const text_contact = {
//    sub_text_1: "Our Expertise",
//    info_text: <>The slogan "Empowering Tomorrow, Today: Transforming Tech into Tangible Solutions" encapsulates the idea of harnessing the power of technology to address present-day challenges and shape a better future.
//       "Empowering Tomorrow, Today" signifies taking proactive steps now to create positive changes and opportunities for the future. It emphasizes the forward-thinking nature of the approach, suggesting that the benefits of technological advancements can be realized in the present moment.
//       "Transforming Tech into Tangible Solutions" highlights the practical application of technology to solve real-world problems and provide concrete, measurable outcomes. It underscores the notion that technology, when leveraged effectively, can lead to tangible improvements in various aspects of life, including business, society, and individual well-being.
//       Overall, the slogan communicates a commitment to innovation, progress, and making a meaningful impact by translating technological advancements into actionable solutions that benefit individuals and society as a whole.</>,
// }
const { sub_title_1, sub_title_2, info, lists } = support_contact
// const { info_text, sub_text_1 } = text_contact

const SupportArea = () => {
   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <section className="tp-support-breadcrumb fix pt-120 pb-210">
            <div className="container">
               <div className="row">
                  <div className="col-lg-6">
                     <div className="tp-fun-fact-title-wrapper support-breadcrumb">
                        <h5 className="tp-section-title">
                           {sub_title_1}
                           <span className="title-left-shape">
                              <LineArrowTwo />
                           </span>
                        </h5>
                        <p>{info}</p>
                     </div>
                     {/* <div className="tp-fun-fact-title-wrapper support-breadcrumb">
                        <h5 className="tp-section-title">
                           {sub_text_1}
                           <span className="title-left-shape">
                              <LineArrowTwo />
                           </span>
                        </h5>
                        <p>{info_text}</p>
                     </div> */}
                  </div>
                  <div className="col-lg-6">
                     <div className="tp-about-3-img p-relative fadeRight">
                        <Image src={support_img_1} alt="theme-pure" />
                        <div className="shape-2 p-relative">
                           {/* <Image src={support_img_3} alt="theme-pure" /> */}
                           <Image className="shape-1" src={support_img_2} alt="theme-pure" />
                        </div>
                        {/* <Image className="shape-3" src={support_shape} alt="theme-pure" /> */}
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}
export default SupportArea;