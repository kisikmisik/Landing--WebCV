import React from "react";

let HomeSlide = (props) => {
    return (
        <section className="home slide slide--1">
            <h2 className="home__title">Hi, I am Vladimir, web developer</h2>
            <button className="home__slide">Hire me</button>
            <button className="home__button">Resume</button>
            <img src="#" alt="Portrait of ugly me" className="home__myPhoto" width="400"/>
            <div className="home__links">
                <a href="https://www.linkedin.com/in/vnofenko/"
                   className="home__link--linkedin link-button">linkedin</a>
                <button className="button">Portfolio</button>
                <a href="https://github.com/kisikmisik"
                   className="home__link--github link-button">github</a>
            </div>
        </section>
    )
}

export default HomeSlide