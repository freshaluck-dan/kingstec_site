import Link from 'next/link';
import Image from 'next/image';
import NavMenu from './nav-menu';
import LangLogo from "@assets/img/logo/logo-lang.png";
import useSticky from '@/src/hooks/use-sticky';
import HamburgerBtn from '@/src/svg/hamburger-btn';
import React, { useEffect, useRef, useState } from 'react';
import HomeIcon from '@/src/svg/home-icon';
import SearchPopup from '@/src/modals/search-popup';
import Sidebar from '@/src/modals/sidebar';
import Logo from "../../images/Kingstech Logo-Blue.png";

const HeaderOne = () => {
   const { sticky } = useSticky()
   const langToggleRef = useRef(null);
   const [searchOpen, setSearchOpen] = useState(false)
   const [sidebarOpen, setSidebarOpen] = useState(false)

   const [isLangListOpen, setIsLangListOpen] = useState(false);
   useEffect(() => {
      if (langToggleRef.current) {
         const handleClickOutside = (e) => {
            if (langToggleRef.current.contains(e.target)) {
               setIsLangListOpen(!isLangListOpen);
            } else {
               setIsLangListOpen(false);
            }
         };
         window.addEventListener('click', handleClickOutside);
         return () => {
            window.removeEventListener('click', handleClickOutside);
         };
      }
   }, [isLangListOpen, langToggleRef]);


   return (
      <>
         <header className="tp-header-area tp-header-height p-relative">
            {/* <div className="tp-header-top tp-header-space d-none d-xl-block">
               <div className="container-fluid">
                  <div className="row align-items-center">
                     <div className="col-xxl-6 col-xl-8">
                        <div className="tp-header-top-info">
                           <ul>

                              <li>
                                 <a href="mailto:technix@support.com"><span>
                                    <i className="fa-solid fa-envelope"></i></span>kingstec92@gmail.com
                                 </a>
                              </li>

                           </ul>
                        </div>
                     </div>
                     <div className="col-xxl-6 col-xl-4">
                        <div className="tp-header-top-right d-flex justify-content-end align-items-center">
                           <div className="header-call">
                              <a href="tel:01310-069824"><i className="fa-solid fa-phone"></i> +2349091748769</a>
                           </div>
                           <div className="header-social d-xxl-block d-none">
                              <Link href="#"><i className="fa-brands fa-facebook"></i> Facebook</Link>
                              <Link href="#"><i className="fa-brands fa-twitter"></i> Skype</Link>
                              <Link href="#"><i className="fa-brands fa-linkedin"></i> Linkedin</Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div> */}
            <div id="header-sticky"
               className={`tp-header-bottom header__sticky p-relative ${sticky && "tp-header-sticky"}`} style={{ paddingLeft: "130px" }}>
               <div className="tp-header-bottom-space p-relative">
                  <div className="container-fluid gx-0">
                     <div className="row gx-0 align-items-center">
                        <div className="col-xxl-3 col-xl-3">
                           <div className="tp-header-main-left d-flex align-items-center p-relative">
                              <div className="tp-header-logo">
                                 <Link href="/">
                                    <Image src={Logo} width={170} alt="theme-pure" />
                                 </Link>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-9 col-xl-9 d-none d-xl-block">
                           <div className="tp-main-menu-area counter" style={{ display: "flex", justifyContent: "end" }}>
                              <div className="tp-main-menu menu-icon">
                                 <span className="header-icon"><HomeIcon /></span>
                                 <nav id="tp-mobile-menu">
                                    <NavMenu />
                                 </nav>
                              </div>
                           </div>
                        </div>

                     </div>
                  </div>
               </div>
            </div>
         </header>
         {/* <SearchPopup searchOpen={searchOpen} setSearchOpen={setSearchOpen} /> */}
         {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
      </>
   );
};

export default HeaderOne;