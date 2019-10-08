import React from "react"
import classes from "./Header.module.scss"
import { NavLink } from "react-router-dom"
import { Navbar, Nav } from "react-bootstrap"
import logo from "../../assets/svg/logo-icon.svg"
import { connect } from "react-redux"

const Header = props => {

    const { isAuth } = props

    return (
        <header>
            <Navbar className={classes.main_navigation} expand="md">
                <Navbar.Brand as="div">
                    <NavLink className={classes.header_logo} to="/">
                        <img 
                            src={logo} 
                            alt="Game Market"
                            className={classes.golo_img}
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
                                {
                                    props.navList.map(link => {
                                        return (
                                            <li 
                                                key={link.path}
                                                className="nav-item"
                                            >
                                                <Nav.Link as="span">
                                                    <NavLink className={classes.header_link} to={link.path}>
                                                        { link.text }
                                                        { 
                                                            link.path === "/logout" ?  <i className="fas fa-sign-out-alt" />: null
                                                        }
                                                    </NavLink>
                                                </Nav.Link>
                                            </li>
                                        )
                                    })
                                }
                                {/* <NavLink as="span">
                                    <NavLink className={classes.header_link} to="/logout">
                                        Log Out
                                        <i className="fas fa-sign-out-alt" />
                                    </NavLink>
                                </NavLink> */}
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
    const { auth } = state
    return {
        isAuth: auth.isUserAuthorized
    }
}


export default connect(mapStateToProps, null)(Header)