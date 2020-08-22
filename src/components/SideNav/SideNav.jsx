import React from "react";

let SideNav = (props) => {
    return (
        <nav className="side-nav">
            <ol className="side-nav__list">
                <li className="side-nav__item">Home</li>
                <li className="side-nav__item">Works</li>
                <li className="side-nav__item">Contact</li>
                <li className="side-nav__item">Hire me</li>
            </ol>
        </nav>
    )
}
export default SideNav;

