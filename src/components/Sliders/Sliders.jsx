import React from "react";
import HomeSlide from "./HomeSlide/HomeSlide";
import WorksSlide from "./WorksSlide/WorksSlide";
import ContactSlide from "./ContactSlide/ContactSlide";
import HireSlide from "./HireSlide/HireSlide";
import styles from "./Sliders.scss"

let Sliders = (props) => {
    return (
        <main className="main">
            <HomeSlide/>
            <WorksSlide/>
            <ContactSlide/>
            <HireSlide/>
        </main>
    )
}

export default Sliders;

