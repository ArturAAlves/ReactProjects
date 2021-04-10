import React from 'react'
import "./Login.scss"
import AmazonLogo from "./img/amazon-logo-b.png"
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="login">
            <Link to="./">
                <div className="login-img">
                    <img src={AmazonLogo} alt="amazon logo" />
                </div>
            </Link>
            <div className="login-form">
                <h1>Sign-In</h1>
                <form className="login-form-container">
                    <h5>Email</h5>
                    <input type="text"></input>
                    <h5>Password</h5>
                    <input type="password"></input>
                    <button type="button">Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Clone <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088">Conditions of Use</a> and <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496">Privacy Notice</a> .</p>
            </div>
            <div className="login-bar">
                <p>
                    New to Amazon?
                </p>

            </div>
            <div className="login-createAcc">
                <button>Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
