import Count from '@/src/common/count';
import React from 'react';


// support data  
const support_content = [
    {
        id: 1,
        count: 8,
        symbol: "hr",
        cls: "fadeLeft",
        title: "Our vision",
        info: <>To emerge as the leading worldwide innovator, equipping businesses with cutting-edge technological solutions, and cultivating an environment where efficiency, security, and ingenuity intersect.</>
    },
    {
        id: 2,
        count: 3,
        symbol: "hr",
        cls: "",
        title: "Our mission",
        info: <>We intend to lead with disruptive technology, enabling individuals and businesses to flourish in a changing digital environment. Join us in creating a brighter, more connected future through innovation and inclusion.</>
    },
    {
        id: 3,
        count: 94,
        symbol: "%",
        cls: "fadeRight",
        title: "Our presence",
        info: <>We now maintain a completely remote presence. Our services cater to many industries and sectors, providing worldwide clientele with innovation and additional value.</>
    },
]

const BrandTag = () => {
    return (
        <>
            <section className="tp-support-feature-area pb-100">
                <div className="container container-large">
                    <div className="row">
                        {support_content.map((item, i) =>
                            <div key={i} className="col-lg-4" style={{height: "20%", width: "33%"}}>
                                <div className="tp-support-feature-item d-flex p-relative fadeRight">
                                    <div className="tp-support-feature-content">
                                        <h4 className="tp-support-feature-content-title"><b>{item.title}</b></h4>
                                        <p>{item.info}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default BrandTag;