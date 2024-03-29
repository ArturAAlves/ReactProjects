import "./App.scss"
import React from "react"
import Header from "./components/Header"
import FoodTable from "./components/FoodTable"
import CallToAction from "./components/CallToAction"
import { useState } from "react"

function App() {
	const [color, setColor] = useState("")
	const getColor = (item) => {
		setColor((color) => (color = item))
	}
	return (
		<div className="app">
			<Header color={color} />
			<div className="app-hero-container">
				<CallToAction color={color} />
				<FoodTable getColor={getColor} />
			</div>
		</div>
	)
}

export default App
