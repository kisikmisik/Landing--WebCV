import React from "react";
import styles from "./HireSlide.scss"

let HireSlide = (props) => {
    return (
        <section id='slide-4' className="hire-me slide slide--4">
            <h2 className="visually-hidden">Hire me to make a website or webapp for you or your business</h2>
            <form className="hire-me__form">
                <fieldset className="hire-me__work-type-wrapper">
                    <legend>You want me to do</legend>
                    <div className="hire-me__row-wrapper hire-me__row-wrapper--1">
                        <label className="hire-me__work hire-me__work--landing button">
                            <input type="checkbox" className="visually-hidden"/>
                            <span className="hire-me__work-text">Landing page</span>
                        </label>
                        <label className="hire-me__work hire-me__work--shop button">
                            <input type="checkbox" className="visually-hidden"/>
                            <span className="hire-me__work-text">Online shop</span>
                        </label>
                        <label className="hire-me__work hire-me__work--html button">
                            <input type="checkbox" className="visually-hidden"/>
                            <span className="hire-me__work-text">Semantic HTML</span>
                        </label>
                    </div>
                    <div className="hire-me__row-wrapper hire-me__row-wrapper--2">
                        <label className="hire-me__work hire-me__work--app button">
                            <input type="checkbox" className="visually-hidden"/>
                            <span className="hire-me__work-text">Web application</span>
                        </label>
                        <label className="hire-me__work hire-me__work--design button">
                            <input type="checkbox" className="visually-hidden"/>
                            <span className="hire-me__work-text">UI/UX design</span>
                        </label>
                    </div>
                    <div className="hire-me__row-wrapper hire-me__row-wrapper--3">
                        <label className="hire-me__work hire-me__work--job button">
                            <input type="checkbox" className="visually-hidden"/>
                            <span className="hire-me__work-text">Remote ft/pt job</span>
                        </label>
                        <label className="hire-me__work hire-me__work--other button">
                            <input type="checkbox" className="visually-hidden"/>
                            <span className="hire-me__work-text">Other</span>
                        </label>
                    </div>
                </fieldset>
                <div className="hire-me__bottom-wrapper">
                    <input type="text" className="hire-me__name" placeholder="Name" maxLength="50"/>
                    <input type="email" className="hire-me__email" placeholder="Email" maxLength="50"/>
                </div>
                <button type="submit" className="hire-me__submit">Send request</button>
            </form>
        </section>
    )
}

export default HireSlide