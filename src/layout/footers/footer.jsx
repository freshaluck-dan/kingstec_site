import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import headphone from "@assets/img/footer/headphone.png";
import footer_logo from "@/src/images/Kingstech Logo-White.png";
import user from "@assets/img/footer/user.png";
import EmailAeroplan from '@/src/svg/email-aeroplan';
import SocialLinks, { CopyRight } from '@/src/common/social-links';

const footer_content = {
    contact_us: <> Contact us at <span>kingstech92@gmail.com </span></>,
    mail: "kingstech92@gmail.com",
    contact_text: "PERFECT SOLUTION From  It Advisor",
    phone: "+2349091748769",
    info: <>Empowering Tomorrow, Today: Transforming Tech into Tangible Solutions</>,
    map: "https://www.google.com/maps/search/86+Road+Broklyn+Street,+600+New+York,+USA/@40.6897806,-74.0278086,12z/data=!3m1!4b1",
    address: <>86 Road Broklyn Street, 600 <br /> New York, USA</>,
    mail_2: "kingstech92@gmail.com",
    mail_phone: <> kingstech92@gmail.com <br /> +2349091748769</>,


    service_links: [
        "IT platform development",
        "Software support",
        "Research and development",
        "Stratedic representation and development process",
    ]



}
const { contact_us, contact_text, phone, info, mail_2, mail_phone, service_links } = footer_content


const Footer = () => {
    return (
        <>
            <footer className="tp-footer-area p-relative" style={{background: "#1A2859"}}>
                {/* <div className="tp-footer-bg" style={{ backgroundImage: `url(/assets/img/footer/footer-bg.jpg)` }}></div>
                <div className="tp-footer-top-shape" style={{ backgroundImage: `url(/assets/img/footer/footer-top-bg.png)` }}></div> */}

                <div className="container container-large">

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tp-footer-top-area">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="tp-footer-top-contact">
                                            <a href={`mailto:kingstec92@gmail.com`}>{contact_us}</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="tp-footer-top-right d-flex justify-content-start justify-content-lg-end">
                                            <div className="tp-footer-top-right-headphone">
                                                <Image src={headphone} alt="theme-pure" />
                                            </div>
                                            <div className="tp-footer-top-right-content">
                                                <p>{contact_text}</p>
                                                <a href={`tel:${phone}`}>{phone}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tp-footer-main-area">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="tp-footer-widget tp-footer-col-1">
                                    <div className="tp-footer-logo">
                                        <a href="index.html"> <Image src={footer_logo} width={170} alt="theme-pure" /></a>
                                    </div>
                                    <div className="tp-footer-widget-content">
                                        <div className="tp-footer-info">
                                            <p>{info}</p>
                                            {/* <div className="tp-footer-main-location">
                                                <a target='_blank' href={map}> <i className="fa-sharp fa-light fa-location-dot"></i>
                                                    {address}</a>
                                            </div> */}
                                            <div className="tp-footer-main-mail">
                                                <a href={`mailto:${mail_2}`}>
                                                    <i className="fa-light fa-message-dots"></i>{mail_phone}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="tp-footer-widget tp-footer-col-2">
                                    <h3 className="tp-footer-widget-title">Our Services</h3>
                                    <div className="tp-footer-widget-content">
                                        <ul>
                                            {service_links.map((link, i) => <li style={{ color: "#fff" }} key={i}>{link}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="tp-footer-widget tp-footer-col-3">
                                    <h3 className="tp-footer-widget-title">Our values</h3>
                                    <div className="tp-footer-widget-content">
                                        {/* <div className="tp-footer-author d-flex">
                                            <div className="tp-footer-author-thumb">
                                                <Image src={user} alt="theme-pure" />
                                            </div>
                                            <div className="tp-footer-author-content">
                                                <span>Chat With Expert <br /> Active Now</span>
                                            </div>
                                        </div> */}
                                        <ul>
                                            <li style={{ color: "#fff" }}>Quality</li>
                                            <li style={{ color: "#fff" }}>Innovation</li>
                                            <li style={{ color: "#fff" }}>Satisfaction</li>
                                            <li style={{ color: "#fff" }}>Security</li>
                                            <li style={{ color: "#fff" }}>Ethics</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-5 col-md-6">
                                <div className="tp-footer-widget tp-footer-col-4">
                                    <h3 className="tp-footer-widget-title">Social</h3>
                                    <div className="tp-footer-from">
                                        <div className="tp-footer-widget-social">
                                            <SocialLinks />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tp-footer-copyright-area p-relative">
                        <div className="row">
                            <div className="col-md-12 col-lg-12">
                                <div className="tp-footer-copyright-inner">
                                    <CopyRight />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;