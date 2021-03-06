import React from "react";
import styles from "./OuterNav.scss"

let OuterNav = (props) => {
    return (
        <nav className={props.isOuterMenu ? "main nav" : "main nav visually-hidden"}>
            <ul className="main-nav__list">
                {props.navItem.map(el => <NavItem key={el.name} currentSlide={props.currentSlide}
                                                  name={el.name}
                                                  number={el.itemNumber}
                                                  changeOuterMenuStatus={props.changeOuterMenuStatus} />)}
            </ul>
        </nav>
    )
}

let NavItem = (props) => {
    let isSelected = () => {
        if (props.number === props.currentSlide) {
            return "active"
        } else {
            return ""
        }
    }
    let hideOuterMenu = () => {setTimeout(()=> {props.changeOuterMenuStatus(false)}, 700)
    }
    return (
        <li onClick={hideOuterMenu}
            className={"main-nav__item " + isSelected()}>
            <a href={"#slide-" + props.number}>{props.name}</a>
        </li>
    )
}
export default OuterNav;