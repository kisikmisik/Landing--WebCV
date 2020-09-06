import React from "react";
import HomeSlide from "./HomeSlide/HomeSlide";
import WorksSlide from "./WorksSlide/WorksSlide";
import ContactSlide from "./ContactSlide/ContactSlide";
import HireSlide from "./HireSlide/HireSlide";
import styles from "./Sliders.scss"

let Sliders = (props) => {
    return (
        <main id='mainSliders' className="main">
            <HomeSlide/>
            <WorksSlide projects={props.projects} filters={props.filters}/>
            <ContactSlide/>
            <HireSlide/>
        </main>
    )
}

export default Sliders;

