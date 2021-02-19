import {combineReducers} from "redux";
import appReducer from "./appReducer";

const allReducers = combineReducers({
    users: appReducer,
})

export default allReducers;