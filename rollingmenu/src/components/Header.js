import React from "react"
import "./header.scss"
import Logo from "./img/cooking-on-fire-2.svg"

const Header = (color) => {
	// console.log(color)
	return (
		<div className="header">
			<div className="header-left">
				<div className="header-left-logo">
					<img src={Logo} alt="logo" style={{ color }}></img>
					<p>Food Inc.</p>
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
