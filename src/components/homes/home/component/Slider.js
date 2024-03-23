
import about_img_1 from "@assets/img/project1.png";
import about_img_2 from "@assets/img/project2.png";
import about_img_3 from "@assets/img/project3.png";
import about_img_4 from "@assets/img/project4.png";
import about_img_5 from "@assets/img/project5.png";
import Image from "next/image";
import React from "react";

const delay = 2500;
// slider data 
const slider_data = [
    {
        id: 1,
        bg_img: about_img_1,
        sub_title_1: "best",
        sub_title_2: "it solutions",
        hero_title_1: "Empowering Tomorrow, Today: Transforming Tech into Tangible Solutions",
        hero_title_2: "",
        // hero_support: "Empowering Tomorrow, Today: Transforming Tech into Tangible Solutions",
    },
    {
        id: 2,
        bg_img: about_img_2,
        sub_title_1: "best",
        sub_title_2: "it solutions",
        hero_title_1: "Empowering Tomorrow, Today: Transforming Tech into Tangible Solutions",
        hero_title_2: "",
        // hero_support: "Empowering Tomorrow, Today: Transforming Tech into Tangible Solutions",
    },
    {
        id: 3,
        bg_img: about_img_3,
        sub_title_1: "best",
        sub_title_2: "it solutions",
        hero_title_1: "Empowering Tomorrow, Today: Transforming Tech into Tangible Solutions",
        hero_title_2: "",
        // hero_support: "Empowering Tomorrow, Today: Transforming Tech into Tangible Solutions",
    },
    {
        id: 4,
        bg_img: about_img_4,
        sub_title_1: "best",
        sub_title_2: "it solutions",
        hero_title_1: "Empowering Tomorrow, Today: Transforming Tech into Tangible Solutions",
        hero_title_2: "",
        // hero_support: "Empowering Tomorrow, Today: Transforming Tech into Tangible Solutions",
    },
    {
        id: 5,
        bg_img: about_img_5,
        sub_title_1: "best",
        sub_title_2: "it solutions",
        hero_title_1: "Empowering Tomorrow, Today: Transforming Tech into Tangible Solutions",
        hero_title_2: "",
        // hero_support: "Empowering Tomorrow, Today: Transforming Tech into Tangible Solutions",
    },
];

function Slideshow() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    // prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                    prevIndex === slider_data.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {slider_data.map((item, i) => (
                    <div
                        className="slide"
                        key={i}
                    >
                        <Image alt="..." className="tp-hero-bg" src={item.bg_img} style={{ width: '80%', height: '100%' }} />
                    </div>
                ))}
            </div>

            <div className="slideshowDots">
                {slider_data.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Slideshow