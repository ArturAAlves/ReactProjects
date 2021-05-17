import React from "react";
import "./widgets.scss";
import Embed from "./Embed";
const Widgets = () => {
	let embeeds = [
		{
			type: "iframe",
			title: "Amazon Clone",
			url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6797818690164396032",
			height: 400,
		},
		{
			type: "iframe",
			title: "Just a Crab Dancing",
			url: "https://www.youtube.com/embed/LDU_Txk06tM",
			height: "",
		},
		{
			type: "embed",
			title: "Artur Alves Website",
			url: "https://www.arturalves.com/#projetos-websites",
			height: 400,
		},
	];

	return (
		<div className="widgets">
			{embeeds.map((item, i) => {
				return (
					<Embed
						title={item.title}
						type={item.type}
						embedUrl={item.url}
						key={i}
						height={item.height}
					/>
				);
			})}
		</div>
	);
};

export default Widgets;
