import React, { useEffect, useState } from "react";
import "./Profile.scss";
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

const Profile = () => {
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
	const [{ user, contacts }, dispatch] = useStateValue();
	const [selectedValue, setSelectedValue] = useState();
	const [orderInfo, setOrderInfo] = useState();
	const [submited, setSubmited] = useState(false);
	const [addContact, setAddContact] = useState(false);
	const [selectedAdress, setSelectedAdress] = useState(null);

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
		setSelectedAdress(11);
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
							User : {user ? user.email : ""}
						</span>{" "}
					</div>
					<br />
					<div>
						<p>
							The information is limited since the registration is processed
							through
							<a href="https://firebase.google.com/" alt="firebase">
								{" "}
								Firebase
							</a>
						</p>
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
					{contacts.length <= 0 ? (
						<div className="no-adress">
							<p>Delivery Information is missing, please enter an Address</p>
						</div>
					) : (
						""
					)}
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default Profile;
