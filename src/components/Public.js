import { Link } from "react-router-dom";

import React from 'react'

const Public = () => {
    return (
        <>
            <h1>Welcome</h1>
            <Link to="/login">Login</Link>
        </>

    )
}

export default Public