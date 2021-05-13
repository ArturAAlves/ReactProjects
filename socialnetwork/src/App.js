import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Widgets from "./components/Widgets/Widgets";
import "./app.scss";

function App() {
	return (
		<div className="app">
			<Header />
			<div className="app-body">
				<Sidebar />
				<Main />
				<Widgets />
			</div>
		</div>
	);
}

export default App;
