import React from "react"
import Header from "../../components/Header/Header"
import { connect } from "react-redux"

const Layout = props => {
    return (
        <div>
            <Header 
                navList={props.navList}
            />
            <main>
                { props.children }
            </main>
        </div>
    )
}


const mapStateToProps = state => {
    const { header } = state
    return {
        navList: header.navItems
    }
}

export default connect(mapStateToProps, null)(Layout)