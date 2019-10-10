import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import classes from "./Form.module.scss"
import { Formik } from "formik"
import { Button, Form } from "react-bootstrap"
import * as Yup from "yup"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import * as auth from "../../redux/actions/authAction"


const requiredSchema = Yup.object().shape({
    email: Yup.string()
        .email("invalid email")
        .required("This field cannot be empty"),
    password: Yup.string()
        .min(8)
        .matches(new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[!@#$%^&*])"), "password should contain at least one number, symbol and letter")
        .required("This field cannot be empty"),

})

const FormComponent = props => {

    const { loginMode, makeAuth, isLoading, isAuth, isError} = props

    useEffect(() => {
        if (isAuth) {
            props.history.replace("/market")
        }
    })

    const logInHandler = values => {
        saveDataLocal(values)
        makeAuth({...values}, loginMode)
    }

    // по тз
    const saveDataLocal = data => {
        localStorage.authorizationData = JSON.stringify({...data})
    }

    return (
        <section className={classes.form}>
            <div>
                <Formik
                    onSubmit={logInHandler}
                    validationSchema={requiredSchema}
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                >
                    {
                        ({
                            handleSubmit,
                            handleChange,
                            handleBlur,
                            touched,
                            isValid,
                            errors,
                        }) => (
                            // noValidate это для html5
                            <Form noValidate onSubmit={handleSubmit}>
                                <div className={classes.form_title}>
                                    <h3>{ loginMode ? "Log in" : "Sign up" }</h3>
                                    {
                                        loginMode ? 
                                            <p>or <Link to="/signup">sign up</Link> here</p>
                                            :
                                            <p>or <Link to="/login">log in</Link> to your account</p>
                                    }
                                </div>
                                <div>
                                    { isError ? <p className={classes.form_err}>Error: {isError}</p> : null }
                                </div>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>
                                        <i className="far fa-envelope" />
                                        Email address
                                    </Form.Label>
                                    <Form.Control 
                                        onChange={handleChange} // чтобы не использовать Field
                                        onBlur={handleBlur}
                                        name="email" 
                                        type="email" 
                                        placeholder="Enter your email"
                                        isInvalid={touched.email && errors.email}
                                        isValid={touched.email && !errors.email}
                                    />
                                    {/* Фидбек только для ошибок */}
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>
                                        <i className="fas fa-lock" />
                                        Password
                                    </Form.Label>
                                    <Form.Control 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name="password" 
                                        type="password" 
                                        placeholder="Password"
                                        isInvalid={touched.password && errors.password}
                                        isValid={touched.password && !errors.password}
                                    />
                                    {/* Фидбек только для ошибок */}
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>

                                    { !loginMode ?  
                                        <Form.Text as="div">
                                            <p className={classes.sub_info}>
                                                Your password must be at least 8 characters long
                                            </p>
                                        </Form.Text> : null
                                    }
                                </Form.Group>
                                <Form.Group>
                                    <Button 
                                        className={classes.subm_btn}
                                        type="submit"
                                        disabled={isLoading}
                                    >
                                        {
                                            isLoading ?  "Loading…" : loginMode ? "Log in" : "Sign up"
                                        }
                                    </Button>
                                </Form.Group>   
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </section>
    )
}

const mapStateToProps = state => {
    const { auth } = state
    return {
        isLoading: auth.loading,
        isAuth: auth.isUserAuthorized,
        isError: auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        makeAuth: (userData, loginMode) => dispatch(auth.makeAuth(userData, loginMode))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FormComponent))