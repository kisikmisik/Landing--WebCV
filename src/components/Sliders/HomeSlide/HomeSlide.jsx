import React, {useState} from "react";
import styles from "./HomeSlide.scss"
import myPortrait from "../../../assets/img/me2.png"
import linkedinImg from "../../../assets/img/linkedin.svg"
import githubImg from "../../../assets/img/github.svg"
import {useSpring, animated} from 'react-spring';

let HomeSlide = (props) => {
    const [animProps, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
    const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
    return (
        <section id="slide-1" className="home slide slide--1">
            <div className="home__top-wrapper">
                <h2 className="home__title">Hi<br/> I am Vladimir<br/>
                    <a target="_blank"
                                href="https://en.wikipedia.org/wiki/Web_developer">web developer</a>
                </h2>
                <img src={myPortrait} alt="Portrait of ugly me" className="home__portrait" width="310" height="auto"/>
                <div className="home__links-wrapper">
                    <a href="#slide-4" className="home__button"><span>Hire me</span></a>
                    <a href="Resume-Volodymyr-Nofenko.pdf" target="_blank" className="home__button"><span>Resume</span></a>
                </div>
            </div>
            <div className="home__links">
                <a target="_blank" href="https://www.linkedin.com/in/vnofenko/"
                   className="home__link--linkedin link-button">
                    <img src={linkedinImg} alt="linkedin icon" width="30"/>
                    <span>linkedin</span>
                </a>
                <animated.a onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                            onMouseLeave={() => set({ xys: [0, 0, 1] })}
                            style={{ transform: animProps.xys.interpolate(trans) }} href="#slide-2" className="button home__link--portfolio">Portfolio</animated.a>
                <a target="_blank" href="https://github.com/kisikmisik"
                   className="home__link--github link-button">
                    <img src={githubImg} alt="github icon" width="35"/>
                    <span>github</span>
                </a>
            </div>
        </section>
    )
}

export default HomeSlide