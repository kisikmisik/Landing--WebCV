const CHANGE_CURRENT_SLIDE = 'mainReducer/CHANGE-CURRENT-SLIDE'
const CHANGE_OUTER_MENU_STATUS = 'mainReducer/CHANGE_OUTER_MENU_STATUS';
let initialState = {
    currentSlide: 1,
    filters: ["Show all", "HTML/CSS", "React.js", "JavaScript", "Less", "Sass", "Canvas"],
    projects: [
        {
            title: "Vladimir Nofenko | Web developer | Portfolio",
            id: 0,
            bigImage: "myWeb.jpg",
            smallImage: "myWeb-small.jpg",
            about: "This website is a showcase of my recent projects as a Front-end Web Developer and as UI/UX designer.",
            stack: ["React.js", "Redux, React-redux", "Sass", "JavaScript"],
            sourceLink: "https://github.com/kisikmisik/Landing--WebCV", siteLink: ""
        },
        {
            title: "Social Network",
            id: 1,
            bigImage: "socialNetwork.jpg",
            smallImage: "socialNetwork-small.jpg",
            about: "Trial social network made to show my skills in building SPA on React.js. " +
                "Click 'Source code' to see the instructions how to try it.",
            stack: ["React.js", "Redux, React-redux", "Redux-thunk", "Redux-form", "Axios", "React-test-renderer", "JavaScript"],
            sourceLink: "https://github.com/kisikmisik/Study--SocialNetwork",
            siteLink: "https://kisikmisik.github.io/Study--SocialNetwork"
        },
        {
            title: "Online-shop Cat-Energy | adaptive | 3 pages",
            id: 2,
            bigImage: "catEnergy.jpg",
            smallImage: "catEnergy-small.jpg",
            about: "This was a training project made as part of the front end developer course at htmlacademy.ru " +
                "Pages are adaptive for tablets and smartphones. Adaptive layouts made by media queries",
            stack: ["HTML5", "Less", "Gulp", "JavaScript"],
            sourceLink: "https://github.com/kisikmisik/Study-project--EnergyCat",
            siteLink: "https://kisikmisik.github.io/Study-project--EnergyCat"
        },
        {
            title: "Online-shop Device | 2 pages",
            id: 3,
            bigImage: "device.jpg",
            smallImage: "device-small.jpg",
            about: "A first training project made during the course of front-end development at htmlacademy.ru",
            stack: ["HTML5", "Less", "Gulp"],
            sourceLink: "https://github.com/kisikmisik/Study-project--Device",
            siteLink: "https://kisikmisik.github.io/Study-project--Device"
        },
        {
            title: "Kekstagram | upload and edit your image",
            id: 4,
            bigImage: "kekstagram.jpg",
            smallImage: "kekstagram-small.jpg",
            about: "This project is a 'final exam' done as part of the front end developer course at htmlacademy.ru",
            stack: ["JavaScript", "HTML5", "Less", "Gulp"],
            sourceLink: "https://github.com/kisikmisik/Study-project--Kekstagram",
            siteLink: "https://kisikmisik.github.io/Study-project--Kekstagram"
        },
        {
            title: "Peridona | adaptive landing page",
            id: 5,
            bigImage: "peridona.jpg",
            smallImage: "peridona-small.jpg",
            about: "Another pet project, typical business landing page, adaptive layouts for tablets and smartphones.",
            stack: ["JavaScript", "HTML5", "Less", "Gulp"],
            sourceLink: "https://github.com/kisikmisik/Landing--Peridona",
            siteLink: "https://kisikmisik.github.io/Landing--Peridona"
        },
        {
            title: "Scholarship | adaptive landing page",
            id: 6,
            bigImage: "scholarship.jpg",
            smallImage: "scholarship-small.jpg",
            about: "One of the first freelance projects. Adaptive design made using media queries.",
            stack: ["HTML/CSS", "PHP", "Gulp"],
            sourceLink: "https://github.com/kisikmisik/Commercial--Scholarship",
            siteLink: "https://studyup.club/"
        },
        {
            title: "StudyUP | adaptive landing page",
            id: 7,
            bigImage: "studyUp.jpg",
            smallImage: "studyUp-small.jpg",
            about: "One of the freelance projects. Adaptive layouts done by media queries.",
            stack: ["HTML/CSS", "PHP", "Gulp"],
            sourceLink: "https://github.com/kisikmisik/Commercial--StudyUp",
            siteLink: "https://kisikmisik.github.io/Commercial--StudyUp"
        },
        {
            title: "Space Tennis | HTML game",
            id: 8,
            bigImage: "tennis.jpg",
            smallImage: "tennis-small.jpg",
            about: "My version of one of the first video games in the world. Made using ES6+ tools like classes and promises",
            stack: ["HTML5", "Canvas", "CSS", "JavaScript"],
            sourceLink: "https://github.com/kisikmisik/Commercial--StudyUp",
            siteLink: "https://kisikmisik.github.io/Study--SpaceTennis"
        },
        {
            title: "Snake | HTML game",
            id: 9,
            bigImage: "snake.jpg",
            smallImage: "snake-small.jpg",
            about: "Just classic.",
            stack: ["HTML5", "Canvas", "CSS", "JavaScript"],
            sourceLink: "https://github.com/kisikmisik/Study---snake",
            siteLink: "https://kisikmisik.github.io/Study---snake/"
        },
        {
            title: "Kvast | quick-made landing page",
            id: 10,
            bigImage: "kvast.jpg",
            smallImage: "kvast-small.jpg",
            about: "The point was to make a landing page as fast as possible. This one took 6 hours.",
            stack: ["HTML/CSS"],
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