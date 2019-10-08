import React from "react"
import classes from "./Cart.module.scss"
import AllOrders from "./AllOrders/AllOrders"
import OrdersInfo from "./OrdersInfo/OrdersInfo"
import { Container, Row } from "react-bootstrap"
import { connect } from "react-redux"

const Cart = props => {

    const { allGoods } = props

    return (
        <section className={classes.cart}>
            <h1 className={classes.title}>My cart:</h1>
            <Container fluid className={classes.car_container}>
                <Row>
                    <AllOrders
                        allGoods={allGoods}
                    />
                    <OrdersInfo />
                </Row>
            </Container>
        </section>
    )
}

const mapStateToProps = state => {
    const  { cart } = state 
    return {
        allGoods: cart.allGoods
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addProduct: product => dispatch(product)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)