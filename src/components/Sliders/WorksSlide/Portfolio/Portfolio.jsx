import React, {useState} from "react";
import Project from "./Project/Project";
import styles from "./Portfolio.scss"
import ProjectPopup from "./Project/ProjectPopup/ProjectPopup";

let Portfolio = (props) => {
    let [isProjectPopupVisible, changeProjectPopupStatus] = useState(false)
    let [clickedProject, changeClickedProject] = useState(null)

    let showProjectPopup = (projectName) => {
        let clickedProject = props.projects.filter(project => project.title === projectName)
        changeClickedProject(clickedProject)
        changeProjectPopupStatus(true)
    }

    return (
        <ul className="works__portfolio portfolio">
            {props.projects.map(project => <Project key={project.id}
                                                    imageLink={project.smallImage}
                                                    showProjectPopup={showProjectPopup}
                                                    title={project.title} />)}
            {isProjectPopupVisible &&
                <ProjectPopup changeProjectPopupStatus={changeProjectPopupStatus}
                                clickedProject={clickedProject[0]}/>}
        </ul>
    )
}
export default Portfolio