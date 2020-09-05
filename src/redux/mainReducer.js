const CHANGE_CURRENT_SLIDE = 'mainReducer/CHANGE-CURRENT-SLIDE'
const CHANGE_OUTER_MENU_STATUS = 'mainReducer/CHANGE_OUTER_MENU_STATUS';
let initialState = {
    currentSlide: 1,
    projects: [
        {
            title: "Vladimir Nofenko | Web developer | Portfolio",
            id: 0,
            bigImage: "projectImages/myWeb.jpg",
            smallImage: "projectImages/myWeb-small.jpg",
            about: "This website is a showcase of my recent projects as a Front-end Web Developer and as UI/UX designer.",
            stack: ["React.js", "redux, react-redux", "sass"],
            sourceLink: "https://github.com/kisikmisik/Landing--WebCV", siteLink: ""
        },
        {
            title: "Social Network",
            id: 1,
            bigImage: "projectImages/socialNetwork.jpg",
            smallImage: "projectImages/socialNetwork-small.jpg",
            about: "Trial social network made to show my skills in building SPA on React.js.",
            stack: ["React.js", "redux, react-redux", "redux-thunk", "redux-form", "axios", "react-test-renderer"],
            sourceLink: "https://github.com/kisikmisik/Study--SocialNetwork",
            siteLink: "https://kisikmisik.github.io/Study--SocialNetwork"
        },
        {
            title: "Online-shop Cat-Energy | adaptive | 3 pages",
            id: 2,
            bigImage: "projectImages/catEnergy.jpg",
            smallImage: "projectImages/catEnergy-small.jpg",
            about: "This was a training project made as part of the front end developer course at htmlacademy.ru " +
                "Pages are adaptive for tablets and smartphones. Adaptive layouts made by media queries",
            stack: ["HTML5", "LESS", "Gulp", "JavaScript"],
            sourceLink: "https://github.com/kisikmisik/Study-project--EnergyCat",
            siteLink: "https://kisikmisik.github.io/Study-project--EnergyCat"
        },
        {
            title: "Online-shop Device | 2 pages",
            id: 3,
            bigImage: "projectImages/device.jpg",
            smallImage: "projectImages/device-small.jpg",
            about: "A first training project made during the course of front-end development at htmlacademy.ru",
            stack: ["HTML5", "LESS", "Gulp", "JavaScript"],
            sourceLink: "https://github.com/kisikmisik/Study-project--Device",
            siteLink: "https://kisikmisik.github.io/Study-project--Device"
        },
        {
            title: "Kekstagram | upload and edit your image",
            id: 4,
            bigImage: "projectImages/kekstagram.jpg",
            smallImage: "projectImages/kekstagram-small.jpg",
            about: "This project is a 'final exam' done as part of the front end developer course at htmlacademy.ru",
            stack: ["JavaScript", "HTML5", "LESS", "Gulp"],
            sourceLink: "https://github.com/kisikmisik/Study-project--Kekstagram",
            siteLink: "https://kisikmisik.github.io/Study-project--Kekstagram"
        },
        {
            title: "Peridona | adaptive landing page",
            id: 5,
            bigImage: "projectImages/peridona.jpg",
            smallImage: "projectImages/peridona-small.jpg",
            about: "Another pet project, typical business landing page, adaptive layouts for tablets and smartphones.",
            stack: ["JavaScript", "HTML5", "LESS", "Gulp"],
            sourceLink: "https://github.com/kisikmisik/Landing--Peridona",
            siteLink: "https://kisikmisik.github.io/Landing--Peridona"
        },
        {
            title: "Scholarship | adaptive landing page",
            id: 6,
            bigImage: "projectImages/scholarship.jpg",
            smallImage: "projectImages/scholarship-small.jpg",
            about: "One of the first freelance projects. Adaptive design made using media queries.",
            stack: ["HTML5", "LESS", "PHP", "Gulp"],
            sourceLink: "https://github.com/kisikmisik/Commercial--Scholarship",
            siteLink: "https://studyup.club/"
        },
        {
            title: "StudyUP | adaptive landing page",
            id: 7,
            bigImage: "projectImages/studyUp.jpg",
            smallImage: "projectImages/studyUp-small.jpg",
            about: "One of the freelance projects. Adaptive layouts done by media queries.",
            stack: ["HTML5", "LESS", "PHP", "Gulp"],
            sourceLink: "https://github.com/kisikmisik/Commercial--StudyUp",
            siteLink: "https://kisikmisik.github.io/Commercial--StudyUp"
        },
        {
            title: "Space Tennis | HTML game",
            id: 8,
            bigImage: "projectImages/tennis.jpg",
            smallImage: "projectImages/tennis-small.jpg",
            about: "My version of one of the first video games in the world. Made using ES6+ tools like classes and promises",
            stack: ["HTML5", "Canvas", "CSS", "Javascript"],
            sourceLink: "https://github.com/kisikmisik/Commercial--StudyUp",
            siteLink: "https://kisikmisik.github.io/Study--SpaceTennis"
        },
        {
            title: "Snake | HTML game",
            id: 9,
            bigImage: "projectImages/snake.jpg",
            smallImage: "projectImages/snake-small.jpg",
            about: "Just classic.",
            stack: ["HTML5", "Canvas", "CSS", "Javascript"],
            sourceLink: "https://github.com/kisikmisik/Study---snake",
            siteLink: "https://kisikmisik.github.io/Study---snake/"
        },
        {
            title: "Kvast | quick-made landing page",
            id: 10,
            bigImage: "projectImages/kvast.jpg",
            smallImage: "projectImages/kvast-small.jpg",
            about: "The point was to make a landing page as fast as possible. This one took 6 hours.",
            stack: ["HTML5", "CSS"],
            sourceLink: "https://github.com/kisikmisik/Study--Kvast",
            siteLink: "https://kisikmisik.github.io/Study--Kvast"
        }
    ],
    navItems: [
        {itemNumber: 1, name: "home"},
        {itemNumber: 2, name: "works"},
        {itemNumber: 3, name: "contact"},
        {itemNumber: 4, name: "hire me"},
    ],
    isOuterMenu: false
}

let mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CURRENT_SLIDE:
            return {
                ...state,
                currentSlide: action.newSlide

            }
        case CHANGE_OUTER_MENU_STATUS:
            return {
                ...state,
                isOuterMenu: action.status

            }
        default:
            return state
    }
}
export const changeCurrentSlide = (newSlide) => ({ type: CHANGE_CURRENT_SLIDE, newSlide})
export const changeOuterMenuStatus = (status) => ({ type: CHANGE_OUTER_MENU_STATUS, status})
export default mainReducer