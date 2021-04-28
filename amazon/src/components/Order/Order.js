import React, { useEffect, useState } from "react";
import "./Order.scss";
import { useStateValue } from "../../StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../reducer";
import { getTotalProducs } from "../../reducer";
import { Radio, TextField } from "@material-ui/core";
import paypal from "./img/paypal.png";
import mastercard from "./img/mastercard.png";
import visa from "./img/visa.png";

const Order = () => {
	const orderInfoTemp = [
		{
			name: "",
			adress: "",
			city: "",
			postal: "",
			phone: "",
			method: "",
			cardN: "",
			year: "",
			code: "",
		},
	];

	const [loaded, setLoaded] = useState(false);
	const [{ user, basket, contacts }, dispatch] = useStateValue();
	const [selectedValue, setSelectedValue] = useState("MasterCard");
	const [orderInfo, setOrderInfo] = useState();

	const handleChange = (event) => {
		let value = event.target.value;
		let field = event.target.id;
		switch (field) {
			case "name":
				setOrderInfo({ ...orderInfo, name: value });
				break;
			case "adress":
				setOrderInfo({ ...orderInfo, adress: value });
				break;
			case "city":
				setOrderInfo({ ...orderInfo, city: value });
				break;
			case "postal":
				setOrderInfo({ ...orderInfo, postal: value });
				break;
			case "phoneNumber":
				setOrderInfo({ ...orderInfo, phone: value });
				break;
			case "typeA":
				setOrderInfo({ ...orderInfo, method: value });
				break;
			case "typeB":
				setOrderInfo({ ...orderInfo, method: value });
				break;
			case "typeC":
				setOrderInfo({ ...orderInfo, method: value });
				break;
			case "cardNumber":
				setOrderInfo({ ...orderInfo, cardN: value });
				break;
			case "year":
				setOrderInfo({ ...orderInfo, year: value });
				break;
			case "securityCode":
				setOrderInfo({ ...orderInfo, code: value });
				break;
			default:
				break;
		}
		if (field === "typeC" || field === "typeB" || field === "typeA") {
			setSelectedValue(value);
			console.log("hello");
		}
	};

	useEffect(() => {
		setLoaded(true);
		if (!loaded) {
			setOrderInfo(...orderInfoTemp);
		}

		return () => {};
	}, [loaded]);

	// function validation() {
	// 	let email = /\S+@\S+\.\S+/.test(email.value)
	// 		? ""
	// 		: "Please Enter an Email Email";
	// 	let mobile = phone.value.length < 9 ? "" : "Please enter 10 numbers";
	// }

	const addToContacts = () => {
		dispatch({
			type: "SET_CONTACTS",
			contacts: orderInfo,
		});
	};

	function handleSubmit(e) {
		e.preventDefault();
		addToContacts();
	}

	console.log("order", contacts);
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
			{/* name: "", adress: "", city: "", postal: "", phone: "", method: "", cardN:
			"", year: "", code: "", */}
			<div className="order-contact-form">
				<h2>Delivery Information</h2>
				{contacts ? (
					<div className="contact-info">
						<div className="adress">
							<h3>Adress Information</h3>
							<p>Full name: {contacts.name}</p>
							<p>Adress: {contacts.adress}</p>
							<p>City: {contacts.city}</p>
							<p>Postal Code: {contacts.postal}</p>
							<p>Phone Number: {contacts.phone}</p>
						</div>

						<div className="payment">
							<h3>Payment Information</h3>
							<div className="payment-type">
								<img src="" alt="" />
							</div>
							<p>
								Card Number :{contacts.cardN} / year :{contacts.year} / year :
								{contacts.code}
							</p>
						</div>
					</div>
				) : (
					<form onSubmit={handleSubmit}>
						<TextField
							required
							onChange={handleChange}
							id="name"
							label="Full Name"
							placeholder="Full Name"
							variant="outlined"

							// helperText="Please Enter Your name"
						/>

						<TextField
							required
							onChange={handleChange}
							id="adress"
							label="Adress"
							placeholder="Adress"
							variant="outlined"
						/>

						<div className="order-contact-form-sub">
							<TextField
								required
								onChange={handleChange}
								id="city"
								label="City"
								placeholder="City"
								variant="outlined"
							/>
							<TextField
								required
								onChange={handleChange}
								id="postal"
								label="Postal Code"
								placeholder="Postal Code"
								variant="outlined"
							/>
						</div>

						<TextField
							required
							onChange={handleChange}
							style={{ width: "225px" }}
							id="phoneNumber"
							label="Phone number"
							placeholder="Phone number"
							variant="outlined"
						/>
						<h3 style={{ marginTop: "15px" }}>Payment Method</h3>
						<div className="order-contact-form-payment-method">
							<div className="payment-method">
								<Radio
									required
									id="typeA"
									onChange={handleChange}
									checked={selectedValue === "MasterCard"}
									value="MasterCard"
									color="default"
									name="radio-button-demo"
									inputProps={{ "aria-label": "MasterCard" }}
									size="small"
								/>
								<img src={mastercard} alt="mastercard" />
							</div>
							<div className="payment-method">
								<Radio
									required
									id="typeB"
									onChange={handleChange}
									checked={selectedValue === "VISA"}
									value="VISA"
									color="default"
									name="radio-button-demo"
									inputProps={{ "aria-label": "VISA" }}
									size="small"
								/>
								<img src={visa} alt="visa" />
							</div>
							<div className="payment-method">
								<Radio
									required
									id="typeC"
									checked={selectedValue === "Paypal"}
									onChange={handleChange}
									value="Paypal"
									color="default"
									name="radio-button-demo"
									inputProps={{ "aria-label": "Paypal" }}
									size="small"
								/>
								<img src={paypal} alt="paypal" />
							</div>
						</div>
						<div className="order-contact-form-payment">
							<TextField
								required
								id="cardNumber"
								onChange={handleChange}
								label="Card Number"
								placeholder="Card Number"
								variant="outlined"
							/>

							<TextField
								required
								id="year"
								onChange={handleChange}
								label="Year"
								placeholder="Year"
								variant="outlined"
							/>
							<TextField
								required
								onChange={handleChange}
								id="securityCode"
								label="Code"
								placeholder="Code"
								variant="outlined"
							/>
						</div>
						<div className="subtotal-Order">
							<div className="subtotal-text">
								<p>
									Total
									<span>
										{" "}
										({basket.length !== 0 ? getTotalProducs(basket) : 0} items)
										:{" "}
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
									<input type="checkbox" />
									<p>This order contains a Gift</p>
								</div>
							</div>
							<div className="subtotal-checkout-btn-order">
								<button className="checkout-btn" type="submit" value="Submit">
									Comple Purchase
								</button>
							</div>
						</div>
					</form>
				)}
			</div>
		</div>
	);
};

export default Order;
