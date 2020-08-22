import React from "react";

let ProjectPopup = (props) => {
    return (
        <article className="portfolio__item-popup project visually-hidden">
            <img src="#" alt="project preview" className="project__preview"/>
            <div className="project__right-section">
                <h3 className="project__title">Vladimir Nofenko | Web developer | Portfolio</h3>
                <p className="project__about">
                    This website is a showcase of my recent
                    projects as a Front-end Web Developer and as UI/UX designer.
                </p>
                <h4 className="project__stack-title">Technical Sheet</h4>
                <p className="project__stack-desc">
                    Code technologies and skills I
                    got involved with while working on this project:
                </p>
                <ul className="project__stack-list">
                    <li className="project__stack-item">React.js</li>
                    <li className="project__stack-item">Redux, React-redux</li>
                    <li className="project__stack-item">Sass</li>
                </ul>
                <div className="project__links">
                    <a target="_blank" href="#" className="project__link-visit link-button">Visit
                        the Website</a>
                    <a target="_blank"
                       href="https://github.com/kisikmisik/Landing--WebCV"
                       className="project__link-code link-button">Source code</a>
                </div>
            </div>
            <button className="project__close">x</button>
        </article>
    )
}
let ProjectPreview = (props) => {
    return (
        <>
            <button className="portfolio__item-view">View project</button>
            <ul className="portfolio__item-stack">
                <li className="portfolio__item-tech">Webapp</li>
                <li className="portfolio__item-tech">HTML5</li>
                <li className="portfolio__item-tech">Sass</li>
                <li className="portfolio__item-tech">Animations</li>
                <li className="portfolio__item-tech">UI/UX design</li>
            </ul>
        </>
    )
}

let Project = (props) => {
    return (
        <li className="portfolio__item">
            <ProjectPreview/>
            <ProjectPopup/>
        </li>
    )
}
export default Project
