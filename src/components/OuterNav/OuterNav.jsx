import React from "react";
import styles from "./OuterNav.scss"

let OuterNav = (props) => {
    return (
        <nav className={props.isOuterMenu ? "main nav" : "main nav visually-hidden"}>
            <ul className="main-nav__list">
                {props.navItem.map(el => <NavItem currentSlide={props.currentSlide}
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
    return (
        <li onClick={()=>{props.changeOuterMenuStatus(false)}}
            className={"main-nav__item " + isSelected()}>
            <a href={"#slide-" + props.number}>{props.name}</a>
        </li>
    )
}
export default OuterNav;