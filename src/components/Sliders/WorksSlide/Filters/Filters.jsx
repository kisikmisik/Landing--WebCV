import React from "react";
import styles from "./Filters.scss"

let Filters = (props) => {
    return (
        <div className="works__filters filters">
            <button className="filters__filter button">Show all</button>
            <button className="filters__filter button">React.js</button>
            <button className="filters__filter button">JavaScript</button>
            <button className="filters__filter button">Less</button>
            <button className="filters__filter button">Sass</button>
            <button className="filters__filter button">Canvas</button>
        </div>
    )
}
export default Filters