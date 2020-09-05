import React from "react";
import Filters from "./Filters/Filters";
import Portfolio from "./Portfolio/Portfolio";
import styles from "./WorksSlide.scss"

let WorksSlide = (props) => {
    return (
        <section id="slide-2" className="works slide slide--2">
            <h2 className="works__title">Portfolio</h2>
            <Filters/>
            <Portfolio projects={props.projects}/>
        </section>
    )
}

export default WorksSlide