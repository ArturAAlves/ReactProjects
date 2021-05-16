import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Widgets from "./components/Widgets/Widgets";
import Login from "./components/Login/Login";
import "./app.scss";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
	const [{ user }, dispatch] = useStateValue();
	console.log(user);

	useEffect(() => {
		console.log(user);
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
	}, []);

	console.log(user);
	return (
		<div className="app">
			{!user ? (
				<Login />
			) : (
				<>
					<Header />
					<div className="app-body">
						<Sidebar />
						<Main />
						<Widgets />
					</div>
				</>
			)}
		</div>
	);
}

export default App;
