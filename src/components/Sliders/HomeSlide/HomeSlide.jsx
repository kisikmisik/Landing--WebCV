import React from "react";
import styles from "./HomeSlide.scss"
import myPortrait from "../../../assets/img/me2.png"
import linkedinImg from "../../../assets/img/linkedin.svg"
import githubImg from "../../../assets/img/github.svg"

let HomeSlide = (props) => {
    return (
        <section id="slide-1" className="home slide slide--1">
            <div className="home__top-wrapper">
                <h2 className="home__title">Hi,<br/> I am Vladimir,<br/> web developer</h2>
                <img src={myPortrait} alt="Portrait of ugly me" className="home__portrait" width="310" height="auto"/>
                <div className="home__links-wrapper">
                    <a href="#slide-4" className="home__button">Hire me</a>
                    <a href="Resume-Volodymyr-Nofenko.pdf" target="_blank" className="home__button">Resume</a>
                </div>
            </div>
            <div className="home__links">
                <a href="https://www.linkedin.com/in/vnofenko/"
                   className="home__link--linkedin link-button">
                    <img src={linkedinImg} alt="linkedin icon" width="30"/>
                    <span>linkedin</span>
                </a>
                <a href="#slide-2" className="button home__link--portfolio">Portfolio</a>
                <a href="https://github.com/kisikmisik"
                   className="home__link--github link-button">
                    <img src={githubImg} alt="github icon" width="35"/>
                    <span>github</span>
                </a>
            </div>
            <div className="home__swipe-wrapper">
                <span className="home__swipe">Swipe up</span>
            </div>
        </section>
    )
}

export default HomeSlide