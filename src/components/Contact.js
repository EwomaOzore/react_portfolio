import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zs4lhch', 'template_kwm33ar', form.current, 'mSIu2Y1ElfjsCwlXy')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div id="contact" className="contact-container">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1 className="sub-title">Contact Me</h1>
                        <h3>Email: ewomaozore@gmail.com</h3>
                        <h3>Phone: 08134970348</h3>
                    </div>
                    <div className="contact-right">
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="text" name="user_name" placeholder="Your Name" required />
                            <input type="email" name="user_email" placeholder="Your E-mail" required />
                            <textarea name="message" rows="6" placeholder="Your Message"></textarea>
                            <input type="submit" className="btn" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
