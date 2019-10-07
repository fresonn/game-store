import React from "react"
import classes from "./Auth.module.scss"
import Form from "../../components/Form/Form"
import Bf1 from "../../assets/rastr/bf_1.jpg"

const Login = props => {    
    return (
        <div 
            style={{backgroundImage: `url(${Bf1})`}}
            className={classes.auth_form}
        >
            <Form loginMode />
        </div>
    )
}

export default Login