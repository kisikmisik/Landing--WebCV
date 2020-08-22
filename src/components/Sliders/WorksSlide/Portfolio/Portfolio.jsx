import React from "react";
import Project from "./Project/Project";

let Portfolio = (props) => {
    return (
        <ul className="works__portfolio portfolio">

            {/*Here will be maped all the portfolios*/}
            <Project/>
        </ul>
    )
}
export default Portfolio