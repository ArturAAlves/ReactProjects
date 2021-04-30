import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Footer from "./components/footer/footer";
import AddedToCart from "./components/AddedToCart/AddedToCart";
import "./index.scss";
import Order from "./components/Order/Order";

const App = () => {
	const [{ basket, user, contacts, purchase }, dispatch] = useStateValue();
	const [loaded, setLoaded] = useState(true);

	useEffect(() => {
		//Basket
		const localData = localStorage.getItem("basket");
		if (localData && loaded) {
			dispatch({
				type: "UPDATE_TO_BASKET",
				storage: JSON.parse(localStorage.getItem("basket")),
			});
			setLoaded(false);
		}
		localStorage.setItem("basket", JSON.stringify(basket));

		//Contacts
		const localContactsData = localStorage.getItem("contacts");
		console.log("app", localContactsData);
		if (localContactsData && loaded) {
			dispatch({
				type: "SET_CONTACTS",
				contacts: JSON.parse(localStorage.getItem("contacts")),
			});
			setLoaded(false);
		}
		localStorage.setItem("contacts", JSON.stringify(contacts));

		//Purchase
		const localpurchaseData = localStorage.getItem("purchase");
		if (localpurchaseData && loaded) {
			dispatch({
				type: "SET_PURCHASE",
				contacts: JSON.parse(localStorage.getItem("purchase")),
			});
			setLoaded(false);
		}
		localStorage.setItem("purchase", JSON.stringify(purchase));
	}, [basket, contacts, purchase]);

	// useEffect(() => {
	// 	const localContactsData = localStorage.getItem("contacts");
	// 	// console.log(localContactsData[0].name);

	// 	console.log(localContactsData);
	// 	if (localContactsData && loaded) {
	// 		console.log("localContactsData");
	// 		dispatch({
	// 			type: "SET_CONTACTS",
	// 			contacts: JSON.parse(localStorage.getItem("contacts")),
	// 		});
	// 		setLoaded(false);
	// 	}
	// 	localStorage.setItem("contacts", JSON.stringify(contacts));
	// }, [contacts]); // eslint-disable-line

	// useEffect(() => {
	// 	const localData = localStorage.getItem("basket");
	// 	if (localData && loaded) {
	// 		dispatch({
	// 			type: "UPDATE_TO_BASKET",
	// 			storage: JSON.parse(localStorage.getItem("basket")),
	// 		});
	// 		setLoaded(false);
	// 	}
	// 	localStorage.setItem("basket", JSON.stringify(basket));
	// }, [basket]);

	// useEffect(() => {
	// 	const localpurchaseData = localStorage.getItem("purchase");
	// 	if (localpurchaseData && loaded) {
	// 		dispatch({
	// 			type: "SET_PURCHASE",
	// 			contacts: JSON.parse(localStorage.getItem("purchase")),
	// 		});
	// 		setLoaded(false);
	// 	}
	// 	localStorage.setItem("purchase", JSON.stringify(purchase));
	// }, [purchase]);

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
		return () => {};
	}, []);

	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/order">
						<Header />
						<Order />
					</Route>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/profile">
						<Header />
						<Profile />
					</Route>
					<Route path="/">
						<AddedToCart />
						<Header />
						<Home />
					</Route>
				</Switch>
				<Footer />
				{/* Fix Header component Duplication */}
			</div>
		</Router>
	);
};

export default App;
