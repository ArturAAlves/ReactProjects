import "./ReturnsAndOrders";
import { useStateValue } from "../../StateProvider";
import Paypal from "./img/paypal.png";
import MasterCard from "./img/mastercard.png";
import Visa from "./img/visa.png";
import "./ReturnsAndOrders.scss";

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
		console.log(purchase);
	}

	const timer = (countDownDate) => {
		let newDate = parseInt(countDownDate);
		var now = new Date().getTime();
		var timeleft = newDate - now;
		var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
		var hours = Math.floor(
			(timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
		// console.log(timeleft);
	};

	return (
		<div className="orders-and-returns">
			<div className="orders-container">
				{purchase.map((order) => (
					<div className="order-container" key={order.purchaseID}>
						<div className="order-info">
							<div className="order-id">
								<p>
									Order ID: <span>{order.purchaseID}</span>
								</p>
							</div>
							<div className="order-date">
								<p className="order-tittle">Order Date</p>
								{/* <p>{order.date}</p> */}
								<p>04 de abril de 2021</p>
							</div>
							{order.date ? timer(order.date) : ""}
							<div className="order-value">
								<p className="order-tittle">Value</p>
								<p>€450</p>
							</div>

							<div className="order-contact-info">
								<p className="order-tittle">Send To</p>
								<p>{order.name}</p>
								<p>{order.address.address}</p>
								<p>
									{order.address.city}, {order.address.postal}
								</p>

								<p>{order.address.phone}</p>
							</div>
							<div className="order-payment-info">
								<div className="order-payment-tittle order-tittle">
									Payment Info
								</div>
								<div className="order-payment-type">
									<img
										src={imgSelector(order.address.method)}
										alt={order.address.method}
									/>
								</div>
								<ul>
									<li>
										<span>Card:</span> {order.address.cardN}
									</li>
									<li>
										<span>Year:</span> {order.address.year}
									</li>
									<li>
										<span>Code:</span> {order.address.code}
									</li>
								</ul>
							</div>
						</div>

						<div className="order-product-info">
							<div className="order-item-list">
								{order.basket.map((item, i, itemArray) => (
									<div className="order-item" key={i}>
										<div className="order-item-info-container">
											<div className="order-item-img">
												<img src={item.image} alt={item.title} />
											</div>
											<div className="order-item-info">
												<p className="order-item-info-tittle">{item.title}</p>
												<div style={{ marginTop: "5px" }}>
													<p>Price: {item.price}</p>
													<p>Qty: {item.qty}</p>
												</div>
											</div>
										</div>
										{itemArray.length === i + 1 ? (
											""
										) : (
											<div className="order-item-division"></div>
										)}
									</div>
								))}
							</div>

							{order.presentNote ? (
								<div className="order-note">
									<p>{order.presentNote}</p>
								</div>
							) : (
								""
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ReturnsAndOrders;
