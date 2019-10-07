import React from "react"
import { Spinner } from "react-bootstrap"

export default () => (
    <div style={{
        width: "30px",
        margin: "0 auto",
        marginTop: "120px"
    }}>
        <Spinner 
            animation="border"
            variant="primary" 
        >
            <span className="sr-only">Loading...</span>
        </Spinner>
    </div>
)