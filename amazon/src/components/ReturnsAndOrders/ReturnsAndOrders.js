import React, { useEffect, useState } from "react";
import "./ReturnsAndOrders";
import { useStateValue } from "../../StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../reducer";
import { getTotalProducs } from "../../reducer";
import { Radio, TextField } from "@material-ui/core";
import Paypal from "./img/paypal.png";
import MasterCard from "./img/mastercard.png";
import Visa from "./img/visa.png";
import uuid from "react-uuid";

const ReturnsAndOrders = () => {
	const [loaded, setLoaded] = useState(false);
	const [{ user, basket, contacts }, dispatch] = useStateValue();
	const [selectedValue, setSelectedValue] = useState();
	const [orderInfo, setOrderInfo] = useState();
	const [present, setPresent] = useState(false);
	const [presentNote, setPresentNote] = useState();
	const [submit, setSubmited] = useState(false);

	function imgSelector(img) {
		switch (img) {
			case "Paypal":
				return Paypal;

			case "MasterCard":
				return MasterCard;

			case "VISA":
				return Visa;

			default:
				break;
		}
	}

	return (
		<div className="order">
			<div className="checkout-Order">
				<div className="checkout-banner">
					<div className="checkout-banner-img">
						<img
							alt="card-img"
							src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/OCC_146VC._CB485945274_.jpg"
						/>
					</div>
					<div className="checkout-banner-text">
						<p>
							Pre-Approval with a YES or NO in <strong>60 seconds </strong>for
							Ocean Credit Card get up to <strong>€1,500 credit.</strong>
						</p>
					</div>
					<div className="checkout-banner-btn">
						<img
							src="https://images-na.ssl-images-amazon.com/images/G/02/creditcard/Learn_More._CB485946358_.gif"
							alt="btn"
						/>
					</div>
				</div>
				<div className="personal-info">
					<div>
						<span style={{ textDecoration: "underline" }}>
							{user ? user.email : ""}
						</span>{" "}
					</div>
				</div>
			</div>

			<div className="order-contact-form">
				<h2>Delivery Information</h2>
				<div className="contact-info">
					{contacts.map((contact) => (
						<div>
							<div className="adress">
								<h3>Adress:</h3>
								<p>Full name: {contact.name}</p>
								<p>Adress: {contact.adress}</p>
								<p>City: {contact.city}</p>
								<p>Postal Code: {contact.postal}</p>
								<p>Phone Number: {contact.phone}</p>
							</div>
							<div className="payment">
								<h3>Payment Info</h3>
								<div className="payment-type">
									<img src={imgSelector(contact.method)} alt={contact.method} />
								</div>
								<p>
									Card Number :{contact.cardN} / year :{contact.year} / Code :
									{contact.code}
								</p>
							</div>
						</div>
					))}

					<div className="contact-info-line"></div>
					<div className="subtotal-Order">
						<div className="subtotal-text" style={{ marginTop: "15px" }}>
							<p>
								Total
								<span>
									{" "}
									({basket.length !== 0 ? getTotalProducs(basket) : 0} items) :{" "}
								</span>
								<CurrencyFormat
									fixedDecimalScale={true}
									value={basket.length !== 0 ? getBasketTotal(basket) : 0}
									decimalScale={2}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"€"}
									renderText={(value) => (
										<span className="subtotal-value">{value}</span>
									)}
								/>
							</p>
							<div className="subtotal-checkout-offer">
								<input type="checkbox" onChange={() => setPresent(!present)} />
								<p>This order contains a Gift</p>
								{present ? (
									<div>
										<textarea
											name=""
											id=""
											cols="30"
											rows="10"
											onChange={(e) => setPresentNote(e.target.value)}
										/>
									</div>
								) : (
									""
								)}
							</div>
						</div>
						<div
							className="subtotal-checkout-btn-order"
							style={{ marginTop: "15px" }}>
							<button className="checkout-btn" type="submit" value="Submit">
								Complete Purchase
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReturnsAndOrders;
