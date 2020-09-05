import React, {useState} from "react";
import Project from "./Project/Project";
import styles from "./Portfolio.scss"
import ProjectPopup from "./Project/ProjectPopup/ProjectPopup";

let Portfolio = (props) => {
    let [isProjectPopupVisible, changeProjectPopupStatus] = useState(false)
    let [clickedProjectId, changeClickedProjectId] = useState(null)

    let showProjectPopup = (projectId) => {
        changeClickedProjectId(projectId)
        changeProjectPopupStatus(true)
    }
    return (
        <ul className="works__portfolio portfolio">
            {props.projects.map(project => <Project
                key={project.id}
                id={project.id}
                imageLink={project.smallImage}
                showProjectPopup={showProjectPopup} />)}
            {isProjectPopupVisible && <ProjectPopup changeProjectPopupStatus={changeProjectPopupStatus}
                                                    projects={props.projects}
                                                    clickedProjectId={clickedProjectId}/>}
        </ul>
    )
}
export default Portfolio