import React from 'react'
import "./Checkout.scss"
import SubTotal from "../SubTotal/SubTotal"
import { useStateValue } from '../../StateProvider'
import ShoppingCartItem from '../ShoppingCartItem/ShoppingCartItem'

const Checkout = () => {

    const [{ basket }, dispatch] = useStateValue()

    return (
        <div className="checkout">
            <div className="checkout-left">
                <div className="checkout-banner">
                    <div className="checkout-banner-img">
                        <img alt="card-img" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/OCC_146VC._CB485945274_.jpg" />
                    </div>
                    <div className="checkout-banner-text">
                        <p>
                            Pre-Approval with a YES or NO in <strong>60 seconds </strong>for Ocean Credit Card get up to <strong>€1,500 credit.</strong>
                        </p>
                    </div>
                    <div className="checkout-banner-btn" >
                        <img src="https://images-na.ssl-images-amazon.com/images/G/02/creditcard/Learn_More._CB485946358_.gif" alt="btn" />
                    </div>
                </div>

                <div className="shoppingCart">
                    <h2>Shopping Cart</h2>
                    {/* <p>Slect all the Items</p> */}
                    <div className="shoppingCart-line">
                        <span>Price</span>
                    </div>
                    <div className="shoppingCart-items">
                        {basket && basket.map((item) => {

                            return <ShoppingCartItem {...item} key={item.id} />
                        })

                        }

                    </div>

                </div>
                {/* 
                <div className="shoppingCart-empty">
                    <img src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg" className />
                </div> */}
            </div>
            <div className="checkout-right">
                <SubTotal />
            </div >
        </div>
    )
}

export default Checkout
