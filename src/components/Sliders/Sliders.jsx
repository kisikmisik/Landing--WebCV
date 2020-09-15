import React from "react";
import HomeSlide from "./HomeSlide/HomeSlide";
import WorksSlide from "./WorksSlide/WorksSlide";
import ContactSlide from "./ContactSlide/ContactSlide";
import HireSlide from "./HireSlide/HireSlide";
import styles from "./Sliders.scss"
import {useSpring, animated} from 'react-spring';

let Sliders = (props) => {
    const animProps = useSpring({opacity: 1, marginTop: -30,
        from: {opacity: 0, marginTop: -1000}, config: {duration: 800}})
    return (
        <animated.main id='mainSliders' className="main" style={animProps}>
            <HomeSlide/>
            <WorksSlide projects={props.projects} filters={props.filters}/>
            <ContactSlide/>
            <HireSlide/>
        </animated.main>
    )
}

export default Sliders;

