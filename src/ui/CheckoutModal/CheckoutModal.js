import React from "react"
import classes from "./CheckoutModal.module.scss"
import { Modal, Button, Container, Row, Col } from "react-bootstrap"
import test from "../../assets/rastr/goods/mafia_3_ps4.jpg"


const CheckoutModal = props => {
    const { 
        data,
        show,
        onHide,
        goToCart
    } = props

    const fromData = {...data}

    console.log(props)
    return (
        <Modal
            show={show}
            size="md"
            centered
            onHide={onHide}
        >
            <Modal.Header className={classes.modal_header} closeButton>
                <h1 className={classes.modal_title}>New product in your cart:</h1>
            </Modal.Header>
            <Modal.Body>
                <Container fluid>
                    <Row>
                        <Col
                            xs={12}
                            sm={4}
                            className="p-0"
                        >
                            <div className={classes.img_box}>
                                <img src={test} alt="sdcds"/>
                            </div>
                        </Col>
                        <Col
                            className="p-0 pl-md-2"
                            xs={12}
                            sm={8}
                        >
                            <h3 className={classes.product_title}>
                                { fromData.title }
                            </h3>
                            <p>
                                Price:&nbsp;
                                <span>{fromData.price}</span>
                                <i className="fas fa-dollar-sign" />
                            </p>
                            <p>
                                code:&nbsp;
                                <span className={classes.code}>
                                    {fromData.code}
                                </span>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer className="flex-wrap justify-content-center justify-content-sm-end">
                <Button onClick={onHide}>Сontinue shopping</Button>
                <Button variant="success" onClick={goToCart}>Go to cart</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CheckoutModal