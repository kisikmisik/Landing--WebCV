import React from "react";
import styles from './ContactSlide.scss'
import mapImage from "../../../assets/img/map.png"
import ContactPopup from "./ContactPopup/ContactPopup";

let ContactSlide = (props) => {
    return (
        <section className="contact slide slide--3">
            <h2 className="visually-hidden">Contact information, address, map location and get in touch form</h2>
            <img src={mapImage} alt="Krakow on map" height="100%" className="contact__map"/>
            <article className="info-block">
                <address className="info-block__address">Krakow, Poland</address>
                <a className="info-block__email" href="mailto:700mmr@gmail.com">700mmr@gmail.com</a>
                <a className="info-block__phone" href="tel:+48537118414">+48 537 118 414</a>
                <button className="info-block__contact-btn">Contact me</button>
            </article>
            <ContactPopup/>
        </section>
    )
}

export default ContactSlide