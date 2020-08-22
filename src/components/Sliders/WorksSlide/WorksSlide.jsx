import React from "react";
import Filters from "./Filters/Filters";
import Portfolio from "./Portfolio/Portfolio";

let WorksSlide = (props) => {
    return (
        <section className="works slide slide--2">
            <h2 className="works__title">Portfolio</h2>
            <Filters/>
            <Portfolio/>
        </section>
    )
}

export default WorksSlide