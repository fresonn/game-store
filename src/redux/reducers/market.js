import nano from "nanoid"

const initialState = {
    allGoods: []
}

for (let j = 0; j <= 8; j++) {
    initialState.allGoods.push({
        title: "Game One for",
        img: "http/",
        price: 50,
        code: nano(8)
    })
}

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}