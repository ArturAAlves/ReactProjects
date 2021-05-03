import React, { useEffect, useState } from "react";
import "./Order.scss";
import { useStateValue } from "../../StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../reducer";
import { getTotalProducs } from "../../reducer";
import { Radio, TextField } from "@material-ui/core";
import Paypal from "./img/paypal.png";
import MasterCard from "./img/mastercard.png";
import Visa from "./img/visa.png";
import uuid from "react-uuid";
import AddIcon from "@material-ui/icons/Add";
import AddressItem from "./../AddressItem/AdressItem";

//line 355

const Order = () => {
	const orderInfoTemp = [
		{
			name: "",
			address: "",
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
	const [{ user, basket, contacts, purchase }, dispatch] = useStateValue();
	const [selectedValue, setSelectedValue] = useState();
	const [orderInfo, setOrderInfo] = useState();
	const [present, setPresent] = useState(false);
	const [presentNote, setPresentNote] = useState();
	const [submited, setSubmited] = useState(false);
	const [addContact, setAddContact] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [selectedAdress, setSelectedAdress] = useState(0);

	const handleChange = (event) => {
		let value = event.target.value;
		let field = event.target.id;
		switch (field) {
			case "name":
				setOrderInfo({ ...orderInfo, name: value });
				break;
			case "address":
				setOrderInfo({ ...orderInfo, address: value });
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
		}
	};

	//Submit Contacts
	const handleSubmitAddress = (e) => {
		e.preventDefault();
		setAddContact(!addContact);
		window.scrollTo(0, 0);
		dispatch({
			type: "SET_CONTACTS",
			contacts: orderInfo,
		});
	};

	//Purchase
	const handlePurchase = (e) => {
		e.preventDefault();
		let address = contacts[selectedAdress];

		if (basket.length > 0 && contacts.length > 0) {
			setSubmited(true);
			window.scrollTo(0, 0);
			setErrorMessage("");

			dispatch({
				type: "SET_PURCHASE",
				data: {
					purchaseID: uuid(),
					address,
					basket,
					presentNote,
				},
			});

			dispatch({
				type: "CLEAR_BASKET",
			});

			setTimeout(function () {
				window.open("/");
			}, 2500);

			// browserHistory.push("/");
		} else if (basket.length <= 0) {
			setErrorMessage("Please Add Items to the Shopping Cart");
		}
	};

	useEffect(() => {
		setLoaded(true);
		if (!loaded) {
			setOrderInfo(...orderInfoTemp);
		}

		return () => {};
	}, [loaded]); // eslint-disable-line

	// console.log("hello", purchase);
	// function validation() {
	// 	let email = /\S+@\S+\.\S+/.test(email.value)
	// 		? ""
	// 		: "Please Enter an Email Email";
	// 	let mobile = phone.value.length < 9 ? "" : "Please enter 10 numbers";
	// }

	const hangleSelectedAddress = (e) => {
		setSelectedAdress(e);
		// console.log("order,console", e);
	};

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
			{!submited ? (
				<div className="order-contact-form">
					<h2>Delivery Information</h2>

					<div className="contact-info">
						<div className="address-container">
							<div
								className="address-box-add"
								onClick={(e) => setAddContact(!addContact)}>
								<AddIcon className="add-icon" />
								<p>Add Address</p>
							</div>
							{contacts.map((contact, i) => (
								<AddressItem
									contantIfo={contact}
									id={i}
									key={i}
									select={hangleSelectedAddress}
									active={selectedAdress}
								/>
							))}
						</div>
					</div>

					{addContact ? (
						<form onSubmit={handleSubmitAddress}>
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
								id="address"
								label="address"
								placeholder="address"
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
									<img src={MasterCard} alt="mastercard" />
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
									<img src={Visa} alt="visa" />
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
									<img src={Paypal} alt="paypal" />
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
								<div className="subtotal-checkout-btn-order">
									<button className="checkout-btn" type="submit" value="Submit">
										Submit
									</button>
								</div>
							</div>
						</form>
					) : (
						""
					)}

					{!addContact && contacts.length > 0 ? (
						<form onSubmit={handlePurchase}>
							<div className="subtotal-Order">
								<div className="subtotal-text" style={{ marginTop: "50px" }}>
									<p>
										Total
										<span>
											{" "}
											({basket.length !== 0 ? getTotalProducs(basket) : 0}{" "}
											items) :{" "}
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
										<div className="checkbox-container">
											<input
												type="checkbox"
												onChange={() => setPresent(!present)}
											/>
											<p>This order contains a Gift</p>
										</div>
										{present ? (
											<div className="gift-details">
												<textarea
													name=""
													id=""
													rows="4"
													onChange={(e) => setPresentNote(e.target.value)}
												/>
											</div>
										) : (
											""
										)}
									</div>
								</div>
							</div>

							<div
								className="subtotal-checkout-btn-order"
								style={{ marginTop: "100px" }}>
								<button className="checkout-btn" type="submit" value="Submit">
									Complete Purchase
								</button>
							</div>
							<div>{errorMessage}</div>
						</form>
					) : (
						""
					)}
					{contacts.length <= 0 ? (
						<div className="no-adress">
							<p>Delivery Information is missing, please enter an Address</p>
						</div>
					) : (
						""
					)}
				</div>
			) : purchase[purchase.length - 1] ? (
				<div className="form-submited">
					<p>
						Your order with ID:
						<span> {purchase[purchase.length - 1].purchaseID} </span>, was
						placed. Please visit Returns & Orders for more details.
					</p>
				</div>
			) : (
				"..."
			)}
		</div>
	);
};

export default Order;
