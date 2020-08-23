import React from "react";
import styles from "../Header/Header.scss"
import burgerImage from "../../assets/img/menu.svg"

let Header = (props) => {
    return (
        <header className="header">
            <h1 className="visually-hidden">Front-end developer, UI/UX specialist web resume, work and projects</h1>
            <div className="header__burger">
                <img className="header__burger-image" src={burgerImage} alt="Menu" width="20"/>
                <nav className="main-nav visually-hidden">
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

