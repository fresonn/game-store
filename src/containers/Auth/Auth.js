import React from "react"
import classes from "./Auth.module.scss"
import Form from "./Form/Form"

const Auth = props => {
    return (
        <div className={classes.auth}>
            <Form />
        </div>
    )
}

export default Auth