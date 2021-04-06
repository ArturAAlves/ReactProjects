import React from 'react'
import "./Header.scss"
import AmazonLogo from "./img/amazon-logo.png"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
function Header() {
    return (
        <div className="header">
            <img alt="amazon-logo" className="header-logo" src={AmazonLogo} />
            <div className="header-search">
                <input className="header-search-input" type="text">
                </input>
                <SearchIcon className="header-search-icon" />
            </div>
            <div className="header-nav">
                <div className="header-nav-option">
                    <span className="header-option-topLine">Hello</span>
                    <span className="header-option-botLine">Sign in</span>
                </div>
                <div className="header-nav-option">
                    <span className="header-option-topLine">Returns</span>
                    <span className="header-option-botLine">& Orders</span>
                </div>
                <div className="header-nav-option" >
                    <span className="header-option-topLine">Your</span>
                    <span className="header-option-botLine">Prime</span>
                </div>
                <div className="header-nav-cart" >
                    <ShoppingBasketIcon className="nav-cart-icon" />
                    <span className="nav-cart">0</span>
                </div>

            </div>
        </div>
    )
}

export default Header
