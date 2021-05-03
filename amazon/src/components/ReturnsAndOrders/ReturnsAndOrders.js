import "./ReturnsAndOrders";
import { useStateValue } from "../../StateProvider";
import Paypal from "./img/paypal.png";
import MasterCard from "./img/mastercard.png";
import Visa from "./img/visa.png";

const ReturnsAndOrders = () => {
	const [{ purchase, contats }, dispatch] = useStateValue(); // eslint-disable-line

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
	if (purchase[0]) {
		let { basket, purchaseID, address, presentNote } = purchase[0];
		console.log(basket, purchaseID, address, presentNote);
	}

	return (
		<div className="order">
			{/* <div className="checkout-Order">
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
			</div> */}

			<div className="order-contact-form">
				{/* <div className="contact-info">
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
				</div> */}
			</div>
		</div>
	);
};

export default ReturnsAndOrders;
