const initialState = {
    navItems: [
        { text: "Market", path: "/market" },
        { text: "Cart", path: "/cart" },
        { text: "Log in", path: "/login" },
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}