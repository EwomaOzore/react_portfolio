import React from 'react';

const Contact = () => {
    return (
        <div id="contact" className="contact-container">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1 className="sub-title">Contact Me</h1>
                        <p>Email: ewomaozore@gmail.com</p>
                        <p>Phone: 08134970348</p>
                        <p>GitHub: <a href="https://github.com/EwomaOzore">EwomaOzore</a></p>
                        <p>Linkedin: <a href="https://www.linkedin.com/in/ewomaozore/">EwomaOzore</a></p>
                    </div>
                    <div className="contact-right">
                        <form>
                            <input type="text" name="name" placeholder="Your Name" required />
                            <input type="email" name="email" placeholder="Your E-mail" required />
                            <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                            <button type="submit" className="btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
