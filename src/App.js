import React, { lazy, Suspense } from "react"
import "./index.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "./hoc/Layout/Layout"
import { Route, Switch } from "react-router-dom"
// чуть ускорим с lazy/Suspense
const Market = lazy(() => import("./containers/Market/Market"))
const Cart = lazy(() => import("./containers/Cart/Cart"))
const Auth = lazy(() => import("./containers/Auth/Auth"))

const App = props => {
    return (
        <Layout>
            <Suspense fallback={null}> 
                <Switch>
                    <Route path="/market" component={Market}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/login" component={Auth}/>
                </Switch>
            </Suspense>
        </Layout>
    )
}

export default App