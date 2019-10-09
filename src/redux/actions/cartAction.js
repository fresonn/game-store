import * as AT from "../actionTypes"

export const addToCard = product => ({
    type: AT.ADD_TO_CARD,
    payload: product
})

export const removeItemFromCart = code => ({
    type: AT.REMOVE_ITEM_FROM_CART,
    payload: code
})