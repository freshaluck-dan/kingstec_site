import ContactForm from '@/src/forms/contact-form';
import EmailIconOne from '@/src/svg/email-icon-1';
import PhoneIcon from '@/src/svg/phone-icon';
import React from 'react';

const ContactArea = () => {
    return (
        <>
            <section className="tp-contact-area pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="tp-contact-wrapper">
                                <div className="tp-contact-title-wrapper">
                                    <h3 className="tp-contact-title">Contact us</h3>
                                    <p>Welcome to our contact page! At {process.env.NEXT_PUBLIC_REACT_APP_NAME}, we're thrilled to connect with you. Whether you have questions about our services, want to explore partnership opportunities, or simply want to say hello, we're here to listen.

                                        Our team of experts is dedicated to providing top-notch support and guidance. We value your input and are committed to addressing your inquiries promptly and effectively. Your feedback is crucial to us as we strive for continuous improvement and innovation.

                                        Feel free to reach out through the contact form below or via email at [contact@techfirm.com]. We look forward to hearing from you and embarking on a journey of collaboration and success together.

                                        Thank you for considering {process.env.NEXT_PUBLIC_REACT_APP_NAME} as your technology partner. Let's build a brighter future, one interaction at a time.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-contact-content">
                                <div className="tp-contact-content-mail d-flex align-items-center">
                                    <div className="tp-contact-content-mail-icon">
                                        <span>
                                            <EmailIconOne />
                                        </span>
                                    </div>
                                    <h3 className="tp-contact-item-title"><a href="mailto:@themepure.gmail.com">kingstech92@gmail.com</a></h3>
                                </div>
                                <div className="tp-contact-content-phone d-flex align-items-center">
                                    <div className="tp-contact-content-phone-icon">
                                        <span>
                                            <PhoneIcon />
                                        </span>
                                    </div>
                                    <h3 className="tp-contact-item-title">
                                        <a href="tel:+2349091748769">+2349091748769</a>;
                                    </h3>
                                    <br />
                                    <h3 className="tp-contact-item-title">
                                        <a href="tel:+2347067447926">+2347067447926</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactArea;