import React from 'react'
import "./SubTotal.scss"
import CurrencyFormat from "react-currency-format"

const Subtotal = () => {
    return (
        <div className="subtotal">
            <div className="subtotal-text">
                <p>Subtotal<span> (0 items) : </span>
                    <CurrencyFormat
                        fixedDecimalScale={true}
                        value={300.5}
                        decimalScale={2}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"€"}

                        renderText={(value) => (
                            <span className="subtotal-value">
                                {value}
                            </span>
                        )}
                    />

                </p>
                <div className="subtotal-checkout-offer">
                    <input type="checkbox" />
                    <p>This order contains a Gift</p>
                </div>
            </div>


            <div className="subtotal-checkout-btn">
                <button type="button">Proceed to Checkout</button>
            </div>
        </div>
    )
}

export default Subtotal
