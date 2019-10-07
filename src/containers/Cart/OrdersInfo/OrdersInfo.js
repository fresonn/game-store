import React from "react"
// import classes from "./OrdersInfo.module.scss"
import { Col, Row } from "react-bootstrap"

const OrdersInfo = props => {
    return (
        <Col
            xs={4}
        >
            <Row>
                <div style={{
                    width: "100%",
                    backgroundColor: "limegreen",
                    height: "130px"
                }}>
                    Info
                </div>
            </Row>
        </Col>
    )
}

export default OrdersInfo