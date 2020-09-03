import mainReducer from "./mainReducer";
import {combineReducers, createStore} from "redux";

let reducers = combineReducers({
    mainReducer: mainReducer
})

let store = createStore(reducers)
export default store;