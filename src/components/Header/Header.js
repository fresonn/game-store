import React from "react"
import classes from "./Header.module.scss"
import { NavLink } from "react-router-dom"
import { Navbar, Nav } from "react-bootstrap"
import logo from "../../assets/svg/logo-icon.svg"

const Header = props => {

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
                <Navbar.Toggle className={classes.toggler} aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
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
                                            </NavLink>
                                        </Nav.Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header