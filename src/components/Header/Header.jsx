import React from "react";
import styles from "../Header/Header.scss"

let Header = (props) => {
    return (
        <header className="header">
            <h1 className="hidden">Front-end developer, UI/UX specialist web resume, work and projects</h1>
            <div className="header__burger">
                <nav className="main-nav">
                    <ul className="main-nav__list">
                        <li className="main-nav__item"><a href="#home">Home</a></li>
                        <li className="main-nav__item"><a href="#works">Works</a></li>
                        <li className="main-nav__i+tem"><a href="#contact">Contact</a></li>
                        <li className="main-nav__item"><a href="#hireMe">Hire me</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header

