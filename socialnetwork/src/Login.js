import React from "react";
import "./login.scss";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

const Login = () => {
	const [state, dispach] = useStateValue();

	const handleSignIn = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				dispach({
					type: actionTypes.SET_USER,
					user: result.user,
				});
			})
			.catch((error) => error.message);
	};
	return (
		<div className="login">
			<button type="submit" onClick={handleSignIn}>
				Log in
			</button>
		</div>
	);
};

export default Login;
