import * as AT from "../actionTypes"
import axios from "axios"

export const startAuth = () => ({
    type: AT.START_AUTH
})

export const endOfAuth = () => ({
    type: AT.END_OF_AUTH
})

export const authError = error => ({
    type: AT.AUTH_ERROR,
    payload: error
})

export const successfulAuth = data => {
    return {
        type: AT.SUCCESSFUL_AUTH,
        payload: data
    }
}

export const logOut = () => ({
    type: AT.LOG_OUT
})

export const makeAuth = (userData, loginMode) => {
    return dispatch => {
        // визуализация загрузки
        dispatch(startAuth())
        const apiKey = "AIzaSyBnqdXDys8ALrretHpTvPIyI8tytAKy-J8"
        let endPoint = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`
        if (!loginMode) {
            // Если форма отдаст режим регистрации, тогда этот api
            endPoint = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`
        }

        const postObject = {...userData, returnSecureToken: true}
        
        axios.post(endPoint, postObject)
            .then(resp => {
                dispatch(endOfAuth())
                console.log(resp)
                dispatch(successfulAuth({
                    token: resp.data.idToken,
                    userId: resp.data.localId
                }))
            })
            .catch(err => {
                const message = err.response.data.error.message
                dispatch(endOfAuth())
                dispatch(authError(message))
                console.log(err.response.data.error.message)
            })
    }
}