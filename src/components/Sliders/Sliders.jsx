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
        <animated.main  className="main" style={animProps}>
            <div id='mainSliders' className="main__sliders-wrapper">
                <HomeSlide/>
                <WorksSlide projects={props.projects} filters={props.filters}/>
                <ContactSlide/>
                <HireSlide/>
            </div>

        </animated.main>
    )
}

export default Sliders;

