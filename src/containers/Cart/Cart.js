import React from "react"
import classes from "./Cart.module.scss"
import AllOrders from "./AllOrders/AllOrders"
import OrdersInfo from "./OrdersInfo/OrdersInfo"
import * as cart from "../../redux/actions/cartAction"
import { Container, Row } from "react-bootstrap"
import { connect } from "react-redux"
import EmptyCart from "../../components/EmptyCart/EmptyCart"

const Cart = props => {

    const { allGoods, removeProduct } = props

    const totalSum = allGoods.reduce((sum, product) => {
        return sum += product.price
    }, 0)

    return (
        <section className={classes.cart}>
            <h1 className={classes.title}>My cart:</h1>
            <Container fluid className={classes.car_container}>
            {
                allGoods.length === 0 ? <EmptyCart /> :
                    <Row>
                        <AllOrders
                            allGoods={allGoods}
                            removeHandler={removeProduct}
                        />
                        <OrdersInfo total={totalSum} />
                    </Row>
            }
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
        removeProduct: code => dispatch(cart.removeItemFromCart(code))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)