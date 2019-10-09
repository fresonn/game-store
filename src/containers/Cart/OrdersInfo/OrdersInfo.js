import React from "react"
import classes from "./OrdersInfo.module.scss"
import { Col } from "react-bootstrap"

const OrdersInfo = props => {
    return (
        <Col
            xs={12}
            md={4}
            className="order-0 order-md-1"
        >
            <div className={classes.info}>
                <div className={classes.sub_box}>
                    <span>Total:</span>
                    <span>{props.total} USD</span>
                </div>
            </div>
        </Col>
    )
}

export default OrdersInfo