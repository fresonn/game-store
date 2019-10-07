import React from "react"
// import classes from "./CheckoutModal.module.scss"
import { Modal, Button } from "react-bootstrap"

// CheckoutModal
export default props => (
    <Modal
        {...props}
        size="lg"
        centered
    >
        <h1>HEd</h1>
        <Button onClick={props.onHide}>Close</Button>
    </Modal>
)