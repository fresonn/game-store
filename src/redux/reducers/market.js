import nano from "nanoid"

const baseImageApi = "https://res.cloudinary.com/dct4oinuz/image/upload/w_480,h_600/v1570451561/ps4/"


const initialState = {
    // товары по тз
    allGoods: [
        {
            title: "Mortal Kombat XL",
            price: 44,
            img: baseImageApi + "mc_xl_ps4_dg8zly.jpg",
            code: nano(8)
        },
        {
            title: "Battlefield V",
            img: baseImageApi + "battlefield_v_ps4_ethhjm.jpg",
            price: 50,
            code: nano(8)
        },
        {
            title: "Call of Duty: Black Ops 3",
            price: 20,
            img: baseImageApi + "callofduty_3_ps4_ir20fr.jpg",
            code: nano(8)
        },
        {
            title: "Fallout 76",
            img: baseImageApi + "fallout_76_ps4_p9dulc.jpg",
            price: 30,
            code: nano(8)
        },
        {
            title: "Detroit",
            img: baseImageApi + "final_fantasy_ps4_shqtcs.jpg",
            price: 40,
            code: nano(8)
        },
        {
            title: "God of War",
            img: baseImageApi + "god_of_war_ps4_x6xetz.jpg",
            price: 20,
            code: nano(8)
        },
        {
            title: "Mafia 3",
            img: baseImageApi + "mafia_3_ps4_xn83iy.jpg",
            price: 27,
            code: nano(8)
        },
        {
            title: "Uncharted 4",
            img: baseImageApi + "uncharted_4_ps4_g3mvyj.jpg",
            price: 20,
            code: nano(8)
        },
        {
            title: "Watch Dogs",
            img: baseImageApi + "watchdog_ps4_lh4z3i.jpg",
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