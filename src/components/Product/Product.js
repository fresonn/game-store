import React from "react"
import classes from "./Product.module.scss"
import Test from "../../assets/rastr/goods/battlefield_v_ps4.jpg"
import { Card, Col, Button } from "react-bootstrap"

const Product = props => {

    const {
        title,
        price
    } = props

    return (
        <Col
            as="li"
            xs={12}
            sm={6}
            md={3}
            lg={2}

        >
            <div className={classes.product_box}>
                <Card className={classes.product}>
                    <img className="card-img-top" src={Test} alt={title}/>
                    <div className={classes.title_box}>
                        <p className={classes.product_title}>{title}</p>
                    </div>
                    <p className={classes.price}>
                        Price:&nbsp;
                        <strong>{price}</strong>
                        <i className="fas fa-dollar-sign" />
                    </p>
                    <Button className={classes.order_btn}>
                        <span>add to cart</span>
                        <i className="fas fa-cart-plus" />
                    </Button>
                </Card>
            </div>
        </Col>
    )
}

export default Product