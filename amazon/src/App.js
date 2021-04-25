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

const App = () => {
	const [{ basket, user }, dispatch] = useStateValue();
	const [loaded, setLoaded] = useState(true);

	useEffect(() => {
		const localData = localStorage.getItem("basket");
		if (localData && loaded) {
			dispatch({
				type: "UPDATE_TO_BASKET",
				storage: JSON.parse(localStorage.getItem("basket")),
			});
			setLoaded(false);
		}
		localStorage.setItem("basket", JSON.stringify(basket));
		// console.log(JSON.parse(localStorage.getItem("basket") || "[]"))
	}, [basket]);

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
					<Route path="/checkout">
						<Header />
						<Checkout style />
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
