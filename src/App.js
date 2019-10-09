import React, { useEffect, lazy, Suspense } from "react"
import "./index.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "./hoc/Layout/Layout"
import { Route, Switch, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import * as cart from "./redux/actions/authAction"
import Loader from "./ui/Loader/Loader"
import LogOut from "./components/LogOut/LogOut"
// чуть ускорим с lazy/Suspense
const Market = lazy(() => import("./containers/Market/Market"))
const Cart = lazy(() => import("./containers/Cart/Cart"))
const Login = lazy(() => import("./containers/Auth/Login"))
const Singup = lazy(() => import("./containers/Auth/Singup"))
const Home = lazy(() => import("./containers/Home/Home"))

const App = props => {

    const { isUserAuthorized, authWithToken } = props

    useEffect(() => {
        authWithToken()
    }, [authWithToken])

    return (
        <Layout>
            <Suspense fallback={<Loader />}> 
                <Switch>
                    
                    <Route path="/login" component={Login}/>
                    <Route path="/signup" component={Singup}/>
                    { isUserAuthorized ? <Route path="/market" component={Market}/> : <Redirect to="/login"/> }
                    { isUserAuthorized ? <Route path="/cart" component={Cart}/> : <Redirect to="/login"/> }
                    { isUserAuthorized ? <Route path="/" exact component={Home}/> : <Redirect to="/login"/> }
                    { isUserAuthorized ? <Route path="/logout" component={LogOut}/> : <Redirect to="/login"/> }
                </Switch>
            </Suspense>
        </Layout>
    )
}

const mapStateToProps = state => {
    const { auth } = state
    return {
        isUserAuthorized: auth.isUserAuthorized
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authWithToken: () => dispatch(cart.checkMyToken())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)