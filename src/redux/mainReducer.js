const CHANGE_CURRENT_SLIDE = 'mainReducer/CHANGE-CURRENT-SLIDE'
const CHANGE_OUTER_MENU_STATUS = 'mainReducer/CHANGE_OUTER_MENU_STATUS';
let initialState = {
    currentSlide: 1,
    projects: [],
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