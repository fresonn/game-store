import * as AT from "../actionTypes"


export const addToCard = product => ({
    type: AT.ADD_TO_CARD,
    payload: product
})