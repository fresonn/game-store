import * as AT from "../actionTypes"

const initialState = {
    isUserAuthorized: true,
    loading: false,
    error: null,
    token: null,
    userId: null
}


export default (state = initialState, action) => {
    switch (action.type) {
        case AT.START_AUTH:
            return {
                ...state,
                loading: true
            }
        case AT.END_OF_AUTH:
            return {
                ...state,
                loading: false
            }
        case AT.AUTH_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case AT.SUCCESSFUL_AUTH:
            return {
                ...state,
                error: null,
                isUserAuthorized: true,
                token: action.payload.token,
                userId: action.payload.userId
            }
        case AT.LOG_OUT:
            return {
                isUserAuthorized: false,
                loading: false,
                error: null,
                token: null,
                userId: null
            }
        default:
            return state
    }
}