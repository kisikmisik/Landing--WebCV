import React from "react";
import styles from "./SideNav.scss"
import {useSpring, animated} from 'react-spring';

let SideNav = (props) => {
    const animProps = useSpring({opacity: 1, marginLeft: 0, from: {opacity: 0, marginLeft: -500}, config: {duration: 1000}})
    return (
        <animated.nav className="side-nav" style={animProps}>
            <ol className="side-nav__list">
                {props.navItems.map(item => <NavItem currentSlide={props.currentSlide}
                                                     name={item.name}
                                                     number={item.itemNumber}
                                                     changeCurrentSlide={props.changeCurrentSlide}
                                                     key={item.name}/>)}
            </ol>
        </animated.nav>
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

