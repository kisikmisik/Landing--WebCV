import React from "react";
import styles from "./Filters.scss"

let Filters = (props) => {
    let handleFilterClick = (evt) => {
        props.changeCurrentMobileFilterLabel(evt.target.textContent)
        let filters = document.querySelectorAll('.filters__filter')
        for (let i = 0; i < filters.length; i++) {
            if (filters[i].classList.contains('active')) {
                filters[i].classList.remove('active')
            }
        }
        evt.target.classList.add('active')
        if (document.documentElement.clientWidth <= 800) {
            props.changeMobileFiltersVisibility(false)
        }
        return props.changeCurrentFilter(evt.target.textContent)
    }
    return (
        <div className="works__filters filters">
            { props.filters.map(filter => <button key={filter}
                                                  onClick={handleFilterClick}
                                                  className={"filters__filter button"}>{filter}</button>) }
        </div>
    )
}
export default Filters