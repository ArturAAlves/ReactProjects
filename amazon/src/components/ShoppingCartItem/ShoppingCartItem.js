import React from 'react'
import "./ShoppingCartItem.scss"


const ShoppingCartItems = (item) => {



    return (
        <div className="shoppingItem">
            {item.title}
        </div>
    )
}

export default ShoppingCartItems

