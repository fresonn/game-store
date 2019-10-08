const initialState = {
    navItems: [
        { text: "Market", path: "/market" },
        { text: "Cart", path: "/cart" },
        { text: "Log Out", path: "/logout" },
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}