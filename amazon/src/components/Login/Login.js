import React from 'react'
import "./Login.scss"
import AmazonLogo from "./img/amazon-logo-b.png"

const Login = () => {
    return (
        <div className="login">
            <div className="login-img">
                <img src={AmazonLogo} alt="amazon logo" />
            </div>
        </div>
    )
}

export default Login
