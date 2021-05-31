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
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt"

// import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled"

const FoodTable = ({ getColor }) => {
	const [position, setPosition] = useState(0)
	const [clicks, setClicks] = useState(0)
	const [growAnim, setGrowAnim] = useState("")
	const foodTableArr = [
		{
			url: hardorange,
			name: "Pasta with tomato sauce",
			color: "#eb7f5b",
			secondaryColor: "#d87554",
		},
		{
			url: hardgreen,
			name: "Quinoa with Aspargos",
			color: "#95af51",
			secondaryColor: "#86a046",
		},
		{
			url: lightgreen,
			name: "Chicken breast with salted Veggies",
			color: "#d4bd78",
			secondaryColor: "#ceb56a",
		},
		{
			url: lightorange,
			name: "White and wild Rice",
			color: "#cf8585",
			secondaryColor: "#c27676",
		},
		{
			url: orange,
			name: "Salmon with veggies and Almonds",
			color: "#fbbdbd",
			secondaryColor: "#e0a5a5",
		},
		{
			url: pinkish,
			name: "Pea puree wtih Figs",
			color: "#dce1b9",
			secondaryColor: "#c0c87f",
		},
		{
			url: redish,
			name: "Grilled Tuna",
			color: "#FFBC82",
			secondaryColor: "#faaf6d",
		},
	]
	const handleClick = (arrow) => {
		if (arrow === "right") {
			setPosition((position) => (position = position + 51.42))
			if (clicks <= 0) {
				setClicks(6)
			} else {
				setClicks((click) => (click = clicks - 1))
			}
		} else {
			setPosition((position) => (position = position - 51.42))
			if (clicks >= 6) {
				setClicks(0)
			} else {
				setClicks((click) => (click += 1))
			}
		}
		setGrowAnim("grow")
		setTimeout(function () {
			setGrowAnim("")
		}, 500)
	}

	useEffect(() => {
		getColor(foodTableArr[clicks].secondaryColor)
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
				{/* <div className="calltoaction-mainplate">
					<p>Cooked under 5 Min</p>
				</div> */}
				<div
					onClick={() => handleClick("right")}
					className="foodTable-navigate-right"
					style={{ backgroundColor: foodTableArr[clicks].color }}>
					<ArrowRightAltIcon />
				</div>
				<div
					onClick={handleClick}
					className="foodTable-navigate-left"
					style={{ backgroundColor: foodTableArr[clicks].color }}>
					<ArrowRightAltIcon />
				</div>

				<img
					className={growAnim}
					src={foodTableArr[clicks].url}
					alt="hardgreen"
					onClick={handleClick}></img>
				<div className="foodTable-discription">
					<p style={{ color: foodTableArr[clicks].secondaryColor }}>
						{foodTableArr[clicks].name}
					</p>
				</div>
			</div>
		</div>
	)
}

export default FoodTable
