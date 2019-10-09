import React from "react"
import classes from "./EmptyCart.module.scss"
import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import emptyBox from "../../assets/svg/empty-box.svg"

const EmptyCart = props => {
    
    return (
        <section className={classes.empty_cart}>
            <Row>
                <Col>
                    <div className={classes.img_wrapper}>
                        <img src={emptyBox} alt="Nothing added to cart"/>   
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={classes.info}>
                        <h3>Nothing added to cart :(</h3>
                        <p>
                            add some at <Link to="/market">market</Link>
                        </p>
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default EmptyCart