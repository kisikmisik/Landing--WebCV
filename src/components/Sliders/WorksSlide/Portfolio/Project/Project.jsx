import React from "react";
import styles from "./Project.scss"

let Project = (props) => {
    return (
        <li onClick={() => props.showProjectPopup(props.title)} className="portfolio__preview-wrapper">
            <img className="portfolio__image" src={props.imageLink} alt="project background" width="100%"/>
            <div className="portfolio__preview-text-wrapper">
                <button className="portfolio__item-view">Details</button>
            </div>
        </li>
    )
}
export default Project
