import { combineReducers } from "redux";
import modalReducer from "./AmountReducers.js";
import Data from "./UserData.js";


const Reducers = combineReducers({
    amount: modalReducer,
    UserData:Data
})

export default Reducers
