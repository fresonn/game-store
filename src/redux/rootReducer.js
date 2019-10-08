import { combineReducers } from "redux"
import auth from "./reducers/authorization"
import market from "./reducers/market"
import cart from "./reducers/cart"

export default combineReducers({
    auth,
    market,
    cart
})