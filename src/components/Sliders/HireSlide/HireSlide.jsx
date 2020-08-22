import React from "react";

let HireSlide = (props) => {
    return (
        <section className="hire-me slide slide--4">
            <h2 className="visually-hidden">Hire me to make a website or webapp for you or your business</h2>
            <form className="hire-me__form">
                <fieldset className="hire-me__work-type-wrapper">
                    <legend>You want me to do:</legend>
                    <label className="hire-me__landing">
                        <span>Landing page</span>
                        <input type="checkbox"/>
                    </label>
                    <label className="hire-me__shop">
                        <span>Online shop</span>
                        <input type="checkbox"/>
                    </label>
                    <label className="hire-me__html">
                        <span>Semantic HTML</span>
                        <input type="checkbox"/>
                    </label>
                    <label className="hire-me__app">
                        <span>Web application</span>
                        <input type="checkbox"/>
                    </label>
                    <label className="hire-me__design">
                        <span>UI/UX design</span>
                        <input type="checkbox"/>
                    </label>
                    <label className="hire-me__job">
                        <span>Remote ft/pt job</span>
                        <input type="checkbox"/>
                    </label>
                    <label className="hire-me__other">
                        <span>Other</span>
                        <input type="checkbox"/>
                    </label>
                </fieldset>
                <input type="text" className="hire-me__name" placeholder="Name"/>
                <input type="email" className="hire-me__email" placeholder="Email"/>
                <button type="submit" className="hire-me__submit">Send request</button>
            </form>
        </section>
    )
}

export default HireSlide