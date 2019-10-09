import React from "react"
import classes from "./Header.module.scss"
import { NavLink } from "react-router-dom"
import { Navbar, Nav } from "react-bootstrap"
import logo from "../../assets/svg/logo-icon.svg"
import { connect } from "react-redux"

const Header = props => {

    const { isAuth, cart } = props

    return (
        <header>
            <Navbar className={classes.main_navigation} expand="md">
                <Navbar.Brand as="div">
                    <NavLink className={classes.header_logo} to="/">
                        <img 
                            src={logo} 
                            alt="Game Market"
                            className={classes.logo_img}
                        />
                        <span>Games</span>
                    </NavLink>
                </Navbar.Brand>
                {
                    isAuth ? null : 
                    <NavLink className={classes.login_link} to="/login">
                        Log in
                        <i className="fas fa-sign-in-alt" />
                    </NavLink>
                }

                {
                    isAuth ?
                    <>
                        <Navbar.Toggle className={classes.toggler} aria-controls="user-navbar-nav">
                            <i className="fas fa-bars" />
                        </Navbar.Toggle>
                        <Navbar.Collapse id="user-navbar-nav">
                            <ul className="nav navbar-nav ml-auto">
                                <Nav.Link as="li">
                                    <NavLink className={classes.header_link} to="/market">
                                        Market
                                    </NavLink>
                                </Nav.Link>
                                <Nav.Link as="li">
                                    <NavLink className={classes.header_link} to="/cart" >  
                                        Cart
                                        {
                                            cart.length > 0 ? <span className={classes.car_counter}>{ cart.length }</span> : null
                                        }
                                    </NavLink>
                                </Nav.Link>
                                <Nav.Link as="li">
                                    <NavLink className={classes.header_link} to="/logout" >  
                                        Log Out
                                        <i className="fas fa-sign-out-alt" />
                                    </NavLink>
                                </Nav.Link>
                            </ul>
                        </Navbar.Collapse>
                    </>
                    :
                    null
                }
                
            </Navbar>
        </header>
    )
}

const mapStateToProps = state => {
    const { auth, cart } = state
    return {
        isAuth: auth.isUserAuthorized,
        cart: cart.allGoods
    }
}


export default connect(mapStateToProps, null)(Header)