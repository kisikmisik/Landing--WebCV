import React from "react";
import styles from "../Header/Header.scss"
import burgerImage from "../../assets/img/menu.svg"
import {useSpring, animated} from 'react-spring';

let Header = (props) => {
    const animProps = useSpring({opacity: 1, marginTop: 0, from: {opacity: 0, marginTop: -500}, config: {duration: 1500}})
    return (
        <animated.header className="header" style={animProps}>
            <h1 className="visually-hidden">Front-end developer, UI/UX specialist web resume, work and projects</h1>
            {/*<a href="#slide-4" className="hire-me__submit">Hire me</a>*/}
            <div className="header__burger" id="showMenu">
                <img onClick={() => {
                    props.changeOuterMenuStatus(true)
                }}
                     className="header__burger-image" src={burgerImage} alt="Menu" width="35"/>
            </div>
        </animated.header>
    )
}

export default Header

