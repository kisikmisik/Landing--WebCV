import React from "react";
import styles from "../Header/Header.scss"
import burgerImage from "../../assets/img/menu.svg"

let Header = (props) => {
    return (
        <header className="header">
            <h1 className="visually-hidden">Front-end developer, UI/UX specialist web resume, work and projects</h1>
            {/*<a href="#slide-4" className="hire-me__submit">Hire me</a>*/}
            <div className="header__burger" id="showMenu">
                <img onClick={() => {props.changeOuterMenuStatus(true)}}
                     className="header__burger-image" src={burgerImage} alt="Menu" width="35"/>
            </div>
        </header>
    )
}

export default Header

