import React from 'react'
import "./footer.scss"
import amazonLogo from "./img/amazon-logo-b.png"

const footer = () => {
    return (
        <div classname="footer">
            <div className="footer-back-top">
                Back to top
            </div>
            <div className="footer-info">
                <div className="footer-info-us">
                    <div>
                        <h3> Get to Know Us</h3>
                    </div>
                    <ul>
                        <li>
                            Careers
                        </li>
                        <li>
                            Careers
                        </li>
                        <li>
                            Blog
                        </li>
                        <li>
                            About Amazon
                        </li>
                        <li>
                            Investor Relations
                        </li>
                        <li>
                            Amazon Devices
                        </li>
                        <li>
                            Amazon Tours
                        </li>
                    </ul>

                </div>
                <div className="footer-info-money">
                    <div>
                        <h3> Make Money with Us</h3>
                    </div>
                    <ul>
                        <li>
                            Sell products on Amazon
                        </li>
                        <li>
                            Sell on Amazon Business
                        </li>
                        <li>
                            Sell apps on Amazon
                        </li>
                        <li>
                            Become an Affiliate
                        </li>
                        <li>
                            Advertise Your Products
                        </li>
                        <li>
                            Self-Publish with Us
                        </li>
                        <li>
                            Host an Amazon Hub
                        </li>
                        <li>
                            ›See More Make Money with Us
                        </li>
                    </ul>
                </div>
                <div className="footer-info-payment">
                    <div>
                        <h3> Make Money with Us</h3>
                    </div>
                    <ul>
                        <li>
                            Amazon Business Card
                        </li>
                        <li>
                            Shop with Points
                        </li>
                        <li>
                            Reload Your Balance
                        </li>
                        <li>
                            Amazon Currency Converter
                        </li>

                    </ul>
                </div>
            </div>
            <div className="footer-line"></div>

            <div className="footer-bottom">
                <div className="footer-bottom-logo">
                    <img alt="amazon" src={amazonLogo} />
                </div>
            </div>
        </div>

    )
}

export default footer
