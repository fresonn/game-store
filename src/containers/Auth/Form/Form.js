import React from "react"
import { Link } from "react-router-dom"
import classes from "./Form.module.scss"
import {
    Form,
    Button
} from "react-bootstrap"

const FormComponent = props => {

    return (
        <section className={classes.form_section}>
            <div className={classes.form}>
                <div>
                    <Form>
                        <div className={classes.form_title}>
                            <h3>Log In</h3>
                            {/* <p>or sign in to your account</p> */}
                            <p>or <Link to="/signup">sign up</Link> here</p>
                        </div>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>
                                <i className="far fa-envelope" />
                                Email address
                            </Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>
                                <i className="fas fa-lock" />
                                Password
                            </Form.Label>
                            <Form.Control type="password" placeholder="Password"/>
                            <Form.Text as="div">
                                <p className={classes.sub_info}>
                                    Your password must be at least 8 characters long
                                </p>
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Button 
                                className={classes.subm_btn}
                                type="submit"
                            >Log in</Button>    
                        </Form.Group>   
                    </Form>
                </div>
            </div>
        </section>

    )
}

export default FormComponent