import React, { useEffect, useState } from "react"
import "./foodTable.scss"
import hardorange from "./img/hardorange.png"
import hardgreen from "./img/hardgreen.png"
import lightgreen from "./img/lightgreen.png"
import lightorange from "./img/lightorange.png"
import orange from "./img/orange.png"
import pinkish from "./img/pinkish.png"
import redish from "./img/redish.png"
import FoodItem from "./FoodItem"

const FoodTable = ({ getColor }) => {
	const [position, setPosition] = useState(0)
	const [clicks, setClicks] = useState(0)
	const [growAnim, setGrowAnim] = useState("")

	const foodTableArr = [
		{ url: hardorange, name: "hardorange", color: "#eb7f5b" },
		{ url: hardgreen, name: "hardgreen", color: "#95af51" },
		{ url: lightgreen, name: "lightgreen", color: "#f6e3ab" },
		{ url: lightorange, name: "lightorange", color: "#cf8585" },
		{ url: orange, name: "orange", color: "#fbbdbd" },
		{ url: pinkish, name: "pinkish", color: "#dce1b9" },
		{ url: redish, name: "redish", color: "#FFBC82" },
	]

	const handleClick = () => {
		setPosition((position) => (position = position - 51.42))
		if (clicks >= 6) {
			setClicks(0)
		} else {
			setClicks((click) => (click += 1))
		}
		setGrowAnim("grow")
		setTimeout(function () {
			setGrowAnim("")
		}, 500)
	}

	useEffect(() => {
		getColor(foodTableArr[clicks].color)
		// eslint-disable-next-line
	}, [position])

	return (
		<div className="foodTable">
			<div
				className="foodTable-big-circle"
				style={{ backgroundColor: foodTableArr[clicks].color }}>
				<div
					className={`foodTable-small-circle`}
					style={{ transform: `translate(0%, 50%) rotate(${position}deg)` }}>
					{foodTableArr.map((item, i) => (
						<FoodItem url={item.url} name={item.name} id={i + 1} key={i} />
					))}
				</div>
			</div>
			<div className="foodTable-mainplate">
				<img
					className={growAnim}
					src={foodTableArr[clicks].url}
					alt="hardgreen"
					onClick={handleClick}></img>
			</div>
		</div>
	)
}

export default FoodTable
