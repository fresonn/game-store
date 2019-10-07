import nano from "nanoid"

const initialState = {
    // товары по тз
    allGoods: [
        {
            title: "Mortal Kombat XL",
            price: 44,
            code: nano(8)
        },
        {
            title: "Battlefield V",
            price: 50,
            code: nano(8)
        },
        {
            title: "Call of Duty: Black Ops 3",
            price: 20,
            code: nano(8)
        },
        {
            title: "Fallout 76",
            price: 30,
            code: nano(8)
        },
        {
            title: "Detroit",
            price: 40,
            code: nano(8)
        },
        {
            title: "God of War",
            price: 20,
            code: nano(8)
        },
        {
            title: "Mafia 3",
            price: 27,
            code: nano(8)
        },
        {
            title: "Uncharted 4",
            price: 20,
            code: nano(8)
        },
        {
            title: "Watch Dogs",
            price: 21,
            code: nano(8)
        },
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}