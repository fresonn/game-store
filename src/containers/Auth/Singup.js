import React from "react"
import classes from "./Auth.module.scss"
import Form from "../../components/Form/Form"
import Witcher from "../../assets/rastr/witcher_3.png"

/*
Почему форма регистрации/входа не в одном компоненте?
    1. Я не хочу, чтобы один и тот же компонент рендерился по двум <Route />, а
    затем основывал свое состояние в зависимости от match.path..., даже если он зависит от одного api.
    2. В таком случае форма будет иметь общее состояние, на два пути
*/

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