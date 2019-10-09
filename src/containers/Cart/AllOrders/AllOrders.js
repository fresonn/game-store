import React from "react"
import classes from "./AllOrders.module.scss"
import { Col, Row } from "react-bootstrap"
import test from "../../../assets/rastr/goods/battlefield_v_ps4.jpg"

const AllOrders = props => {

    const { allGoods, removeHandler } = props 

    return (
        <Col
            xs={12}
            md={8}
            className="order-1 order-md-0"
        >
            <ul className={classes.cart_list} >
                {
                    allGoods.reverse().map((product, ind) => {
                        return (
                            <Row 
                                key={ind} 
                                as="li"
                                className={classes.cart_item}
                            >
                                <Col sm={3}>
                                    <div className={classes.img_box}>
                                        <img src={test} alt={product.title}/>
                                    </div>
                                </Col>
                                <Col sm={9}>
                                    <p className={classes.product_name}>{ product.title }</p>
                                    <p className={classes.code}>
                                        Code:&nbsp;
                                        <span>{ product.code }</span>
                                    </p>
                                    <p className={classes.product_price}>
                                        Price:&nbsp;
                                        <span>{ product.price }</span>
                                        <i className="fas fa-dollar-sign" />
                                    </p>
                                    <button
                                        className={classes.remove_btn}
                                        onClick={() => removeHandler(product.code)}
                                    >
                                        <i className="fas fa-trash" />
                                    </button>
                                </Col>
                            </Row>
                        )
                    })
                }
            </ul>
        </Col>
    )
}

export default AllOrders