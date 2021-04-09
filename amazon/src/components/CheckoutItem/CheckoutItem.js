import React from 'react'
import "./CheckoutItem.scss"
import { useStateValue } from '../../StateProvider'


const ShoppingCartItems = ({ id, title, image, rating, price }) => {
    const [{ basket }, dispatch] = useStateValue()


    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }

    return (
        <div className="CheckoutItem">
            <div className="CheckoutItem-info">
                <div className="CheckoutItem-img">
                    <img alt={title} src={image} />
                </div>
                <div className="CheckoutItem-description">
                    <div className="checkoutItem-title"><p>{title}</p></div>
                    <div className="checkoutItem-remove"><button type="button" onClick={removeFromBasket}>Remove Item</button></div>

                </div>
                <div className="CheckoutItem-price">
                    <span>€{price}</span>
                </div>
            </div>

            <div className="checkoutItem-line">
            </div>
        </div>
    )
}

export default ShoppingCartItems

