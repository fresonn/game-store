import { combineReducers } from "redux"
import header from "./reducers/header"
import auth from "./reducers/authorization"
import market from "./reducers/market"

export default combineReducers({
    header,
    auth,
    market,
})