import React from "react";
import "./embed.scss";
// import TouchAppIcon from "@material-ui/icons/TouchApp";
const Embed = ({ type, embedUrl, title, height }) => {
	// const heightValue = () => {
	// 	return height ? height : (height = "100%");
	// };

	return (
		<div className="embed">
			<div className="embed-title">
				<div className="embed-title-text">
					<h4>{title}</h4>
				</div>
				<div className="embed-title-link">{/* <TouchAppIcon /> */}</div>
			</div>

			{type === "iframe" ? (
				<iframe
					src={embedUrl}
					width="350px"
					height={height ? height : (height = "auto")}
					allowfullscreen="true"
					title="Embeded publication"></iframe>
			) : (
				<embed
					src="https://www.arturalves.com"
					style={{
						height: height ? height : (height = "100%"),
						width: "350px",
					}}
				/>
			)}
		</div>
	);
};

export default Embed;
