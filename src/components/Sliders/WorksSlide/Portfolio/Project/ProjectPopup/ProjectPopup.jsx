import React from "react";
import styles from "./ProjectPopup.scss"

let ProjectPopup = (props) => {
    return (
        <article className="portfolio__item-popup project">
            <div className="project__wrapper">
                <img src={props.projects[props.clickedProjectId].bigImage}
                     alt="project preview project__left-section" className="project__preview" width="100%"/>
                <div className="project__right-section">
                    <h3 className="project__title">{props.projects[props.clickedProjectId].title}</h3>
                    <p className="project__about">{props.projects[props.clickedProjectId].about}</p>
                    <h4 className="project__stack-title">Technical Sheet</h4>
                    <p className="project__stack-desc">
                        Code technologies and skills I
                        got involved with while working on this project:
                    </p>
                    <ul className="project__stack-list">
                        {props.projects[props.clickedProjectId].stack.map(el => {
                            return <li className="project__stack-item">{el}</li>
                        })}
                    </ul>
                    <div className="project__links">
                        <a target="_blank" href={props.projects[props.clickedProjectId].siteLink}
                           className="project__link-visit link-button">Visit
                            the Website</a>
                        <a target="_blank"
                           href={props.projects[props.clickedProjectId].sourceLink}
                           className="project__link-code link-button">Source code</a>
                    </div>
                </div>
                <button onClick={() => props.changeProjectPopupStatus(false)} className="project__close"/>
            </div>
        </article>
    )
}
export default ProjectPopup;