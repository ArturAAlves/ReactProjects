import React from "react"

const FoodItem = ({ name, url, id }) => {
	return (
		<div className={`foodTable-smallplate plate-${id}`}>
			<img src={url} alt={name}></img>
		</div>
	)
}

export default FoodItem
