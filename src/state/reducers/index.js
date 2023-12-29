import { combineReducers } from "redux";
import modalReducer from "./AmountReducers.js";
import Data from "./UserData.js";
import Add_Adversaries from "./addAdversaries.js";
import Add_Setteled from "./addSetteled.js";
import Reciv_Adversaries from "./RecivedDataAdv.js";
import Sent_Setteled from "./SentDataAdv.js";


const Reducers = combineReducers({
    amount: modalReducer,
    UserData:Data,
    Adversaries:Add_Adversaries,
    SentDataAdversaries:Sent_Setteled,
    RecivedDataAdversaries:Reciv_Adversaries,
    Setteled:Add_Setteled,
})

export default Reducers
