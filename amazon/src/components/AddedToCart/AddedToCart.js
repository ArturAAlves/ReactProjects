import React from 'react'
import "./AddedToCart.scss"

const AddedToCart = () => {
    return (
        <div className="addedToCart">
            <div className="addedToCart-img">
                <img />
            </div>
            <div className="addedToCart-info">
                <div className="addedToCart-info-discription"></div>
                <div className="addedToCart-info-buttons">
                    <button>Cart</button>
                    <button>Proceed to Chechout(X items)</button>
                </div>
            </div>
        </div>
    )
}

export default AddedToCart
