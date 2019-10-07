import React from "react"
import classes from "./Cart.module.scss"
import AllOrders from "./AllOrders/AllOrders"
import OrdersInfo from "./OrdersInfo/OrdersInfo"
import { Container, Row } from "react-bootstrap"

const Cart = props => {

    return (
        <section className={classes.cart}>
            <h1 className={classes.title}>My shopping cart</h1>
            <Container fluid className={classes.car_container}>
                <Row>
                    <AllOrders />
                    <OrdersInfo />
                </Row>
            </Container>
        </section>
    )
}

export default Cart