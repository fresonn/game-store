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

export const resetError = () => ({
    type: AT.RESET_ERROR
})

const clearLocalAuthData = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("lifeOfToken")
    localStorage.removeItem("localId")
    localStorage.removeItem("authorizationData")
}

export const logOut = () => {
    clearLocalAuthData()
    return {
        type: AT.LOG_OUT
    }
}

const checkTime = dateTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logOut())
        }, dateTime * 1000)
    }
}

export const checkMyToken = () => {
    return dispatch => {
        const userToken = localStorage.token
        if (!userToken) {
            dispatch(logOut())
        } else {
            const endOfToken = new Date(localStorage.lifeOfToken)
            // console.log("endOfToken", endOfToken)
            // если время еще не настало
            if (endOfToken > new Date()) {
                dispatch(successfulAuth({
                    token: userToken,
                    userId: localStorage.localId
                }))
                dispatch(checkTime(
                    (endOfToken.getTime() - new Date().getTime() / 1000)
                ))
            } else {
                dispatch(logOut())
            }
        }
    }
}

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
                localStorage.token = resp.data.idToken
                localStorage.localId = resp.data.localId
                // firebase может сохранять токен только 1 час
                const lifeOfToken = new Date(new Date().getTime() + resp.data.expiresIn * 1000)
                // console.log(lifeOfToken)
                localStorage.lifeOfToken = lifeOfToken
                dispatch(successfulAuth({
                    token: resp.data.idToken,
                    userId: resp.data.localId
                }))
                dispatch(checkTime(resp.data.expiresIn))
            })
            .catch(err => {
                const message = err.response.data.error.message
                dispatch(endOfAuth())
                dispatch(authError(message))
                console.log(err.response.data.error.message)
            })
    }
}