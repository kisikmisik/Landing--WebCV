import React, {useState} from "react";
import Filters from "./Filters/Filters";
import Portfolio from "./Portfolio/Portfolio";
import styles from "./WorksSlide.scss"

let WorksSlide = (props) => {
    let [currentFilter, changeCurrentFilter] = useState('Show all')
    let [isMobileFiltersVisible, changeMobileFiltersVisibility] = useState(false)
    let [currentMobileFilterLabel, changeCurrentMobileFilterLabel] = useState("Filters")

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
            <div className="works__top-wrapper">
                <h2 className="works__title">Portfolio</h2>
                <button onClick={() => {changeMobileFiltersVisibility(true)}}
                        className="works__filter-button button" disabled={isMobileFiltersVisible}>{currentMobileFilterLabel}</button>
                <div className="works__swipe-wrapper">
                    <span className="works__swipe">Swipe left for more</span>
                </div>

                {isMobileFiltersVisible || document.documentElement.clientWidth > 750 ?
                    <Filters changeMobileFiltersVisibility={changeMobileFiltersVisibility}
                             changeCurrentFilter={changeCurrentFilter}
                             filters={props.filters}
                             changeCurrentMobileFilterLabel={changeCurrentMobileFilterLabel}/>
                    : <span/>}
            </div>



            <Portfolio currentFilter={currentFilter} projects={filterProjects()}/>
        </section>
    )
}

export default WorksSlide