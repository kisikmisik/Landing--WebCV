import React from "react";
import Project from "./Project/Project";
import styles from "./Portfolio.scss"
import ProjectPopup from "./Project/ProjectPopup/ProjectPopup";

let Portfolio = (props) => {
    return (
        <ul className="works__portfolio portfolio">
            {/*Here will be maped all the portfolios*/}
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <ProjectPopup/>
        </ul>
    )
}
export default Portfolio