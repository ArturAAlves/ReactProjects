import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Widgets from "./components/Widgets/Widgets";
import Login from "./Login";
import "./app.scss";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function App() {
	const [{ user }, dispach] = useStateValue();

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
