import React, {useState} from "react";
import Filters from "./Filters/Filters";
import Portfolio from "./Portfolio/Portfolio";
import styles from "./WorksSlide.scss"

let WorksSlide = (props) => {
    let [currentFilter, changeCurrentFilter] = useState('Show all')

    let filterProjects = () => {
        let filteredProjects = props.projects;
        let isFilterPass = element => element === currentFilter
        if (currentFilter !== "Show all") {
            filteredProjects = filteredProjects.filter(project => project.stack.some(isFilterPass))
            return filteredProjects
        } else {
            return filteredProjects
        }
    }

    return (
        <section id="slide-2" className="works slide slide--2">
            <h2 className="works__title">Portfolio</h2>
            <Filters changeCurrentFilter={changeCurrentFilter} filters={props.filters}/>
            <Portfolio currentFilter={currentFilter} projects={filterProjects()}/>
        </section>
    )
}

export default WorksSlide