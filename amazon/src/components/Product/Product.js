import React from 'react'
import "./Product .scss"
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import s20 from "./img/products/smartphones/s20.jpg"


function Product() {
    return (
        <div className="product">
            <div className="product-info">
                <h5>The Lean Startup</h5>
                <div className="product-price">
                    <small>$</small><p>11.96</p>
                </div>
            </div>
            <div className="product-img">
                <img src={s20} alt="info" />
            </div>
            <div className="product-rating">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarHalfIcon />
                <StarBorderIcon />
            </div>
            <div className="product-btn-container">
                <button type="button" className="product-btn">Add to Basket</button>
            </div>
        </div>
    )
}

export default Product
