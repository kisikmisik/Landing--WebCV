import React from "react";
import styles from "./ContactPopup.scss"

let ContactPopup = (props) => {
    return (
        <form className="contact-popup">
            <div className="contact-popup__wrapper">
                <label className="contact-popup__input-wrapper">
                    <p className="contact-popup__label">Your email:</p>
                    <input type="email"
                           className="contact-popup__email"
                           placeholder="Email address"
                           autoFocus={true}
                           required={true}
                           maxLength="50"/>
                </label>
                <label className="contact-popup__input-wrapper">
                    <p className="contact-popup__label">Title:</p>
                    <input type="text" className="contact-popup__name" placeholder="Theme" maxLength="50"/>
                </label>
                <label className="contact-popup__input-wrapper">
                    <p className="contact-popup__label">Message:</p>
                    <textarea cols="30" rows="8"
                              className="contact-popup__message"
                              placeholder="Type your message.."
                              maxLength="200"
                              required={true}/>
                </label>
                {"isSent" ?
                    <p className="contact-popup__sent">Your message has been sent. Thank you!</p> :
                    <button type="submit" className="contact-popup__send">Send message</button>
                }

            </div>
        </form>
    )

}
export default ContactPopup;
