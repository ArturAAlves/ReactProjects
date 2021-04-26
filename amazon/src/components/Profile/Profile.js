import React from "react";
import "./Profile.scss";
import { useStateValue } from "../../StateProvider";

const Profile = () => {
	const [{ user }, dispatch] = useStateValue();

	return (
		<div className="checkout">
			<div className="checkout-left">
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
						Your UserName:{" "}
						<span style={{ textDecoration: "underline" }}>
							{" "}
							{user ? user.email : ""}{" "}
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
		</div>
	);
};

export default Profile;
