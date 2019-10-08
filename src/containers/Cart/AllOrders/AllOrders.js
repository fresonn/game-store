import React from "react"
import classes from "./AllOrders.module.scss"
import { Col, Row } from "react-bootstrap"

const AllOrders = props => {

    const { allGoods } = props 

    return (
        <Col
            xs={8}
        >
            <Row as="ul" className={classes.cart_list} >
                {
                    allGoods.map(product => {
                        return (
                            <Col
                                sm="12"
                                as="li"
                                key={product.code}
                            >
                                { product.title }
                            </Col>
                        )
                    })
                }
            </Row>
        </Col>
    )
}

export default AllOrders