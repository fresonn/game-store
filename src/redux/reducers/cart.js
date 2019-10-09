import * as AT from "../actionTypes"

const initialState = {
    totalSum: 0,
    allGoods: [], // имеет схему объекта, идентичную схеме товара в марките
}


const localCart = JSON.parse(localStorage.getItem("localCart"))

if (!localCart) {
    console.log("no")
    localStorage.localCart = JSON.stringify([])
} else if (JSON.parse(localStorage.getItem("localCart")).length > 0) {
    initialState.allGoods = [...JSON.parse(localStorage.getItem("localCart"))]
}

export default (state = initialState, action) => {
    switch(action.type) {
        case AT.ADD_TO_CARD:
            const allGoodsWithNewProduct = [...state.allGoods, {...action.payload}]
            const localWithNew = JSON.parse(localStorage.localCart)
            localWithNew.push({...action.payload})
            localStorage.setItem("localCart", JSON.stringify(localWithNew))
            return {
                ...state,
                allGoods: allGoodsWithNewProduct

            }
        case AT.REMOVE_ITEM_FROM_CART:
            const allGoods = state.allGoods.filter(product => product.code !== action.payload)
            let local = JSON.parse(localStorage.localCart)
            local = allGoods
            localStorage.setItem("localCart", JSON.stringify(local))
            return {
                ...state,
                allGoods
            }
        default:
            return state
    }
}