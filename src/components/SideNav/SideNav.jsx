import React from "react";
import styles from "./SideNav.scss"

let SideNav = (props) => {
    return (
        <nav className="side-nav">
            <ol className="side-nav__list">
                <li className="side-nav__item active">
                    <span>1</span>
                    <span>Home</span>
                </li>
                <li className="side-nav__item">
                    <span>2</span>
                    <span>Works</span>
                </li>
                <li className="side-nav__item">
                    <span>3</span>
                    <span>Contact</span>
                </li>
                <li className="side-nav__item">
                    <span>4</span>
                    <span>Hire me</span>
                </li>
            </ol>
        </nav>
    )
}
export default SideNav;

