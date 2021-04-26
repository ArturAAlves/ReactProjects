import React, { useEffect, useState } from "react";
import "./Order.scss";
import { useStateValue } from "../../StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../reducer";
import { getTotalProducs } from "../../reducer";
import { Link } from "react-router-dom";
import { Radio, TextField } from "@material-ui/core";
import { Translate } from "@material-ui/icons";

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
	const [{ user, basket }, dispatch] = useStateValue();
	const [selectedValue, setSelectedValue] = React.useState("a");
	const [orderInfo, setOrderInfo] = useState();

	const handleChange = (event) => {
		let value = event.target.value;
		let field = event.target.id;
		setSelectedValue(event.target.value);
		switch (field) {
			case "name":
				setOrderInfo({ ...orderInfo, name: value });
				break;
			case "adress":
				setOrderInfo({ ...orderInfo, adress: value });
				break;
			default:
				break;
		}
	};

	useEffect(() => {
		setLoaded(true);
		if (!loaded) {
			setOrderInfo(...orderInfoTemp);
		}
		return () => {};
	}, [loaded]);

	console.log(orderInfo);
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
				<form>
					<TextField
						onChange={handleChange}
						id="name"
						label="Full Name"
						placeholder="Full Name"
						variant="outlined"
					/>
					<TextField
						onChange={handleChange}
						id="adress"
						label="Adress"
						placeholder="Adress"
						variant="outlined"
					/>
					<div className="order-contact-form-sub">
						<TextField
							onChange={handleChange}
							id="city"
							label="City"
							placeholder="City"
							variant="outlined"
						/>
						<TextField
							onChange={handleChange}
							id="postal"
							label="Postal Code"
							placeholder="Postal Code"
							variant="outlined"
						/>
					</div>

					<TextField
						onChange={handleChange}
						style={{ width: "225px" }}
						id="PhoneNumber"
						label="Phone number"
						placeholder="Phone number"
						variant="outlined"
					/>
					<h3 style={{ marginTop: "15px" }}>Payment Method</h3>
					<div className="order-contact-form-payment-method">
						<Radio
							checked={selectedValue === "a"}
							onChange={handleChange}
							value="a"
							color="default"
							name="radio-button-demo"
							inputProps={{ "aria-label": "A" }}
							size="small"
						/>
						<Radio
							checked={selectedValue === "b"}
							onChange={handleChange}
							value="b"
							color="default"
							name="radio-button-demo"
							inputProps={{ "aria-label": "B" }}
							size="small"
						/>
						<Radio
							checked={selectedValue === "c"}
							onChange={handleChange}
							value="c"
							color="default"
							name="radio-button-demo"
							inputProps={{ "aria-label": "C" }}
							size="small"
						/>
						<Radio
							checked={selectedValue === "d"}
							onChange={handleChange}
							value="d"
							color="default"
							name="radio-button-demo"
							inputProps={{ "aria-label": "D" }}
							size="small"
						/>
					</div>
					<div className="order-contact-form-payment">
						<TextField
							onChange={handleChange}
							id="cardNumber"
							label="Card Number"
							placeholder="Card Number"
							variant="outlined"
						/>

						<TextField
							onChange={handleChange}
							id="year"
							label="Year"
							placeholder="Year"
							variant="outlined"
						/>
						<TextField
							onChange={handleChange}
							id="securityCode"
							label="Code"
							placeholder="Code"
							variant="outlined"
						/>
					</div>
				</form>
			</div>

			<div className="subtotal-Order">
				<div className="subtotal-text">
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
						<input type="checkbox" />
						<p>This order contains a Gift</p>
					</div>
				</div>
				<div className="subtotal-checkout-btn-order">
					<Link to="./order">
						<button className="checkout-btn" type="button">
							Comple Purchase
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Order;
