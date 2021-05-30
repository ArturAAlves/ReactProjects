import React from "react"
import "./header.scss"

const Header = () => {
	return (
		<div className="header">
			<div className="header-left">
				<div className="header-left-logo">
					<p>Food Inc</p>
				</div>
				<div className="header-left-menu">
					<ul>
						<li>Breakfast</li>
						<li className="menu-selected">Lunch</li>
						<li>Dinner</li>
					</ul>
				</div>
			</div>
			<div className="header-rigth"></div>
		</div>
	)
}

export default Header
