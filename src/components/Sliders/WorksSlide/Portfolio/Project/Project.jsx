import React from "react";
import MySiteImg from "../../../../../assets/img/catEnergy.jpg"
import styles from "./Project.scss"

let Project = (props) => {
    return (
        <li className="portfolio__preview-wrapper">
            <img className="portfolio__image" src={MySiteImg} alt="my site background" width="225"/>
            <div className="portfolio__preview-text-wrapper">
                <button className="portfolio__item-view">Details</button>
            </div>
        </li>
    )
}
export default Project
