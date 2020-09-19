import React, {useState} from "react";
import styles from "./ContactPopup.scss"
import {useSpring, animated} from 'react-spring';

let ContactPopup = (props) => {
    let [isMessageSent, changeMessageStatus] = useState(false)
    let handleSendClick = (evt) => {
        changeMessageStatus(true);
    }
    const animProps = useSpring({left: 65, transform: "scale(1)",
        from: {left: 400, transform: "scale(0.2)"}, config: {duration: 350}})



    return (
        <animated.form style={animProps} id="contact__form" className="contact-popup">
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
                    <input type="text" className="contact-popup__name" placeholder="Theme" maxLength="50" required={true}/>
                </label>
                <label className="contact-popup__input-wrapper">
                    <p className="contact-popup__label">Message:</p>
                    <textarea cols="30" rows="5"
                              className="contact-popup__message"
                              placeholder="Type your message.."
                              maxLength="200"
                              required={true}/>
                </label>
            </div>
            {isMessageSent ?
                <p className="contact-popup__sent">Thanks! I'll answer shortly.</p> :
                <button onClick={handleSendClick} type="submit" className="contact-popup__send">Send message</button>
            }
        </animated.form>
    )

}
export default ContactPopup;
