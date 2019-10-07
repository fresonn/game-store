import React, { useState } from "react"
import classes from "./Home.module.scss"
import CheckoutModal from "../../ui/CheckoutModal/CheckoutModal"

const Home = props => {

    const [modalShow, setModalShow] = useState(false)

    const modalHandler = () => {
        setModalShow(!modalShow)
    }

    return (
        <div className={classes.home}>
            <h1>Home</h1>
            <button onClick={modalHandler}>open</button>
            <CheckoutModal show={modalShow} onHide={modalHandler}/>
        </div>
    )
}

export default Home