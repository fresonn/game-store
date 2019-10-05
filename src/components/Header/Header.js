import React, { useState } from "react"
import classes from "./Header.module.scss"
import { Link } from "react-router-dom"
import { NavbarToggler, Collapse } from "reactstrap"

const Header = props => {

    const [isOpen, setOpen] = useState(false)

    return (
        <header className={classes.main_header}>
            <nav className="navbar navbar-dark navbar-expand-md">
                <Link className="navbar-brand logo" to="/">
                    Games
                    {/* <img src="" alt=""/> */}
                </Link>
                <NavbarToggler onClick={() => setOpen(!isOpen)} />
                <Collapse isOpen={isOpen} navbar>
                    <ul className="nav navbar-nav ml-auto">
                        {
                            props.navList.map(link => {
                                return (
                                    <li 
                                        key={link.path}
                                        className="nav-item"
                                    >
                                        <Link className="nav-link" to={link.path}>
                                            { link.text }
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </Collapse>
            </nav>
        </header>
    )
}

export default Header