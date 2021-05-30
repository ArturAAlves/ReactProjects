import React from "react"
import "./calltoaction.scss"

const CallToAction = (color) => {
	return (
		<div className="calltoaction">
			<div className="calltoaction-time">
				<p style={color}>5 Min</p>
			</div>
			<div className="calltoaction-tittle">
				<p> Good food, good mood</p>
			</div>
			<div className="calltoaction-text">
				<p>
					You don’t need a silver fork to eat good food, there is no sincere
					love than the love of food
				</p>
			</div>
			<button
				className="calltoaction-btn"
				style={{ backgroundColor: color.color }}>
				Cook Now
			</button>
		</div>
	)
}

export default CallToAction
