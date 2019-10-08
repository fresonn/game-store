import React, { useState } from "react"
import classes from "./Market.module.scss"
import Product from "../../components/Product/Product"
import CheckoutModal from "../../ui/CheckoutModal/CheckoutModal"
import { connect } from "react-redux"
import { Container, Row } from "react-bootstrap"
import * as cart from "../../redux/actions/cartAction"

const Market = props => {

    const [modalShow, setModalShow] = useState(false)
    const [modalData, setModalData] = useState(null)


    console.log(props)

    const { allGoods, addProduct} = props

    const cartHandler = product => {
        console.log(product)
        addProduct(product)
        setModalData({...product})
        setModalShow(true)
    }

    const modalHandler = () => {
        setModalShow(!modalShow)
    }

    const redirectHandler = () => {
        props.history.push("/cart")
    }

    return (
        <section className={classes.market_section}>
            <Container fluid>
                <Row className={classes.products_row} noGutters as="ul">
                    {
                        allGoods.map(product => {
                            return (
                                <Product 
                                    key={product.code}
                                    title={product.title}
                                    img={product.img}
                                    price={product.price}
                                    code={product.code}
                                    addToCart={cartHandler}
                                />
                            )
                        })
                    }
                </Row>
            </Container>
            <CheckoutModal 
                show={modalShow}
                onHide={modalHandler}
                goToCart={redirectHandler}
                data={modalData}
            />
        </section>
    )
}

const mapStateToProps = state => {
    const  { market } = state 
    return {
        allGoods: market.allGoods
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addProduct: product => dispatch(cart.addToCard(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Market)