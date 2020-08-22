import React from "react";

let ContactSlide = (props) => {
    return (
        <section className="contact slide slide--3">
            <h2 className="visually-hidden">Contact information, address, map location and get in touch form</h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163975.34506598933!2d19.864790217145064!
                        3d50.04668135271086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471644c0354e18d1%3A0xb46bb6
                        b576478abf!2zS3Jha8Ozdw!5e0!3m2!1spl!2spl!4v1598013391521!5m2!1spl!2spl"
                width="800" height="600" frameBorder="0" style={{border:0}} allowFullScreen=""
                aria-hidden="false" tabIndex="0"/>
            <article className="contact__block info-block">
                <address className="info-block__address">Krakow, Poland</address>
                <a className="info-block__email" href="mailto:700mmr@gmail.com">700mmr@gmail.com</a>
                <a className="info-block__email" href="tel:+48537118414">+48 537 118 414</a>
                <button className="info-block__contact-btn">Contact me</button>

                <form className="contact-popup visually-hidden">
                    <label className="contact-popup__input-wrapper">
                        <p className="contact-popup__label">Email:</p>
                        <input type="email" className="contact-popup__email" placeholder="Email address"/>
                    </label>
                    <label className="contact-popup__input-wrapper">
                        <p className="contact-popup__label">Title:</p>
                        <input type="text" className="contact-popup__name" placeholder="Theme"/>
                    </label>
                    <label className="contact-popup__input-wrapper">
                        <p className="contact-popup__label">Message:</p>
                        <textarea cols="30" rows="10" className="contact-popup__message" placeholder="Type your message.."/>
                    </label>
                    <button type="submit" className="contact-popup__send">Send your message</button>
                </form>
            </article>
        </section>
    )
}

export default ContactSlide