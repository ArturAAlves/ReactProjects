import React, { useEffect } from "react";
import "./Header.scss";
import AmazonLogo from "./img/amazon-logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";
import { getTotalProducs } from "../../reducer";
import DropDown from "../DropDown/DropDown";

function Header() {
	const [{ basket, user }, dispatch] = useStateValue();

	function scrollTop() {
		window.scrollTo(0, 0);
	}

	const handleAuthentication = (e) => {
		if (user) {
			auth.signOut();
		}
	};

	return (
		<div className="header" onClick={() => scrollTop()}>
			<Link to="./">
				<img alt="amazon-logo" className="header-logo" src={AmazonLogo} />
			</Link>

			<div className="header-search">
				<input className="header-search-input" type="text"></input>
				<SearchIcon className="header-search-icon" />
			</div>

			<div className="header-nav">
				<div className="header-nav-option">
					{/* onClick={handleAuthentication} */}
					<span className="header-option-topLine">
						hello {user ? user.email.split("@")[0] : ""}{" "}
					</span>
					<span className="header-option-botLine">
						{!user ? (
							<Link to="./login">
								<DropDown name={!user ? "Login" : "My account"} />
							</Link>
						) : (
							<DropDown
								name={!user ? "Login" : "My account"}
								items={[
									{ item: "profile", to: "./profile" },
									user
										? {
												item: "Log Out",
												to: "./",
												action: handleAuthentication,
										  }
										: "",
								]}
							/>
						)}
					</span>
				</div>
				{user ? (
					<div className="header-nav-option text-disabled">
						<span className="header-option-topLine">Returns</span>
						<span className="header-option-botLine">& Orders</span>
					</div>
				) : (
					""
				)}
				<div className="header-nav-option text-disabled">
					<span className="header-option-topLine">Your</span>
					<span className="header-option-botLine">Prime</span>
				</div>

				<Link to="./checkout" onClick={() => scrollTop()}>
					<div className="header-nav-cart">
						<ShoppingBasketIcon className="nav-cart-icon" />
						<span className="nav-cart">
							{basket ? getTotalProducs(basket) : ""}
						</span>
					</div>
				</Link>
			</div>
			<div className></div>
		</div>
	);
}

export default Header;
