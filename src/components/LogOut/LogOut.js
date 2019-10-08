import React, { useEffect } from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import * as auth from "../../redux/actions/authAction"

const LogOut = props => {

    useEffect(() => {
        props.logOut()
    }, [props])

    return <Redirect to="/login" />
}

const mapDispatchToProps = dispatch => {
    return {
        logOut: () => dispatch(auth.logOut())
    }
}

export default connect(null, mapDispatchToProps)(LogOut)