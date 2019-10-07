import React from "react"
import classes from "./Auth.module.scss"
import Form from "../../components/Form/Form"
import Witcher from "../../assets/rastr/witcher_3.png"

const Singup = props => {    
    return (
        <div 
            style={{backgroundImage: `url(${Witcher})`}}
            className={classes.auth_form}
        >
            <Form loginMode={false} />
        </div>
    )
}

export default Singup