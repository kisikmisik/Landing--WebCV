import React from "react";
import styles from "./SideNav.scss"

let SideNav = (props) => {
    return (
        <nav className="side-nav">
            <ol className="side-nav__list">
                {props.navItems.map(item => <NavItem currentSlide={props.currentSlide}
                                                     name={item.name}
                                                     number={item.itemNumber}
                                                     changeCurrentSlide={props.changeCurrentSlide}
                                                     key={item.name}/>)}
            </ol>
        </nav>
    )
}

let NavItem = (props) => {
    let ifNavItemActive = () => {
      if (props.currentSlide === props.number)  {
          return 'active'
      } else {
          return ''
      }
    }
    return (
        <li className={'side-nav__item ' + ifNavItemActive()}>
            <span>{props.number}</span>
            <a href={'#slide-' + props.number}>{props.name}</a>
        </li>
    )
}
export default SideNav;

