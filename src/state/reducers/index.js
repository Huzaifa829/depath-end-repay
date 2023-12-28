import { combineReducers } from "redux";
import modalReducer from "./AmountReducers.js";
import Data from "./UserData.js";
import Add_Adversaries from "./addAdversaries.js";


const Reducers = combineReducers({
    amount: modalReducer,
    UserData:Data,
    Adversaries:Add_Adversaries,
})

export default Reducers
