import * as AT from "../actionTypes"

const initialState = {
    totalSum: 0,
    allGoods: [] // имеет схему объекта, идентичную схеме товара в марките
}

export default (state = initialState, action) => {
    switch(action.type) {
        case AT.ADD_TO_CARD:
            const allGoodsWithNewProduct = [...state.allGoods, {...action.payload}]
            return {
                ...state,
                allGoods: allGoodsWithNewProduct

            }
        default:
            return state
    }
}