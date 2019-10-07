import React from "react"
import classes from "./Market.module.scss"
import Product from "../../components/Product/Product"
import { connect } from "react-redux"
import { Container, Row } from "react-bootstrap"

const Market = props => {
    const { allGoods } = props
    return (
        <section className={classes.market_section}>
            <Container fluid>
                <Row className={classes.products_row} noGutters as="ul">
                    {
                        allGoods.map(product => {
                            return (
                                <Product 
                                    key={product.code}
                                    title={product.title}
                                    img={product.img}
                                    price={product.price}
                                    code={product.code}
                                />
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}

const mapStateToProps = state => {
    const  { market } = state 
    return {
        allGoods: market.allGoods
    }
}

export default connect(mapStateToProps, null)(Market)